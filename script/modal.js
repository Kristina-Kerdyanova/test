
const buttonDownload = document.querySelector(".btn-download");
const modalDownload = document.querySelector(".modal-download");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalDownloadBtnClose = document.querySelector(".modal-download_btn-close");

buttonDownload.addEventListener("click", function () {
  modalDownload.classList.add("modal-download_active");
  modalWrapper.classList.add("modal-wrapper_active-download");
});

modalDownloadBtnClose.addEventListener("click", function () {
  modalDownload.classList.remove("modal-download_active");
  modalWrapper.classList.remove("modal-wrapper_active-download");
});


