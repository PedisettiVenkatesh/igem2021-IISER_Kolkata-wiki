const progressBar = document.getElementById("progressBar");
const scrollPath = document.getElementById("scrollPath");
const topBtn = document.getElementById("toTop");
const overlayAppearValue = 300;
const preloader = document.getElementById("preloader");

function preload() {
  preloader.style.opacity = "0";
  preloader.style.zIndex = "-999999";
  document.documentElement.scrollTop = 0;
  document.body.classList.remove("noScroll");
}

window.onscroll = function () {
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.height = progressHeight + "%";

  console.log(window.pageYOffset, document.body.scrollTop, document.documentElement.scrollTop);
  if (document.body.scrollTop > overlayAppearValue || document.documentElement.scrollTop > overlayAppearValue || window.pageYOffset > overlayAppearValue) {
    topBtn.style.height = "50px";
    topBtn.style.opacity = "1";
    scrollPath.style.opacity = "1";
  } else {
    topBtn.style.height = "0";
    topBtn.style.opacity = "0";
    scrollPath.style.opacity = "0";
  }
};
