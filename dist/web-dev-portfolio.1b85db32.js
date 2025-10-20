document.addEventListener("DOMContentLoaded", function() {
    const projectsContainer = document.querySelector(".projects-grid");
    const projectsList = document.getElementById("projects-list");
    const projectsData = [
        {
            title: "Finance Tracker",
            videoLink: "https://www.youtube.com/embed/8If4jhFIqis?si=NEXmt8bIdndJDau6",
            description: "Finance Tracker built with Spring Boot (Java), SQL (Hibernate) and React (TypeScript).",
            functionalities: [
                "Allow users to track their income, expenses, investment and transfers accross different bank accounts.",
                "Offer a visually appealing main dashboard with KPIs and graphs to get all the necessary information in just one screen.",
                "Authentication of users managed by Spring Security using JWT tokens",
                "A lot of effort was put in the Endpoint design to ensure a testable and maintainable code."
            ],
            techStack: [
                "Java",
                "Springboot",
                "React",
                "TypeScript",
                "SQL",
                "Hibernate",
                "Recharts"
            ],
            tags: [
                "SpringSecurity",
                "SpringJPA",
                "OOP",
                "Object Oriented Programming",
                "Forms",
                "SQLRelations",
                "Auth"
            ],
            links: {
                site: "https://github.com/perepalacin/finance-tracker",
                code: "https://github.com/perepalacin/finance-tracker"
            }
        },
        {
            title: "Whatsapp FullStack Clone",
            videoLink: "https://www.youtube.com/embed/UEOvp1GehT0?si=z85B3Bv7wSztkp8m",
            description: "Full Stack clone of Whatsapp built with React and NodeJS.",
            functionalities: [
                "Send and receive  messages to/from other users in real time.",
                "Create group chats and get updates in real time.",
                "Authentication of users based on JWT tokens without any external library."
            ],
            techStack: [
                "React",
                "NodeJs",
                "TypeScript",
                "PostgreSQL",
                "Socket.io",
                "CSS"
            ],
            tags: [
                "Auth",
                "Sockets",
                "ExpressJS",
                "SQLRelations",
                "Auth"
            ],
            links: {
                site: "https://whatsapp-clone-by-pere-palacin.onrender.com/login",
                code: "https://github.com/perepalacin/fullstack-whatsapp-clone"
            }
        },
        {
            title: "CRUD: Quotopia",
            videoLink: "https://www.youtube.com/embed/KkgrLPRyx9A?si=NgO8CrTNmmjvtnEU",
            description: "A FullStack quotes repository built with NextJS, Tailwind and MongoDB that leverages the power of server components to boost the performance of the site and its SEO.",
            functionalities: [
                "Semantic From and API endpoints creation to upload or edit your own quotes.",
                "Server Side home page and individual quote page to search for quotes based on its contents, author name, topics even from your search engine.",
                "Leveraged Tailwind CSS and ShadCN components to craft an appealing and responsive UI."
            ],
            techStack: [
                "React",
                "NextJS",
                "TypeScript",
                "TailwindCSS",
                "MongoDB"
            ],
            tags: [
                "ExpressJS",
                "NodeJS",
                "ShadCN",
                "Responsive",
                "CRUD",
                "NoSQL",
                "VercelDeployment"
            ],
            links: {
                site: "https://quotopia-gray.vercel.app/",
                code: "https://github.com/perepalacin/quotopia"
            }
        },
        {
            title: "Space Invaders",
            videoLink: "https://www.youtube.com/embed/aOQYl_7D8A8?si=8LVptWxZdjJAz5PU",
            description: "My own take at recreating the famous Space Invaders 2D Game in Java.",
            functionalities: [
                "Full game cycle logic implemented in Java and 2D Graphics managed by Java AWT.",
                "Best practices to Leverage the power of OOP to reduce the amount of code written."
            ],
            techStack: [
                "Java",
                "Maven",
                "Java AWT"
            ],
            tags: [
                "OOP",
                "Object Oriented Programming",
                "SSR",
                "CSR",
                "RLS",
                "Forms",
                "SQLRelations",
                "Auth"
            ],
            links: {
                site: "https://github.com/perepalacin/space-invaders",
                code: "https://github.com/perepalacin/space-invaders"
            }
        },
        {
            title: "WIP - SOS ETSEIB",
            videoLink: "https://www.youtube.com/embed/7BXdHiNw73k?si=hu1PyoSz49os3xVl",
            description: "Open Source File System built with Java Servlets and HTMX for UPC students.",
            functionalities: [
                "Files repository open for UPC Students to share notes and exams between them.",
                "HTTPOnly Cookie Based Authentication with a Session Id assigned to each user.",
                "Backend built with Java (without any framework), SQL and S3 to serve the files' content.",
                "Fully Server Side Rendered frontend using Java Template Engine (JTE) and HTMX, which resulted in a very small Frontend codebase."
            ],
            techStack: [
                "React",
                "NodeJs",
                "TypeScript",
                "PostgreSQL",
                "Socket.io",
                "CSS"
            ],
            tags: [
                "SSR",
                "Auth",
                "SessionBasedAuth",
                "Cookies",
                "httpOnly",
                "S3",
                "AWS",
                "Cloudfare",
                "JUnit",
                "JTE",
                "Java Template Engine"
            ],
            links: {
                side: "https://github.com/perepalacin/sos-etseib",
                code: "https://github.com/perepalacin/sos-etseib"
            }
        },
        {
            title: "The Mind Online Game",
            videoLink: "https://www.youtube.com/embed/jSd6_ukIhjc?si=q1EeMDsZ03B87OsM",
            description: "A realtime WebApp application built with React and using Firebase as a backend. It leverages RLS to secure the data in the Firestore collection and subscription to documents to update the client content in real time.",
            functionalities: [
                "Create, edit and Delete Firebase documents.",
                "Subscribe to documents to update clients in real time.",
                "Creation of an appealing Neobrutalism UI theme using plain CSS.",
                "Users' authentication is managed using Firebase Anonymous Sessions."
            ],
            techStack: [
                "React",
                "Vite",
                "React Router",
                "CSS",
                "Firebase"
            ],
            tags: [
                "Auth",
                "RealtimeApp",
                "Firebase",
                "Deployed",
                "SessionManaging"
            ],
            links: {
                site: "https://github.com/perepalacin/the-mind-online-game",
                code: "https://perepalacin.github.io/the-mind-online-game/"
            }
        },
        {
            title: "WIP - FullFoods",
            videoLink: "https://www.youtube.com/embed/r_goojbugrs?si=fC4aKoXdIXM4W-Zz",
            description: "A FullStack fully responsive social network WebApp designed with NextJs, Tailwind CSS and Supabase (PostgreSQL) that allows users to upload their own recipes and save ones from other users. The WebApp takes full advantage of SQL's relations to build a seamless integration between ingredients and recipes.",
            functionalities: [
                "Implement Supabase Auth to create a fully fledged social network experience.",
                "Leverage SQL Relations between tables to create one-to-many and many-to-many relationships to serve the content of the app.",
                "Proper use of client components, server actions, API Endpoints and Row Level Security to ensure the maximum safety for the end user.",
                "Fast and interactive UI."
            ],
            techStack: [
                "NextJS",
                "TailwindCSS",
                "Recharts",
                "Supabase",
                "PostgreSQL"
            ],
            tags: [
                "SSR",
                "CSR",
                "RLS",
                "Forms",
                "SQLRelations",
                "Auth"
            ],
            links: {
                site: "https://github.com/perepalacin/fullfoods",
                code: "https://github.com/perepalacin/fullfoods"
            }
        },
        {
            title: "WIP - Factorial Clone Front End",
            videoLink: "https://www.youtube.com/embed/TcqM0XtFh5I?si=f4sCGKZcqWH2eIfA",
            description: "A Front End clone of the ERP Software Factorial HR using pure React + Vite and Plain CSS. The project also leverages the use of external libraries such as React Calendar and React Flows.",
            functionalities: [
                "Use of Pure React to create a single page app, leveraging the power of React Hooks to create an interactive site.",
                "Fast and enjoyable user experience with the use of React Router v6 for navigation.",
                "Creation of an appealing UI using plain CSS only for high readability and maintainability of the code."
            ],
            techStack: [
                "React",
                "TypeScript",
                "Vite",
                "React Router",
                "CSS"
            ],
            tags: [
                "ERP",
                "Client Side Validation",
                "Front End",
                "CSS"
            ],
            links: {
                site: "https://github.com/perepalacin/factorial-clone-app",
                code: "https://github.com/perepalacin/factorial-clone-app"
            }
        },
        {
            title: "WIP - Factorial Clone Back End",
            image: "images/intro.png",
            description: "A Back End clone of the ERP Software Factorial HR using Node Js with Express JS and NeonDB (PostgreSQL). This project goes hand in hand with the Front End Factorial clone project as this serves the content to the front end.",
            functionalities: [
                "Build API endpoints to serve content from the PostgreSQL DB to the front end.",
                "Server side validation of all the POST and PATCH requests created by the client.",
                "Implementation of the Build Version of the React Front End inside the Back End repo.",
                "Learnt how to deploy webapps with Render.io."
            ],
            techStack: [
                "TypeScript",
                "NodeJS",
                "ExpressJS",
                "PostgreSQL"
            ],
            tags: [
                "HTTPS",
                "ErrorHandling",
                "Deployment"
            ],
            links: {
                site: "https://github.com/perepalacin/factorial-clone-app-backend",
                code: "https://github.com/perepalacin/factorial-clone-app-backend"
            }
        }
    ];
    function handleProjectClick(index) {
        const project = projectsData[index];
        const existingFloatingWindow = document.querySelector(".floating-window");
        if (existingFloatingWindow) existingFloatingWindow.remove();
        const floatingWindow = document.createElement("div");
        floatingWindow.className = "floating-window";
        document.body.appendChild(floatingWindow);
        projectsContainer.classList.add("collapsed");
        const mediaContent = project.videoLink ? `<iframe src="${project.videoLink}" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` : `<img src="${project.image || "default-image-path.jpg"}" alt="${project.title}" style="width:100%; height:auto;">`;
        floatingWindow.innerHTML = `
            <button id="close-floating-window" style="float: right;">&times;</button>
            <article>
                <section>
                    ${mediaContent}
                </section>
                <section class="project-click">                        
                    <h4>${project.title}</h4>
                    <br>
                    <div><p>${project.description}</p></div>
                    <br>
                    <div><p class="negrita">Key functionalities:</p></div>
                    <div class"hidden"><ul>${project.functionalities.map((f)=>`<li>${f}</li>`).join("")}</ul></div>
                    <div><p class="negrita">Tech Stack:</p></div>
                    <div><ul>${project.techStack.map((t)=>`<li>${t}</li>`).join("")}</ul></div>
                </section>
            </article>
        `;
        document.getElementById("close-floating-window").addEventListener("click", ()=>{
            floatingWindow.remove();
            projectsContainer.classList.remove("collapsed");
        });
    }
    projectsContainer.innerHTML = "";
    projectsData.forEach((project)=>{
        const mediaContent = project.videoLink ? `<iframe src="${project.videoLink}" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` : `<img src="${project.image || "default-image-path.jpg"}" alt="${project.title}" style="width:100%; height:auto;">`;
        const techStackContent = project.techStack.map((tech)=>{
            return `<li>${tech},</li>`;
        }).join("");
        const projectHTML = `
                <div class="project-container with-fadein-animation">
                    <article class="project-article">
                        <section>
                            ${mediaContent}
                        </section>
                        <section class="project-click">                        
                        <h4>${project.title}</h4>
                        <br>
                        <ul class="tech-stack-section">
                        ${techStackContent}
                        </ul>
                        <p class="read-more-button">Read more!</p>
                        <hr>
                        <div class="project-footer">
                        <a href="${project.links.site}" target="_blank"><span>View site</span></a>
                        <a href="${project.links.code}" target="_blank"><span>View code</span></a>
                        </div>
                        </section>
                    </article>
                </div>
            `;
        projectsContainer.innerHTML += projectHTML;
        const projectSections = document.querySelectorAll(".project-click");
        projectSections.forEach((section, sectionIndex)=>section.addEventListener("click", ()=>handleProjectClick(sectionIndex)));
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            const existingFloatingWindow = document.querySelector(".floating-window");
            if (existingFloatingWindow) {
                existingFloatingWindow.remove();
                projectsContainer.classList.remove("collapsed");
            }
        }
    });
    const today = new Date();
    const dateBirth = new Date("1998-08-26");
    let yearsOld = today.getFullYear() - dateBirth.getFullYear();
    const hasBirthdayPassed = today.getMonth() > dateBirth.getMonth() || today.getMonth() === dateBirth.getMonth() && today.getDate() >= dateBirth.getDate();
    if (!hasBirthdayPassed) yearsOld--;
    document.getElementById("years-old").innerText = yearsOld;
    document.getElementById("copyright-text").innerText = `\xa9 ${today.getFullYear()} Pere Palac\xedn Pall\xe0s - All Rights Reserved`;
});

//# sourceMappingURL=web-dev-portfolio.1b85db32.js.map
