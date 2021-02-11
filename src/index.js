import ghConttroller from "./controller/githubController.js";
import Home from "./view/home/index.js";
const gh = new ghConttroller();

// gh.fetchUser("leo-tavaresad5asda5sd4");

const { fetchBtn, nameInput } = Home;

fetchBtn.onclick = () => {
  const { value } = nameInput;
  gh.fetchRepo(value);
};

document.body.append(Home.container);
