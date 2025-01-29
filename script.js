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
          "w-full h-60 rounded-lg shadow-md transition-all duration-300 group-hover:grayscale";

        //Create hover & greyscale

        const hoverOverlay = document.createElement("div");
        hoverOverlay.className =
          "absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300";

        const hoverTitle = document.createElement("p");
        hoverTitle.textContent = projects.title;
        hoverTitle.className = "text-white text-lg font-bold";

        // add link to github
        const gitHubLink = document.createElement("a");
        gitHubLink.href = projects.link;
        gitHubLink.target = "_blank";
        gitHubLink.rel = "noopener noreferrer";
        gitHubLink.textContent = "GitHub ";
        gitHubLink.className = "text-white hover:text-red-300 ";

        // add github logo
        const gitHubLogo = document.createElement("i");
        gitHubLogo.className =
          "fa-brands fa-square-github hover:text-red-300 text-white";

        gitHubLink.appendChild(gitHubLogo);

        hoverOverlay.appendChild(hoverTitle);
        hoverOverlay.appendChild(gitHubLink);
        // Create the description
        const description = document.createElement("p");
        description.textContent = projects.description;
        description.className = "mt-3 text-gray-700";

        // add all elements to the grid

        portfolioGrid.appendChild(images);
        portfolioGrid.appendChild(hoverOverlay);
        portfolioGrid.appendChild(description);
        // Add the grid to the portfolio
        portfolio.appendChild(portfolioGrid);
      });
    });
}
loadProjects();
