const progressBar = document.getElementById("progressBar");
const scrollPath = document.getElementById("scrollPath");
const topBtn = document.getElementById("toTop");
const overlayAppearValue = 300;

window.onscroll = function () {
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.height = progressHeight + "%";

  console.log(window.pageYOffset, document.body.scrollTop, document.documentElement.scrollTop);
  if (document.body.scrollTop > overlayAppearValue || document.documentElement.scrollTop > overlayAppearValue || window.pageYOffset > overlayAppearValue) {
    topBtn.style.height = "50px";
    scrollPath.style.opacity = "1";
  } else {
    topBtn.style.height = "0";
    scrollPath.style.opacity = "0";
  }
};
