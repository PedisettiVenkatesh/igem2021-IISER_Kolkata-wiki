const progressBar = document.getElementById("progressBar");
const scrollPath = document.getElementById("scrollPath");
const topBtn = document.getElementById("toTop");
const overlayAppearValue = 300;
const preloader = document.getElementById("preloader");
const navToggler = document.getElementById("navToggler");
const navigationContainer = document.querySelector(".navigation-container");
const navDrops = document.querySelectorAll(".navDrop");
const dragBtn = document.getElementById("progressBtn");
const mainNavLinks = document.querySelectorAll(".scrollID");

function preload() {
  preloader.style.opacity = "0";
  preloader.style.zIndex = "-999999";
  document.documentElement.scrollTop = 0;
  document.body.classList.remove("noScroll");
  preloader.style.visibility = "hidden";
}

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
};

navToggler.onclick = function () {
  navigationContainer.classList.toggle("navigation-expanded");
  removeNavDropExpanded();
};

// navigationContainer.onclick = function () {
//   navigationContainer.classList.toggle("navigation-expanded");
// };

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
}

window.onclick = function (event) {
  if (event.target.matches(".navigation-container")) {
    removeNavigationExpanded();
  }
};

// var firstY = dragBtn.offsetTop;
// console.log(firstY);
// dragBtn.ondrag = function () {
//   var lastY = dragBtn.offsetTop;
//   console.log("dragged", firstY, lastY);
// };

function scrollToID(hash) {
  var topOffSet = 50;
  var distance = document.getElementById(hash).offsetTop - topOffSet;
  window.scrollTo(0, distance);
  // document.getElementById(hash).scrollIntoView();

  // return hash;
}

// function getArg(item) {
//   var arg = scrollToID(item);
//   return arg;
// }

window.onscroll = function () {
  const fromTop = window.pageYOffset + 50;

  mainNavLinks.forEach((item) => {
    const section = document.getElementById(item.id + "Section");
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      item.classList.add("scrollID-active");
    } else {
      item.classList.remove("scrollID-active");
    }
  });
};
