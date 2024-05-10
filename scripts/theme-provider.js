const toggle = document.querySelector("#themeToggler");
const label = document.getElementById('toggleLabel');
const moonIcon = document.getElementById('moon');
const sunIcon = document.getElementById('sun');
const githubIcon = document.getElementById('github');
const linkedinIcon = document.getElementById('linkedin');

let isLight = true;


toggle.addEventListener("click", modeSwitch);
isLight ? label.innerText = "Dark mode" : label.innerText = "Light mode";
isLight ? sunIcon.style.display = 'none' : sunIcon.style.display = 'block';
isLight ? moonIcon.style.display = 'block' : moonIcon.style.display = "none";


function modeSwitch() {
  isLight = !isLight;
  isLight ? label.innerText = "Dark Mode" : label.innerText = "Light mode";
  isLight ? sunIcon.style.display = 'none' : sunIcon.style.display = "block";
  isLight ? moonIcon.style.display = 'block' : moonIcon.style.display = "none";

  var rootElement = document.body;
  rootElement.classList.toggle("dark_mode");
}