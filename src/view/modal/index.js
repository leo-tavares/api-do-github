const modalContainer = document.createElement("div");
modalContainer.classList.add("modalContainer", "wrapper");

const modalContent = document.createElement("div");
modalContent.classList.add("modalContent");

const modalText = document.createElement("p");
modalText.classList.add("modalText");

const closeBtn = document.createElement("button");
closeBtn.textContent = "Tentar novamente";
closeBtn.onclick = () => modalContainer.remove();
closeBtn.classList.add("closeBtn");


modalContent.append(modalText, closeBtn);
modalContainer.append(modalContent);

export default { modalContainer, modalContent, modalText, closeBtn };
