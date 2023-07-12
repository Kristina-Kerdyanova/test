import { Viewer } from "@photo-sphere-viewer/core";
import images from "./images.js";

const blockMain = document.querySelector(".main");
const modalReview = document.querySelector(".modal-review");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalReviewBtnClose = document.querySelector(".modal-review_btn-close");
const viewerContainer = document.querySelector("#viewer");
const modalReviewTitle = document.querySelector(".modal-review_title");
let viewer;

function addFotoReview(panoramaUrl, nameReview) {
  viewer?.destroy();
  modalReviewTitle.innerHTML = nameReview;
  viewer = new Viewer({
    container: viewerContainer,
    panorama: panoramaUrl,
  });
}

blockMain.addEventListener("click", (event) => {
  const closestButton = event.target.closest(".btn-review");
  const closestButtonID = closestButton.id;
  const currentImageData = images.find(({ id }) => id === closestButtonID);
  if (currentImageData.src) {
    modalReview.classList.add("modal-review_active");
    modalWrapper.classList.add("modal-wrapper_active-review");
    addFotoReview(currentImageData.src, currentImageData.name);
  }
});

modalReviewBtnClose.addEventListener("click", () => {
  modalReview.classList.remove("modal-review_active");
  modalWrapper.classList.remove("modal-wrapper_active-review");
});
