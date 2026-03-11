import conquerblocksImg from "../assets/projects/conquerblocks.png";
import artgalleryImg from "../assets/projects/artgallery.png";
import rickandmortyexplorerImg from "../assets/projects/rickandmorty.png";
import clientflowImg from "../assets/projects/clientflow.png";

export const projects = [
    {
        title: "ClientFlow",
        img: clientflowImg,
        description: "React & TypeScript client management dashboard. Implements CRUD operations, input debouncing, filtering and sorting, uses a mock REST API with Axios, styled with Tailwind, and deployed on Vercel.",
        techStack: ["React", "TypeScript", "Tailwind", "Axios"],
        urlGitHub: "https://github.com/Guillermo-Ramirez-Jimenez/ClientFlow",
        urlProject: "https://client-flow-bay.vercel.app/",
        lessonsLearnt: [
            "Styling with Tailwind", 
            "CRUD with Axios.",
            "Input debouncing", 
            "Derived state (filtering and ordering).", 
            "Custom basic API with mockAPI.",
            "Deployment in Vercel.",
        ],
        badge: "Featured",
    },
    {
        title: "Rick and Morty Explorer (React)",
        img: rickandmortyexplorerImg,
        description: "React & TypeScript character explorer consuming the Rick and Morty API. Supports filtering, search, and modular component structure. Focused on scalability and type safety.",
        techStack: ["React", "TypeScript", "Bootstrap"],
        urlGitHub: "https://github.com/Guillermo-Ramirez-Jimenez/rick-and-morty-explorer-react",
        urlProject: "https://guillermo-ramirez-jimenez.github.io/rick-and-morty-explorer-react/",
        lessonsLearnt: ["Basic React.", "Safe typing with TypeScript."],
    },
    {
        title: "Rick and Morty Explorer",
        img: rickandmortyexplorerImg,
        description: "Vanilla JavaScript character explorer consuming the Rick and Morty API. Features dynamic filtering, pagination, and Bootstrap styling. Practice with DOM manipulation and API integration.",
        techStack: ["HTML", "SASS", "JavaScript", "Bootstrap"],
        urlGitHub: "https://github.com/Guillermo-Ramirez-Jimenez/rick-and-morty-explorer",
        urlProject: "https://guillermo-ramirez-jimenez.github.io/rick-and-morty-explorer/",
        lessonsLearnt: [
            "JavaScript DOM management.", 
            "Fetching custom requests from API.", 
            "Bootstrap icons integration.", 
            "Paginated fetch integration.", 
            "Background animation.",
        ],
    },
    {
        title: "Art Gallery",
        img: artgalleryImg,
        description: "Multi-page institutional website built with HTML, SASS, and responsive layout. Integrates Google Maps for location and provides clean, modern UI.",
        techStack: ["HTML", "SASS"],
        urlGitHub: "https://github.com/Guillermo-Ramirez-Jimenez/Modern-Art-Gallery-Website",
        urlProject: "https://guillermo-ramirez-jimenez.github.io/Modern-Art-Gallery-Website/",
        lessonsLearnt: ["More responsive design.", "Google Maps integration."],
    },
    {
        title: "ConquerBlocks Website",
        img: conquerblocksImg,
        description: "Company-style landing page built with HTML and SASS. Multi-page navigation, responsive layout, and modular styling. Focus on professional layout and typography.",
        techStack: ["HTML", "SASS"],
        urlGitHub: "https://github.com/Guillermo-Ramirez-Jimenez/ConquerBlocks-Website",
        urlProject: "https://guillermo-ramirez-jimenez.github.io/ConquerBlocks-Website/",
        lessonsLearnt: ["HTML tags.", "SASS styling.", "Responsive design.", "Multi-page navigation."],
    }
]