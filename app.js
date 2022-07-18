const fileInput = document.querySelector(".file-input");
const chooseImgBtn = document.querySelector(".choose-img");
const previewImg = document.querySelector(".preview-img img");

const loadImage = () => {
  let file = fileInput.files[0];
  if (!file) {
    return;
  }
  previewImg.src = URL.createObjectURL(file);
};

chooseImgBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", loadImage);
