/**
 * nome dos repositórios, link dos repositórios e linguagem de programação do
repositório
 */

export default () => {
  const container = document.createElement("div");
  container.classList.add("container__repo");

  const repoName = document.createElement("p");
  repoName.classList.add("repoName__repo");

  const repoLink = document.createElement("a");
  repoLink.textContent = "Link"
  repoLink.classList.add("a__repo");

  const repoLang = document.createElement("p");
  repoLang.classList.add("repoLang__repo");

  container.append(repoName, repoLink, repoLang);

  return {
    container,
    repoName,
    repoLink,
    repoLang,
  };
};
