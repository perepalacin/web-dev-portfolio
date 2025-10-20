// Get references to the elements
const home = document.getElementById("home");
const about = document.getElementById("about");
const experience = document.getElementById("experience");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const highlighted = document.getElementById("highlighted");
const homeButton = document.getElementById("homeButton");
const aboutButton = document.getElementById("aboutButton");
const experienceButton = document.getElementById("experienceButton");
const skillsButton = document.getElementById("skillsButton");
const projectsButton = document.getElementById("projectsButton");
const highlightedButton = document.getElementById("highlightedButton");
homeButton.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
aboutButton.addEventListener("click", (e)=>{
    e.preventDefault();
    about.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
});
skillsButton.addEventListener("click", (e)=>{
    e.preventDefault();
    skills.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
});
experienceButton.addEventListener("click", (e)=>{
    e.preventDefault();
    experience.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
});
projectsButton.addEventListener("click", (e)=>{
    e.preventDefault();
    projects.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
});
highlightedButton.addEventListener("click", (e)=>{
    e.preventDefault();
    highlighted.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
});
window.addEventListener('scroll', navbarHighlight, {
    passive: true
});
let elementsArray = document.getElementsByClassName("with-fadein-animation");
function navbarHighlight() {
    for(let i = 0; i < elementsArray.length; i++){
        var elem = elementsArray[i];
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 200;
        if (distInView < 0) {
            switch(elem.id){
                case "about":
                    aboutButton.classList.add('highlighted-button');
                    homeButton.classList.remove('highlighted-button');
                    skillsButton.classList.remove('highlighted-button');
                    experienceButton.classList.remove('highlighted-button');
                    projectsButton.classList.remove('highlighted-button');
                    highlightedButton.classList.remove('highlighted-button');
                    break;
                case "skills":
                    skillsButton.classList.add('highlighted-button');
                    aboutButton.classList.remove('highlighted-button');
                    homeButton.classList.remove('highlighted-button');
                    projectsButton.classList.remove('highlighted-button');
                    experienceButton.classList.remove('highlighted-button');
                    highlightedButton.classList.remove('highlighted-button');
                    break;
                case "projects":
                    projectsButton.classList.add('highlighted-button');
                    skillsButton.classList.remove('highlighted-button');
                    aboutButton.classList.remove('highlighted-button');
                    homeButton.classList.remove('highlighted-button');
                    experienceButton.classList.remove('highlighted-button');
                    highlightedButton.classList.remove('highlighted-button');
                    break;
                case "experience":
                    experienceButton.classList.add('highlighted-button');
                    skillsButton.classList.remove('highlighted-button');
                    aboutButton.classList.remove('highlighted-button');
                    homeButton.classList.remove('highlighted-button');
                    projectsButton.classList.remove('highlighted-button');
                    highlightedButton.classList.remove('highlighted-button');
                    break;
                case "highlighted":
                    highlightedButton.classList.add('highlighted-button');
                    experienceButton.classList.remove('highlighted-button');
                    skillsButton.classList.remove('highlighted-button');
                    aboutButton.classList.remove('highlighted-button');
                    homeButton.classList.remove('highlighted-button');
                    projectsButton.classList.remove('highlighted-button');
                    break;
            }
            if (window.scrollY < 500) {
                homeButton.classList.add('highlighted-button');
                highlightedButton.classList.remove('highlighted-button');
                projectsButton.classList.remove('highlighted-button');
                skillsButton.classList.remove('highlighted-button');
                experienceButton.classList.remove('highlighted-button');
                aboutButton.classList.remove('highlighted-button');
            }
        }
    }
}
navbarHighlight();
if (window.scrollY == 0) {
    homeButton.classList.add('highlighted-button');
    projectsButton.classList.remove('highlighted-button');
    experienceButton.classList.remove('highlighted-button');
    skillsButton.classList.remove('highlighted-button');
    aboutButton.classList.remove('highlighted-button');
    highlightedButton.classList.remove('highlighted-button');
}

//# sourceMappingURL=web-dev-portfolio.92265e52.js.map
