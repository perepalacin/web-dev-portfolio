export const projectsData = [
    {
      title: "Finance Tracker",
      videoLink:
        "https://www.youtube.com/embed/8If4jhFIqis?si=NEXmt8bIdndJDau6",
      description:
        "Finance Tracker built with Spring Boot (Java), SQL (Hibernate) and React (TypeScript).",
      functionalities: [
        "Allow users to track their income, expenses, investment and transfers accross different bank accounts.",
        "Offer a visually appealing main dashboard with KPIs and graphs to get all the necessary information in just one screen.",
        "Authentication of users managed by Spring Security using JWT tokens",
        "A lot of effort was put in the Endpoint design to ensure a testable and maintainable code.",
      ],
      techStack: [
        "java",
        "springboot",
        "react",
        "typescript",
        "postgres",
        "hibernate",
      ],
      tags: [
        "SpringSecurity",
        "SpringJPA",
        "OOP",
        "Object Oriented Programming",
        "Forms",
        "SQLRelations",
        "Auth",
      ],
      links: {
        site: "https://github.com/perepalacin/finance-tracker",
        code: "https://github.com/perepalacin/finance-tracker",
      },
  },
      {
      title: "Caixabank Hackaton",
      videoLink:
        "https://www.youtube.com/watch?v=BL8MriPiRgg",
      description:
        "Finished 9th out of 261 participants in a Virtual Hackaton related to finance where I developed a, Spring Boot based, Backend API for an auction system.",
      functionalities: [
        "Allow users to scrap third party websites to scout for Real state information.",
        "Save thier financial status and mortages in MySQL",
        "Set a bidding system based on queuing messagues on a list using RabbitMQ",
        "Build a production ready deployment entrypoint using docker",
      ],
      techStack: [
        "java",
        "springboot",
        "docker",
        "mysql",
        "hibernate",
        "python"
      ],
      tags: [
        "SpringSecurity",
        "SpringJPA",
        "OOP",
        "Docker",
        "RabbitMQ",
        "QueueingList",
      ],
      links: {
        site: "https://nuwe.io/hackathons/caixabank-tech-challenges-round-3?section=leaderboard",
        code: "https://www.youtube.com/watch?v=BL8MriPiRgg",
      },
  },
    {
      title: "Ecommerce microservice",
      videoLink:
        "https://www.youtube.com/watch?v=MVkPzm404Bo",
      description:
        "Ecommerce site built leveraging Microservices and Spring Cloud API",
      functionalities: [
        "Fully SSR frontend built with Astro and Preact Astro Islands",
        "Split the API into microservices for each functionality (Auth, Shipping, Orders, Cart)",
        "Ensure independence between microservices, data is persisted in different databases.",
        "Used Spring API Cloud to build a very simple API Gateway to handle all incoming requests.",
      ],
      techStack: [
        "java",
        "springboot",
        "preact",
        "astro",
        "mysql",
        "hibernate",
      ],
      tags: [
        "SpringCloudAPI",
        "Microservices",
        "ApiGatewaiy",
        "Astro",
        "SSR",
        "Microservices",
      ],
      links: {
        site: "https://github.com/perepalacin/ecommerce-microservice",
        code: "https://github.com/perepalacin/ecommerce-microservice",
      },
  },
    {
      title: "Progressive Overlords",
      videoLink:
        "https://www.youtube.com/watch?v=3ZlLuygKth8",
      description:
        "Workout Tracker built with Spring Boot (Java), PostgreSQL (Spring JDBC) and HTMX + JavaScript.",
      functionalities: [
        "The main goal of this project was to experiment with HTMX, a library that offers a new approach to frontend",
        "Allow users to create routines, log their workouts, and share them with their friends or random people on the internet.",
        "Rich and interactive UI completely Server Side Rendered (SSR) with only 400 LoC of JavaScript thanks to JTE and HTMX.",
        "Reduce frontend complexity by using SSR templates",
      ],
      techStack: [
        "java",
        "springboot",
        "htmx",
        "javascript",
        "postgres",
        "maven",
      ],
      tags: [
        "SpringSecurity",
        "SpringJDBC",
        "OOP",
        "Object Oriented Programming",
        "Forms",
        "SQLRelations",
        "HTMX",
        "SSR",
      ],
      links: {
        site: "https://github.com/perepalacin/progressive-overlords",
        code: "https://github.com/perepalacin/progressive-overlords",
      },
    },
    {
      title: "Whatsapp FullStack Clone",
      videoLink:
        "https://www.youtube.com/embed/UEOvp1GehT0?si=z85B3Bv7wSztkp8m",
      description: "Full Stack clone of Whatsapp built with React and NodeJS.",
      functionalities: [
        "Send and receive  messages to/from other users in real time.",
        "Create group chats and get updates in real time.",
        "Authentication of users based on JWT tokens without any external library.",
      ],
      techStack: [
        "react",
        "nodejs",
        "typescript",
        "postgres",
        "sockets",
        "css",
      ],
      tags: ["Auth", "Sockets", "ExpressJS", "SQLRelations", "Auth"],
      links: {
        site: "https://whatsapp-clone-by-pere-palacin.onrender.com/login",
        code: "https://github.com/perepalacin/fullstack-whatsapp-clone",
      },
    },
    {
      title: "CRUD: Quotopia",
      videoLink:
        "https://www.youtube.com/embed/KkgrLPRyx9A?si=NgO8CrTNmmjvtnEU",
      description:
        "A FullStack quotes repository built with NextJS, Tailwind and MongoDB that leverages the power of server components to boost the performance of the site and its SEO.",
      functionalities: [
        "Semantic From and API endpoints creation to upload or edit your own quotes.",
        "Server Side home page and individual quote page to search for quotes based on its contents, author name, topics even from your search engine.",
        "Leveraged Tailwind CSS and ShadCN components to craft an appealing and responsive UI.",
      ],
      techStack: ["react", "nextjs", "typescript", "tailwindcss", "mongodb"],
      tags: [
        "ExpressJS",
        "NodeJS",
        "ShadCN",
        "Responsive",
        "CRUD",
        "NoSQL",
        "VercelDeployment",
      ],
      links: {
        site: "https://quotopia-gray.vercel.app/",
        code: "https://github.com/perepalacin/quotopia",
      },
    },
    {
      title: "Space Invaders",
      videoLink:
        "https://www.youtube.com/embed/aOQYl_7D8A8?si=8LVptWxZdjJAz5PU",
      description:
        "My own take at recreating the famous Space Invaders 2D Game in Java.",
      functionalities: [
        "Full game cycle logic implemented in Java and 2D Graphics managed by Java AWT.",
        "Best practices to Leverage the power of OOP to reduce the amount of code written.",
      ],
      techStack: ["java", "maven", "javaawt"],
      tags: [
        "OOP",
        "Object Oriented Programming",
        "SSR",
        "CSR",
        "RLS",
        "Forms",
        "SQLRelations",
        "Auth",
      ],
      links: {
        site: "https://github.com/perepalacin/space-invaders",
        code: "https://github.com/perepalacin/space-invaders",
      },
    },
    {
      title: "WIP - SOS ETSEIB",
      videoLink:
        "https://www.youtube.com/embed/7BXdHiNw73k?si=hu1PyoSz49os3xVl",
      description:
        "Open Source File System built with Java Servlets and HTMX for UPC students.",
      functionalities: [
        "Files repository open for UPC Students to share notes and exams between them.",
        "HTTPOnly Cookie Based Authentication with a Session Id assigned to each user.",
        "Backend built with Java (without any framework), SQL and S3 to serve the files' content.",
        "Fully Server Side Rendered frontend using Java Template Engine (JTE) and HTMX, which resulted in a very small Frontend codebase.",
      ],
      techStack: [
        "react",
        "nodejs",
        "typescript",
          "postgres",
        "cloudflare",
        "css",
        "htmx"
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
        "Java Template Engine",
      ],
      links: {
        side: "https://github.com/perepalacin/sos-etseib",
        code: "https://github.com/perepalacin/sos-etseib",
      },
    },
    {
      title: "The Mind Online Game",
      videoLink:
        "https://www.youtube.com/embed/jSd6_ukIhjc?si=q1EeMDsZ03B87OsM",
      description:
        "A realtime WebApp application built with React and using Firebase as a backend. It leverages RLS to secure the data in the Firestore collection and subscription to documents to update the client content in real time.",
      functionalities: [
        "Create, edit and Delete Firebase documents.",
        "Subscribe to documents to update clients in real time.",
        "Creation of an appealing Neobrutalism UI theme using plain CSS.",
        "Users' authentication is managed using Firebase Anonymous Sessions.",
      ],
      techStack: ["react", "vite", "css", "firebase"],
      tags: ["Auth", "RealtimeApp", "Firebase", "Deployed", "SessionManaging"],
      links: {
        site: "https://github.com/perepalacin/the-mind-online-game",
        code: "https://perepalacin.github.io/the-mind-online-game/",
      },
    },
    {
      title: "WIP - FullFoods",
      videoLink:
        "https://www.youtube.com/embed/r_goojbugrs?si=fC4aKoXdIXM4W-Zz",
      description:
        "A FullStack fully responsive social network WebApp designed with NextJs, Tailwind CSS and Supabase (PostgreSQL) that allows users to upload their own recipes and save ones from other users. The WebApp takes full advantage of SQL's relations to build a seamless integration between ingredients and recipes.",
      functionalities: [
        "Implement Supabase Auth to create a fully fledged social network experience.",
        "Leverage SQL Relations between tables to create one-to-many and many-to-many relationships to serve the content of the app.",
        "Proper use of client components, server actions, API Endpoints and Row Level Security to ensure the maximum safety for the end user.",
        "Fast and interactive UI.",
      ],
      techStack: [
        "nextjs",
        "tailwindcss",
        "supabase",
        "postgres",
      ],
      tags: ["SSR", "CSR", "RLS", "Forms", "SQLRelations", "Auth"],
      links: {
        site: "https://github.com/perepalacin/fullfoods",
        code: "https://github.com/perepalacin/fullfoods",
      },
    },
    {
      title: "WIP - Factorial Clone Front End",
      videoLink:
        "https://www.youtube.com/embed/TcqM0XtFh5I?si=f4sCGKZcqWH2eIfA",
      description:
        "A Front End clone of the ERP Software Factorial HR using pure React + Vite and Plain CSS. The project also leverages the use of external libraries such as React Calendar and React Flows.",
      functionalities: [
        "Use of Pure React to create a single page app, leveraging the power of React Hooks to create an interactive site.",
        "Fast and enjoyable user experience with the use of React Router v6 for navigation.",
        "Creation of an appealing UI using plain CSS only for high readability and maintainability of the code.",
      ],
      techStack: ["react", "typescript", "vite", "css"],
      tags: ["ERP", "Client Side Validation", "Front End", "CSS"],
      links: {
        site: "https://github.com/perepalacin/factorial-clone-app",
        code: "https://github.com/perepalacin/factorial-clone-app",
      },
    },
  ];
