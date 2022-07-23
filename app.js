const fileInput = document.querySelector(".file-input");
const chooseImgBtn = document.querySelector(".choose-img");
const previewImg = document.querySelector(".preview-img img");
const filterOptions = document.querySelectorAll(".filter button");
const filterName = document.querySelector(".filter-info .name");

const loadImage = () => {
  let file = fileInput.files[0];
  if (!file) {
    return;
  }
  previewImg.src = URL.createObjectURL(file);
  previewImg.addEventListener("load", () => {
    document.querySelector(".container").classList.remove("disable");
  });
};

filterOptions.forEach((options) => {
  options.addEventListener("click", () => {
    document.querySelector(".filter .active").classList.remove("active");
    options.classList.add("active");
    filterName.innerHTML = options.innerHTML;
  });
});

chooseImgBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", loadImage);
