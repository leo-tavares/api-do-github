import UserModel from "../model/userModel.js";
import Api from "../api/index.js";
import Modal from "../view/modal/index.js";
import Home from "../view/home/index.js";
import RepoComponent from "../view/home/repo/index.js";

class GithubController {
  constructor() {
    this._api = Api();
    this._model = new UserModel({});
  }

  showError(msg) {
    Modal.modalText.textContent = msg;
    Modal.closeBtn.addEventListener("click", () => {
      Home.nameInput.value = "";
    });
    document.body.appendChild(Modal.modalContainer);
  }

  updateHome() {
    const { name, repos } = this._model.getUser();
    const { userName, content } = Home;
    userName.textContent = name;
    repos.map((repo) => {
      const { name, language, html_url } = repo;
      const { container, repoLang, repoLink, repoName } = RepoComponent();

      repoLang.textContent = `Linguagem principal => ${language}`;
      repoLink.href = html_url;
      repoName.textContent = `Nome do projeto => ${name}`;
      content.append(container);
    });
  }

  fetchRepo(user) {
    this._api.open("GET", `https://api.github.com/users/${user}/repos`);
    this._api.onload = () => {
      const response = JSON.parse(this._api.response);
      console.log(response);
      console.log(this._api.status);
      if (this._api.status === 404) {
        this.showError("Usuário não encontrado!");
      } else {
        this._model.setName(user);
        this._model.setRepos(response);

        this.updateHome();
      }
    };
    this._api.send();
  }
}

export default GithubController;
