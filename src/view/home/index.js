import RepoComponent from "./repo/index.js";

const container = document.createElement("div");
container.classList.add("container__home");

const content = document.createElement("div");
content.classList.add("content__home");

const inputBar = document.createElement("div");
inputBar.classList.add("inputBar__home");

const userName = document.createElement("p");
userName.classList.add("userName__home");

const fetchBtn = document.createElement("button");
fetchBtn.textContent = "Buscar repositório";
fetchBtn.classList.add("fetchBtn__home");

const nameInput = document.createElement("input");
nameInput.placeholder = "Insira o nome do usuário";
nameInput.classList.add("nameInput__home");

inputBar.append(nameInput, fetchBtn);

content.append(inputBar, userName);

container.append(content);

export default {
  container,
  content,
  inputBar,
  fetchBtn,
  nameInput,
  userName,
};
