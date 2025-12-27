import { type Project } from "@/components/home/featured-projects";

export const personalProjects: Project[] = [
  {
    title: "MeloBeats",
    description:
      "MeloBeats is a web application that allows users to convert YouTube and Spotify videos, tracks, or playlists into MP3 files. Playlists are automatically compressed into a ZIP file for convenient downloading, making it easy to save and enjoy music offline.",
    image: () => import("@/assets/images/projects/personal/MeloBeats.png"),
    date: "August 2025",
    badges: ["React", "Node.js", "Express.js", "Tailwind", "Tailwind"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/MeloBeats", label: "GitHub" },
      { type: "youtube", url: "https://www.youtube.com/watch?v=V_nn7GmrllQ", label: "Video" },
    ],
  },
  {
    title: "Yappr",
    description:
      "Yappr is a social media platform that lets users create, edit, and delete posts, react to content, and manage their personal profiles. It offers a simple, mobile-first design where users can explore and interact with posts from others.",
    image: () => import("@/assets/images/projects/personal/Yappr.png"),
    date: "February 2025",
    badges: ["PHP", "Laravel", "Tailwind"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/Yappr", label: "GitHub" },
      { type: "youtube", url: "https://www.youtube.com/watch?v=g1pAo3D7hf0", label: "Video" },
    ],
  },
  {
    title: "Pixel Positions",
    description:
      'Pixel Positions is a job board application that allows employers to post jobs and job seekers to search and filter listings by category, location, and type. Built through the Laracasts "Laravel From Scratch" series, it features user authentication, tag-based filtering, and a responsive design.',
    image: () => import("@/assets/images/projects/personal/Pixel Positions.png"),
    date: "January 2025",
    badges: ["PHP", "Laravel", "Tailwind"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/pixel-positions", label: "GitHub" },
      { type: "youtube", url: "https://www.youtube.com/watch?v=oscJvXW_pYY", label: "Video" },
    ],
  },
  {
    title: "HideSpot",
    description:
      'An exclusive clubhouse app where members can write anonymous posts. This project, developed as part of The Odin Project\'s "Members Only" Node.js course which focuses on user authentication, session management, and database integration.',
    image: () => import("@/assets/images/projects/personal/HideSpot.png"),
    date: "August 2024",
    badges: ["Node.js", "Express.js", "PostgreSQL", "EJS"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/MembersOnly", label: "GitHub" },
      { type: "website", url: "https://hidespot.up.railway.app/", label: "Live" },
    ],
  },
  {
    title: "The Plastic Age",
    description:
      'A website on plastic pollution, highlighting its impact on oceans and health, and offering solutions and sustainable practices. This project was created for the final exam of the "People and Earth\'s Ecosystem" course.',
    image: () => import("@/assets/images/projects/personal/The Plastic Age.png"),
    date: "March 2024",
    badges: ["React", "Typescript", "Vite"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/The-Plastic-Age", label: "GitHub" },
      { type: "website", url: "https://viads-the-plastic-age.netlify.app", label: "Live" },
    ],
  },
  {
    title: "Shopping Cart",
    description:
      "A Shopping Cart project that let users browse products and add/remove them from the cart. This project is used to apply my knowledge on React Routers and basic fetching request & handling errors.",
    image: () => import("@/assets/images/projects/personal/Shopping Cart.png"),
    date: "March 2024",
    badges: ["React", "Typescript", "Tailwind"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/Shopping-Cart", label: "GitHub" },
      { type: "website", url: "https://viads-shopping-cart.netlify.app/", label: "Live" },
    ],
  },
  {
    title: "Memory Game",
    description:
      "A Memory Game based on League of Legends champions. This project is used to apply my knowledge on useEffect to handle Side Effects by fetching and using data from an External API and to practice using Typescript.",
    image: () => import("@/assets/images/projects/personal/Memory-Game.png"),
    date: "November 2023",
    badges: ["React", "Typescript", "Vite"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/Memory-Game", label: "GitHub" },
      { type: "website", url: "https://viads-memory-game.netlify.app/", label: "Live" },
    ],
  },
  {
    title: "CV Builder",
    description:
      "A CV Builder App to apply my knowledge of basic concepts I've learned on React such as useState and passing props into different components.",
    image: () => import("@/assets/images/projects/personal/CV Builder.png"),
    date: "October 2023",
    badges: ["React", "Tailwind", "Vite"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/CV-Builder-JSX", label: "GitHub" },
      { type: "website", url: "https://viads-cv-builder.netlify.app/", label: "Live" },
    ],
  },
  {
    title: "Battleship",
    description:
      "A Classic Naval Battleship Game. This project is used to practice the basics of testing (TDD) using Jest.",
    image: () => import("@/assets/images/projects/personal/Battleship.png"),
    date: "September 2023",
    badges: ["Webpack", "HTML", "CSS", "Javascript", "Jest"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/Battleships", label: "GitHub" },
      { type: "website", url: "https://viadsss.github.io/Battleships/", label: "Live" },
    ],
  },
  {
    title: "Open Weather",
    description: "A weather app that shows the information of a particular weather of a city or country.",
    image: () => import("@/assets/images/projects/personal/Open Weather.png"),
    date: "July 2023",
    badges: ["Webpack", "HTML", "CSS", "Javascript"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/Weather-App", label: "GitHub" },
      { type: "website", url: "https://viadsss.github.io/Weather-App/", label: "Live" },
    ],
  },
  {
    title: "Spice Avenue",
    description:
      "A restaurant page to practice how to use Webpack. The entire contents of the website is build with JS Alone.",
    image: () => import("@/assets/images/projects/personal/Spice Avenue.png"),
    date: "April 2023",
    badges: ["Webpack", "HTML", "CSS", "Javascript"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/Restaurant-Site", label: "GitHub" },
      { type: "website", url: "https://viadsss.github.io/Restaurant-Site/", label: "Live" },
    ],
  },
  {
    title: "Pixel Quest",
    description:
      "2D Pixelated Platformer game using pygame. I coded this during the event '100 days of code' of PUP TPG.",
    image: () => import("@/assets/images/projects/personal/Pixel Quest.png"),
    date: "March 2023",
    badges: ["Python"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/Pixel-Quest", label: "GitHub" },
      { type: "website", url: "https://viads.itch.io/pixel-quest", label: "itch.io" },
    ],
  },
  {
    title: "Tic Tac Toe",
    description: "A Tic Tac Toe game that allows for two-player gameplay or against a computer.",
    image: () => import("@/assets/images/projects/personal/tictactoe.png"),
    date: "March 2023",
    badges: ["HTML", "CSS", "Javascript"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/TicTacToe", label: "GitHub" },
      { type: "website", url: "https://viadsss.github.io/TicTacToe", label: "Live" },
    ],
  },
  {
    title: "Open Book",
    description: "A project for 'The Odin Project' in which I have to make a library using Object Constructors.",
    image: () => import("@/assets/images/projects/personal/Open Book.png"),
    date: "March 2023",
    badges: ["HTML", "CSS", "Javascript"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/Book-Library-v2", label: "GitHub" },
      { type: "website", url: "https://viadsss.github.io/Book-Library-v2/", label: "Live" },
    ],
  },
  {
    title: "Viad's Todo List",
    description: "A project I coded in my free time to understand how to Manipulate DOM and store data locally.",
    image: () => import("@/assets/images/projects/personal/to-do-list.png"),
    date: "March 2023",
    badges: ["HTML", "CSS", "Javascript"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/To-Do-List", label: "GitHub" },
      { type: "website", url: "https://viadsss.github.io/To-Do-List/", label: "Live" },
    ],
  },
  {
    title: "Dashboard",
    description:
      "An admin dashboard for 'The Odin Project' activity in which I have to use grid, flex, and transitions.",
    image: () => import("@/assets/images/projects/personal/Dashboard.png"),
    date: "March 2023",
    badges: ["HTML", "CSS"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/Dashboard", label: "GitHub" },
      { type: "website", url: "https://viadsss.github.io/Dashboard", label: "Live" },
    ],
  },
];

export const groupProjects: Project[] = [
  {
    title: "HomeRoom",
    description:
      'A digital platform for managing housing and rental processes for landlords and tenants. The system enables payment tracking, record management, and in-app communication. Built as a full-stack Laravel application with features such as queued jobs, scheduled tasks, real-time chat, billing automation, overdue notifications, and file sharing. Developed collaboratively for the "Web Development" course.',
    image: () => import("@/assets/images/projects/group/HomeRoom.png"),
    date: "June 2025",
    badges: ["PHP", "Laravel", "Sqlite", "Tailwind", "Reverb"],
    links: [
      {
        type: "github",
        url: "https://github.com/COMP-016-Web-Development-Group-1/HomeRoom",
        label: "GitHub",
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=c8CXg-bVZK0",
        label: "Video",
      },
    ],
  },
  {
    title: "TeksStrike",
    description:
      'A digital reimagining of the Filipino game "Teks" with turn-based probability-driven card battles. Features AI powered by heuristic minimax with alpha-beta pruning and a card system with modifiers and rarities. Developed as a project for the "Introduction to AI" course.',
    image: () => import("@/assets/images/projects/group/TeksStrike.png"),
    date: "September 2025",
    badges: ["React", "Node.js", "Tailwind"],
    links: [
      { type: "github", url: "https://github.com/CS-4-3-Group-4/TeksStrike", label: "GitHub" },
      { type: "youtube", url: "https://www.youtube.com/", label: "Video" },
    ],
  },
  {
    title: "ULaF",
    description:
      'A university lost and found system that allows students and staff to report, search for, and recover lost items on campus. It streamlines item management and ensures quick returns to rightful owners. Developed collaboratively for the "Application Development" course.',
    image: () => import("@/assets/images/projects/group/ULaF.png"),
    date: "February 2025",
    badges: ["Java", "Maven", "Swing", "MySQL"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/LostFoundSystem", label: "GitHub" },
      { type: "youtube", url: "https://www.youtube.com/watch?v=ntBnAWTmCXM", label: "Video" },
    ],
  },
  {
    title: "Guava",
    description:
      'A programming language that simplifies GUI development by integrating CSS-like styling and a declarative approach. It reduces syntax complexity and enhances compatibility with Java frameworks. Developed collaboratively for the "Principles of Programming Languages" course.',
    image: () => import("@/assets/images/projects/group/Guava.png"),
    date: "January 2025",
    badges: ["Java", "Maven", "Swing"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/GuavaLexTax", label: "GitHub" },
      { type: "youtube", url: "https://www.youtube.com/watch?v=04YwVXmivpw", label: "Video" },
    ],
  },
  {
    title: "Deparavia",
    description:
      'An application for managing patient admissions and records in healthcare facilities. It offers secure logins for patients, doctors, and admins, and includes features for handling patient data, admissions, and visits. Created collaboratively for the "Information and Management" course.',
    image: () => import("@/assets/images/projects/group/Deparavia.png"),
    date: "July 2024",
    badges: ["React", "Node.js", "Express.js", "MySQL"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/DeparaviaApp", label: "GitHub" },
      { type: "youtube", url: "https://www.youtube.com/watch?v=trl7HTWvlbc", label: "Video" },
    ],
  },
  {
    title: "Path Pundit",
    description:
      'A website that optimizes courier delivery routes using the Traveling Salesman Problem (TSP) with the Branch and Bound algorithm for efficient returns to the depot. Developed as a group project for the "Design and Analysis of Algorithms" course.',
    image: () => import("@/assets/images/projects/group/Path Pundit.png"),
    date: "June 2024",
    badges: ["React", "MySQL", "Chakra UI", "Leaflet"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/PathPundit", label: "GitHub" },
      { type: "youtube", url: "https://www.youtube.com/watch?v=_YHxDOfvXPw", label: "Video" },
    ],
  },
  {
    title: "Kumpera",
    description:
      'A student budget simulation that explores personal finance complexities. This project was developed collaboratively with my group members for the "Modeling and Simulation" course.',
    image: () => import("@/assets/images/projects/group/Kumpera.png"),
    date: "February 2024",
    badges: ["React", "Chart.js", "Vite"],
    links: [
      { type: "github", url: "https://github.com/Viadsss/Kumpera", label: "GitHub" },
      { type: "website", url: "https://kumpera.netlify.app/", label: "Live" },
    ],
  },
];
