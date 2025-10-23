import { projectsData } from "consts/project-data";
        import { selectedTechnologies, handleFilterClick } from "filter-menu";

        const showResultsLabel = document.getElementById("show-results-label");

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


        /**
         * Dynamically replaces the placeholder with the full YouTube iframe (the function 
         * from the previous example, which is required for the new HTML to work).
         * @param {HTMLElement} placeholderElement The div element that was clicked.
         */
        function loadVideo(placeholderElement) {
            console.log("clikc!");
            const videoId = placeholderElement.dataset.videoId;
            if (!videoId) return;

            const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', embedUrl);
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            iframe.style.width = '100%'; 
            iframe.style.height = '100%';
            
            const videoContainer = document.createElement('div');
            videoContainer.classList.add('video-container');
            videoContainer.appendChild(iframe);

            placeholderElement.replaceWith(videoContainer);
        }


        /**
         * Helper function to extract the YouTube video ID from various URL formats.
         * @param {string} url The full YouTube URL.
         * @returns {string|null} The video ID (e.g., "dQw4w9WgXcQ") or null if invalid.
         */
        function extractYouTubeId(url) {
            if (!url) return null;
            const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/;
            const match = url.match(regex);
            return (match && match[1].length === 11) ? match[1] : null;
        }

        /**
         * Creates the HTML string for a row of technology icons and names, without any styling classes.
         * @param {string[]} technologies The list of technology names.
         * @returns {string} HTML string for the icon row.
         */
        function createTechStackContentHTML(technologies) {
            return technologies.map(route => {
                return `
                    <div class="tech-icon-item">
                        <img src="images/${route}.svg" alt="${route} icon" width="24" height="24" 
                             onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');" />
                        <img src="images/${route}.png" alt="${route} icon" width="24" height="24" class="hidden" 
                             onerror="this.style.display='none';" />
                    </div>
                `;
            }).join('');
        }

        /**
         * Renders the media content (placeholder for video or direct image) for a project.
         * @param {Object} project
         * @returns {string} HTML string for the media content.
         */
        function renderMediaContent(project) {
            const videoId = extractYouTubeId(project.videoLink);

            if (videoId) {
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                
                return `
                    <div class="media-section video-placeholder rounded-t-xl" id="video-${project.id}" data-video-id="${videoId}">
                        <img src="${thumbnailUrl}" alt="Video Thumbnail for ${project.title}">
                        <div class="play-button">
                           <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px">
                                <circle cx="480" cy="-480" r="380" fill="#000000" fill-opacity="0.6"/>
                                <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" fill="#FFFFFF"/>
                            </svg>     
                        </div>
                        </div>
                        `;
                    }
            
            const imagePath = project.image;
            return `
                <img src="${imagePath}" alt="${project.title}" 
                     class="rounded-t-xl" 
                     onerror="this.src='https://placehold.co/600x400/7c3aed/ffffff?text=Image+Not+Found'" 
                     style="width:100%; height:auto;">
            `;
        }

        /**
         * Renders the detailed floating window content for a project.
         * @param {Object} project
         * @returns {string} HTML string
         */
        function renderFloatingWindowContent(project) {
            const media = renderMediaContent(project);
            const functionalitiesList = project.functionalities
                .map((f) => `<li>${f}</li>`)
                .join("");
            
            const techStackContent = createTechStackContentHTML(project.techStack);

            return `
            <div class="close-wrapper">
                <button id="close-floating-window">&times;</button>
            </div>
                <article>
                    <section>${media}</section>
                    <section class="project-click">                        
                        <h4>${project.title}</h4>
                        <br>
                        <div><p>${project.description}</p></div>
                        <br>
                        <div><p class="negrita">Key functionalities:</p></div>
                        <div class"hidden"><ul>${functionalitiesList}</ul></div>
                        <div><p class="negrita mb-1">Tech Stack:</p></div>
                        <div class="tech-stack-section">${techStackContent}</div>
                    </section>
                </article>
            `;
        }

        /**
         * Opens the detailed floating window for a project.
         * @param {number} index - Index of the project in projectsData.
         */
        function handleProjectClick(index) {
            const project = projectsData[index];
            const projectsContainer = document.querySelector(".projects-grid");
            const existingFloatingWindow = document.querySelector(".floating-window");
            const existingBackdrop = document.querySelector(".backdrop");

            if (existingFloatingWindow) {
                existingFloatingWindow.remove();
            }

            if (existingBackdrop) {
                existingBackdrop.remove();
            }

            const backdrop = createElement("div", "backdrop");
            document.body.appendChild(backdrop);
            const floatingWindow = createElement("div", "floating-window");
            document.body.appendChild(floatingWindow);
            
            document.body.style.overflow = 'hidden'; 

            floatingWindow.innerHTML = renderFloatingWindowContent(project);

            const videoPlaceholder = floatingWindow.querySelector('.video-placeholder');
            if (videoPlaceholder) {
                videoPlaceholder.addEventListener('click', () => {
                    loadVideo(videoPlaceholder);
                });
            }

            document
                .getElementById("close-floating-window")
                .addEventListener("click", () => {
                    floatingWindow.remove();
                    backdrop.remove();
                    projectsContainer.classList.remove("collapsed");
                    document.body.style.overflow = '';
                });
        }

        let renderTimes = 0;

        export function renderProjectsGrid() {
            renderTimes++;
            const projectsContainer = document.querySelector(".projects-grid");
            if (!projectsContainer) return;

            projectsContainer.innerHTML = "";

            let index = 0;
            for (const project of projectsData) {

                let hasTechnology = false;
                project.techStack.forEach((tech) => {
                    if (selectedTechnologies.includes(tech) || !selectedTechnologies.length) hasTechnology = true;
                }); 

                if (!hasTechnology) continue;

                const media = renderMediaContent(project);
                
                const techStackContent = createTechStackContentHTML(project.techStack);
                
                const isSameLink = project.links.site === project.links.code;
                const siteLinkHTML = isSameLink 
                    ? '' 
                    : `<a href="${project.links.site}" target="_blank"><span>View site</span></a>`;

                const projectHTML = `
                    <div class="project-container ${!renderTimes ? "with-fadein-animation" : ""}">
                        <article class="project-article">
                            <section>${media}</section>
                            <section class="project-click" data-project-index="${index}">                        
                                <h4>${project.title}</h4>
                                <br>
                                <p>${project.description}</p>
                                </section>
                                <div class="project-footer">
                                <aside> 
                                <div class="align-left"><p class="negrita">Tech Stack:</p></div>
                                <div class="tech-stack-section">${techStackContent}</div>
                                    <p class="read-more-button">Read more!</p>
                                    <hr/>
                                    <div class="more-section">
                                        ${siteLinkHTML}
                                        <a href="${project.links.code}" target="_blank"><span>View code</span></a>
                                    </div>
                                    </aside>
                            </div>
                        </article>
                    </div>
                `;
                projectsContainer.insertAdjacentHTML('beforeend', projectHTML);
                index++;
            }
                

            document.querySelectorAll(".project-click").forEach((section) => {
                const index = parseInt(section.getAttribute('data-project-index'), 10);
                section.addEventListener("click", () => handleProjectClick(index));
            });
        }

        /**
         * Initializes global event listeners and footer content.
         */
        function initializeGlobalElements() {
            // FIX: Apply scroll animation class here
            const scrollPromptElement = document.getElementById('scroll-prompt');
            if (scrollPromptElement) {
                // The class 'scroll-prompt-animation' contains the keyframes for the animation
                scrollPromptElement.classList.add('scroll-prompt-animation');
            }

            const projectsContainer = document.querySelector(".projects-grid");

            if (projectsContainer) {
                projectsContainer.addEventListener('click', (event) => {
                    const placeholder = event.target.closest('.video-placeholder');
                    
                    if (placeholder) {
                        loadVideo(placeholder);
                    }
                });
            }

            document.addEventListener("keydown", function (event) {
                if (event.key === "Escape") {
                    const existingFloatingWindow = document.querySelector(".floating-window");
                    const existingBackDrop = document.querySelector(".backdrop");
                    if (existingFloatingWindow) {
                        existingBackDrop.remove();
                    }
                    if (existingFloatingWindow) {
                        existingFloatingWindow.remove();
                        if (projectsContainer) {
                            projectsContainer.classList.remove("collapsed");
                        }
                    }
                }
            });

            const today = new Date();
            const dateBirth = new Date("1998-08-26");
            let yearsOld = today.getFullYear() - dateBirth.getFullYear();
            const hasBirthdayPassed =
            today.getMonth() > dateBirth.getMonth() ||
            (today.getMonth() === dateBirth.getMonth() &&
            today.getDate() >= dateBirth.getDate());
            
            const startDate = new Date("2024-07-28"); 
            let yearsOfExpText = "";

            let totalMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());

            if (today.getDate() < startDate.getDate()) {
                totalMonths--;
            }
            
            const X = Math.floor(totalMonths / 12);
            const M = totalMonths % 12;

            if (M >= 0 && M <= 4) {
                yearsOfExpText = `a little over ${X} years of professional experience `;
            } else if (M >= 5 && M <= 8) {
                yearsOfExpText = `over ${X} years of  professional experience `;
            } else {
                yearsOfExpText = `almost ${X + 1} years of  professional experience`;
            }
            
            const yearsOldElement = document.getElementById("years-old");
            if (yearsOldElement) {
                yearsOldElement.innerText = yearsOld;
            }

            const yearsOfExpElement = document.getElementById("years-exp");
            if (yearsOfExpElement) {
                yearsOfExpElement.innerText = yearsOfExpText;
            }

            

            const copyrightElement = document.getElementById("copyright-text");
            if (copyrightElement) {
                copyrightElement.innerText = `© ${today.getFullYear()} Pere Palacín Pallàs - All Rights Reserved`;
            }
        }

        document.addEventListener("DOMContentLoaded", function () {
            renderProjectsGrid();
            initializeGlobalElements();
        });

        export function renderFiltersBar() {
            const filterChips = document.getElementById("filter-chips");

            if (selectedTechnologies.length) {
                showResultsLabel.style.display = '';
            } else {
                showResultsLabel.style.display = 'none';
            }
            filterChips.innerHTML = '';
            selectedTechnologies.forEach(route => {
                const imageWrapper = createElement('div', 'filter-item tech-selected');

                const img = createElement('img', null);
                img.src = `images/${route}.svg`;
                img.alt = route;
                img.width = 28;
                img.height = 28;
                img.onerror = function () { this.style.display = 'none'; };
                const img2 = createElement('img', null);
                img2.src = `images/${route}.png`;
                img2.alt = route;
                img2.width = 28;
                img2.height = 28;
                img2.onerror = function () { this.style.display = 'none'; };
                imageWrapper.appendChild(img);
                imageWrapper.appendChild(img2);
                const label = createElement('p', null, route);
                imageWrapper.appendChild(label);
                imageWrapper.addEventListener('click', () => {
                    handleFilterClick(imageWrapper);
                });
                filterChips.appendChild(imageWrapper);
            });
        }
