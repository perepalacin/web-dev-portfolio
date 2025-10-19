const careerData = {
    experience: [
        {
            jobTitle: "Software Engineer",
            imageUrl: "./images/evinova.png",
            company: "Evinova (an AstraZeneca company)",
            employmentType: "Jornada completa",
            startDate: new Date("2025-07-01"),
            endDate: new Date(),
            description: {
                header: "Joined a multicultural and multinational team as a FullStack developer working on Healthcare related SaaS",
                bulletPoints: [
                    "Design and implement new API and UI features, leveraging tools such as AWS Bedrock, while employing best coding practices.",
                    "Develop from 0 to production an integration and e2e testing suite for the main API of our product to improve the CI/CD pipeline.",
                    "Maintain legacy applications written in Spring Boot and NextJS",
                ],
            },
            techStack: ["nest", "aws", "react", "postgres", "docker"],
        },
        {
            jobTitle: "Junior Frontend Software Engineer",
            imageUrl: "./images/npaw.png",
            company: "NPAW",

            employmentType: "Jornada completa",
            startDate: new Date("2024-07-01"),
            endDate: new Date("2025-06-30"),
            description: {
                header: "Led the development of key components for NPAW's latest web UI redesign, successfully migrating over 40% of features from the old UI to the new one.",
                bulletPoints: [
                    "Resolved over 20\% of all bugs identified by the QA team during testing, improving system stability and reliability.",
                    "Develop and maintain a microservice using Python and SQL that allows users to create their own UI widgets to enhance their UX even further, eliminating the need for NPAW's developers to spend time developing custom solutions for very particular clients. ",
                ],
            },
            techStack: ["python", "react", "typescript", "java", "mysql"],
        },
        // {
        //     jobTitle: "Junior Mechanical Engineer",
        //     imageUrl: "./images/x1.jpeg",
        //     company: "X1 Wind",
        //     employmentType: "Jornada completa",
        //     startDate: new Date("2023-07-01"),
        //     endDate: new Date("2024-07-31"),
        //     techStack: ["Python", "ANSYS Workbench", "1 aptitud más"],
        // },
        // {
        //     jobTitle: "Master Thesis Student",
        //     imageUrl: "./images/x1.jpeg",
        //     company: "X1 Wind",
        //     employmentType: "Contrato de formación",
        //     startDate: new Date("2023-02-01"),
        //     endDate: new Date("2023-07-31"),
        //     description: {
        //         header: "Carried out my Master's Thesis at Chalmers Tekniska Högskola in colaboration with the Spanish startup X1 Wind.",
        //         bulletPoints: [
        //             "Develop algorithms in Python to evaluate the effects of wind and currents on a floating structure based on fluid dynamics principles.",
        //             "Validate and visualize the results obtained with Ashes and its Python API, a reduced order modeling Software to verify the results obtained using MatPlotLib.",
        //         ],
        //     },
        //     techStack: ["Python"],
        // },
        // {
        //     jobTitle: "Mechanical Engineer Intern",
        //     imageUrl: "./images/x1.jpeg",
        //     company: "X1 Wind",
        //     employmentType: "Contrato de prácticas",
        //     startDate: new Date("2021-10-01"),
        //     endDate: new Date("2023-02-28"),
        //     techStack: [],
        // },
    ],
    education: [
        {
            institution: "Universitat Politècnica de Catalunya (UPC)",
            degree: "Máster",
            imageUrl: "./images/upc.svg",
            fieldOfStudy: "Ingeniería industrial",
            startDate: new Date("2021-09-01"),
            endDate: new Date("2023-02-28"),
            minor: "Minor in Mechanical Engineering",
            grade: "7.3/10",
        },
        {
            institution: "Chalmers University of Technology",
            degree: "Master's Thesis Exchange Student",
            imageUrl: "./images/chalmers.png",
            fieldOfStudy: "Mechanics and Maritime Sciences",
            startDate: new Date("2023-01-01"),
            endDate: new Date("2023-07-31"),
            grade: "10/10",
            description: {
                header: "Carried out my Master's Thesis at Chalmers Tekniska Högskola in colaboration with the Spanish startup X1 Wind.",
                bulletPoints: [
                    "Develop algorithms in Python to evaluate the effects of wind and currents on a floating structure based on fluid dynamics principles.",
                    "Validate and visualize the results obtained with Ashes and its Python API, a reduced order modeling Software to verify the results obtained using MatPlotLib.",
                ],
            },
        },
        {
            institution: "Universitat Politècnica de Catalunya (UPC)",
            degree: "Grado en Ingeniería en Tecnologías Industriales",
            imageUrl: "./images/upc.svg",
            fieldOfStudy: "Ingeniería industrial",
            startDate: new Date("2016-09-01"),
            endDate: new Date("2021-07-31"),
            grade: "6.5/10",
        },
    ],
    licenses: [
        {
            title: "Certificate in Advanced English",
            organization: "Cambridge English",
            imageUrl: "./images/cambridge.png",
            expeditionDate: new Date("2016-04-01"),
        },
        {
            title: "DELF B2",
            organization: "Alliance Française de España",
            imageUrl: "./images/af.png",
            expeditionDate: new Date("2016-01-01"),
        },
    ],
};


/**
 * Formats a Date object into "Month Year" (e.g., "January 2024").
 * @param {Date} date
 * @returns {string}
 */
function formatDate(date) {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

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


function renderExperience(experience) {
    const ol = createElement('ol');
    const today = new Date();

    experience.forEach((job, index) => {
        const li = createElement('li', 'career-item mb-2');

        let isPresentDate = false;
        if (index === 0) {
            const endMonth = job.endDate.getMonth();
            const endYear = job.endDate.getFullYear();
            const currentMonth = today.getMonth();
            const currentYear = today.getFullYear();

            if (endMonth === currentMonth && endYear === currentYear) {
                isPresentDate = true;
            }
        }
        
        let isSameCompany = false;
        if (index !== 0) {
            const previousJob = experience[index - 1];
            if (previousJob?.company === job.company) {
                isSameCompany = true;
            }
        }

        const article = createElement('article');
        
        if (!isSameCompany) {
            const aside = createElement('aside', "with-fadein-animation");
            const img = createElement('img');
            img.src = job.imageUrl;
            img.width = 48;
            img.height = 48;
            aside.appendChild(img);
            li.appendChild(aside);
        }

        article.appendChild(createElement('h4', "with-fadein-animation", job.jobTitle));
        article.appendChild(createElement('h6', "with-fadein-animation", `${job.company} - ${job.employmentType}`));
        const endDateText = isPresentDate ? "Present" : formatDate(job.endDate);
        article.appendChild(createElement('h6', "with-fadein-animation", `${formatDate(job.startDate)} - ${endDateText}`));
        if (job.description?.header) {
            article.appendChild(createElement('br'));
            article.appendChild(createElement('p', "with-fadein-animation", job.description.header));
        }

        if (job.description?.bulletPoints) {
            const bulletDiv = document.createElement('div');
            job.description.bulletPoints.forEach(item => {
                bulletDiv.appendChild(createElement('p', "with-fadein-animation", `- ${item}`));
            });
            article.appendChild(bulletDiv);
        }
        
        if (job.techStack) {
            const techDiv = createElement("div", "with-fadein-animation tech-stack-div");
            techDiv.appendChild(createElement("p", "tech-stack", "Tech Stack:"));
            job.techStack.forEach(item => {
                const img = createElement('img');
                img.src = `./images/${item}.svg`;
                img.width = 28;
                img.height = 28;
                techDiv.appendChild(img);
            });
            article.appendChild(techDiv);
        }

        li.appendChild(article);
        ol.appendChild(li);
    });
    return ol;
}

function renderEducation(education) {
    const ol = createElement('ol');
    education.forEach(item => {
        const li = createElement('li', 'career-item mb-2');

        const aside = createElement('aside', "with-fadein-animation");
        const img = createElement('img');
        img.src = item.imageUrl;
        img.width = 48;
        img.height = 48;
        aside.appendChild(img);
        li.appendChild(aside);
        
        const article = createElement('article');
        article.appendChild(createElement('h4', "with-fadein-animation", item.fieldOfStudy));
        article.appendChild(createElement('h6', "with-fadein-animation", item.degree));
        article.appendChild(createElement('h6', "with-fadein-animation", item.institution));
        article.appendChild(createElement('p', 'career-muted  with-fadein-animation', item.minor));
        article.appendChild(createElement('p', 'career-muted  with-fadein-animation', `Grade: ${item.grade}`));

        li.appendChild(article);
        ol.appendChild(li);
    });
    return ol;
}

function renderLicenses(licenses) {
    const ol = createElement('ol');
    licenses.forEach(license => {
        const li = createElement('li', 'career-item mb-2');

        const aside = createElement('aside', "with-fadein-animation");
        const img = createElement('img');
        img.src = license.imageUrl;
        img.width = 48;
        img.height = 48;
        aside.appendChild(img);
        li.appendChild(aside);

        const article = createElement('article');
        article.appendChild(createElement('h4', "with-fadein-animation", license.title));
        article.appendChild(createElement('h6', "with-fadein-animation", license.organization));
        
        const dateString = license.expeditionDate 
            ? formatDate(license.expeditionDate) 
            : 'N/A';
        article.appendChild(createElement('p', 'career-muted with-fadein-animation', `Expedition date: ${dateString}`));
        
        li.appendChild(article);
        ol.appendChild(li);
    });
    return ol;
}


function CareerViewer() {
    const root = document.getElementById('career-viewer-root');
    if (!root) return; 

    root.innerHTML = ''; 

    root.appendChild(createElement('h3', "with-fadein-animation", 'Experience'));
    root.appendChild(renderExperience(careerData.experience));
    root.appendChild(createElement('h3', "with-fadein-animation", 'Education'));
    root.appendChild(renderEducation(careerData.education));
    root.appendChild(createElement('h3', "with-fadein-animation", 'Licenses'));
    root.appendChild(renderLicenses(careerData.licenses));
}

document.addEventListener('DOMContentLoaded', CareerViewer);