import { projectsData } from "./consts/project-data";
import { renderProjectsGrid, renderFiltersBar } from "./projects";
const techStack = [];

export let selectedTechnologies = [];

projectsData.forEach((project) => {
  project.techStack.forEach((tech) => {
    if (!techStack.includes(tech)) {
      techStack.push(tech)
    }
  })
});

/**
 * Creates an HTML element with optional classes and inner text.
 * @param {string} tag
 * @param {string} [className]
 * @param {string} [text]
 * @returns {HTMLElement}
 */
function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}

  const toggleButton = document.getElementById('filter-toggle');
  const popoverMenu = document.getElementById('filter-menu');
  

  function showMenu() {
    const rect = toggleButton.getBoundingClientRect();
    
    popoverMenu.classList.add('is-open');
    popoverMenu.setAttribute('aria-hidden', 'false');

    
  }

  function hideMenu() {
    popoverMenu.classList.remove('is-open');
    popoverMenu.setAttribute('aria-hidden', 'true');
    toggleButton.focus();
  }
  
  function toggleMenu() {
    if (popoverMenu.classList.contains('is-open')) {
      hideMenu();
    } else {
      showMenu();
    }
  }

  toggleButton.addEventListener('click', toggleMenu);

  popoverMenu.addEventListener('click', (e) => {
    if (e.target.matches('[role="menuitem"]')) {
      hideMenu();
    }
  });

  document.addEventListener('mousedown', (e) => {
    const isClickOnToggle = toggleButton.contains(e.target);
    const isClickInsideMenu = popoverMenu.contains(e.target);

    if (!isClickOnToggle && !isClickInsideMenu && popoverMenu.classList.contains('is-open')) {
      hideMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popoverMenu.classList.contains('is-open')) {
      hideMenu();
    }
  });

  window.addEventListener('resize', () => {
      if (popoverMenu.classList.contains('is-open')) {
      showMenu();
    }
  });
  window.addEventListener('scroll', () => {
    if (popoverMenu.classList.contains('is-open')) {
      showMenu();
    }
  });


  /**
 *
 * @param {string[]} technologies - An array of strings, where each string is the route (src) of an image.
 */
function createTechFiltersMap(technologies) {
    const mapContainer = createElement('div', 'filter-map-container');

    technologies.forEach(route => {
        const imageWrapper = createElement('div', 'filter-item');

        const img = createElement('img', null);
        img.src = `/images/${route}.svg`;
        img.alt = route;
        img.width = 28;
        img.height = 28;
        img.onerror = function() { this.style.display = 'none'; };
        const img2 = createElement('img', null);
        img2.src = `/images/${route}.png`;
        img2.alt = route;
        img2.width = 28;
        img2.height = 28;
        img2.onerror = function() { this.style.display = 'none'; };
      imageWrapper.appendChild(img);
      imageWrapper.appendChild(img2);
      const label = createElement('p', null, route);
      imageWrapper.appendChild(label);
      imageWrapper.addEventListener('click', () => {
        handleFilterClick(imageWrapper);
      });
      mapContainer.appendChild(imageWrapper);
    });

    
  const filterMenu = document.getElementById("filter-menu");
    filterMenu.appendChild(mapContainer);
}

 createTechFiltersMap(techStack);


export function handleFilterClick(item) {
  const label = item.querySelector('p')?.textContent ?? "";
  if (!selectedTechnologies.includes(label)) {
    item.classList.add("tech-selected");
    selectedTechnologies.push(label);
  } else {
    item.classList.remove("tech-selected");
    selectedTechnologies = selectedTechnologies.filter((tech) => tech !== label);
  }
  renderProjectsGrid();
  renderFiltersBar();
}