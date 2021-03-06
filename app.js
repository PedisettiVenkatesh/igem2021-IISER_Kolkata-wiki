const progressBar = document.getElementById("progressBar");
const scrollPath = document.getElementById("scrollPath");
const topBtn = document.getElementById("toTop");
const overlayAppearValue = 300;
const navToggler = document.getElementById("navToggler");
const navTogglerImg = document.getElementById("navTogglerImg");
const navigationContainer = document.querySelector(".navigation-container");
const navDrops = document.querySelectorAll(".navDrop");
const dragBtn = document.getElementById("progressBtn");

// preloader
const preloader = document.getElementById("preloader");

function preload() {
  preloader.style.opacity = "0";
  preloader.style.zIndex = "-999999";
  document.body.classList.remove("noScroll");
  preloader.style.visibility = "hidden";
}
// preloader

window.onscroll = function () {
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.height = progressHeight + "%";

  // console.log(window.pageYOffset);

  if (document.body.scrollTop > overlayAppearValue || document.documentElement.scrollTop > overlayAppearValue || window.pageYOffset > overlayAppearValue) {
    topBtn.style.height = "50px";
    topBtn.style.opacity = "1";
    topBtn.style.visibility = "visible";
    scrollPath.style.opacity = "1";
  } else {
    topBtn.style.height = "0";
    topBtn.style.opacity = "0";
    topBtn.style.visibility = "hidden";
    scrollPath.style.opacity = "0";
  }

  var scrollPathHeight = scrollPath.offsetHeight;
  var progressBarHeight = progressBar.offsetHeight;

  var differenceHeight = scrollPathHeight - progressBarHeight;

  if (differenceHeight < 0) {
    differenceHeight = -1 * differenceHeight;
  }

  if (differenceHeight < 20) {
    scrollPath.style.opacity = "0";
  }

  // console.log(window.scrollY - 400);

  highlightActiveSection();

  hideOnScroll();
};

navToggler.onclick = function () {
  navigationContainer.classList.toggle("navigation-expanded");
  document.body.classList.toggle("noScroll");

  changeToggleBtn();

  removeNavDropExpanded();
};

navDrops.forEach((item) =>
  item.addEventListener("mouseover", function () {
    removeNavDropExpanded();
    item.classList.toggle("navDrop-expanded");
  })
);

function removeNavDropExpanded() {
  navDrops.forEach((item) => item.classList.remove("navDrop-expanded"));
}

function removeNavigationExpanded() {
  navigationContainer.classList.remove("navigation-expanded");
  document.body.classList.toggle("noScroll");
}

window.onclick = function (event) {
  if (event.target.matches(".navigation-container")) {
    changeToggleBtn();
    removeNavigationExpanded();
  }

  if (event.target.matches(".profile__modal")) {
    removeProfileExpanded();
  }
};

var myOffset = 75;

if (window.matchMedia("(max-width: 980px)").matches) {
  var myOffset = 500;
}

function scrollToID(hash) {
  // var topOffSet = myOffset;
  var distance = document.getElementById(hash).offsetTop - myOffset;
  window.scrollTo(0, distance);
}
