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
      const portfolio = document.querySelector("#portfolioGrid");
      portfolio.innerHTML = "";

      data.projects.forEach((projects) => {
        //Create the grid

        const portfolioGrid = document.createElement("div");
        portfolioGrid.className = "relative group mx-auto w-80 md:w-96";

        // Input the images from the JSON file
        const images = document.createElement("img");
        images.src = projects.image;
        images.alt = projects.alt;
        images.className =
          "w-full h-60 rounded-lg shadow-lg transition-all duration-300 group-hover:grayscale";

        //Create hover & greyscale

        const hoverOverlay = document.createElement("div");
        hoverOverlay.className =
          "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300";

        const hoverTitle = document.createElement("p");
        hoverTitle.textContent = projects.title;
        hoverTitle.className = "text-white text-lg font-bold";

        hoverOverlay.appendChild(hoverTitle);

      
      });
    })

loadProjects();
