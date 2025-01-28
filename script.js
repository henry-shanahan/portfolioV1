"use-strict";
document.querySelector("#downArrow").addEventListener("click", arrowClick);
function arrowClick(event) {
  navbar.classList.add("shadow-lg");
}

window.addEventListener("scroll", pageScroll);
function pageScroll(e) {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
}
