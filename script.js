"use-strict";

// Add shadow to nav bar on click

document.querySelector("#downArrow").addEventListener("click", arrowClick);
function arrowClick(event) {
  navbar.classList.add("shadow-lg");
}

// Add shadow to nav bar on scroll

window.addEventListener("scroll", pageScroll);
function pageScroll(e) {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
}

// Fetch the JSON file and empty the HTML
function loadProjects() {
  fetch("projects.json")
    .then((response) => response.json())
    .then((data) => {
      const porfolioGrid = document.querySelector("#portfolioGrid");
      porfolioGrid.innerHTML = "";
    });
}
loadProjects();
