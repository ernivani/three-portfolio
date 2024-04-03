import { liveStreaming } from "../assets/images";
import {
    game,
    contact,
    css,
    chatbot,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    sass,
    worker,
    tailwindcss,
    ia,
    typescript,
    lua,
    cpp,
    php,
    rails,
    java,
    csharp,
    python
} from "../assets/icons";

export const competences = [
    {
        imageUrl: html,
        nom: "HTML",
        type: "Frontend",
        percentage: "90%",
    },
    {
        imageUrl: css,
        nom: "CSS",
        type: "Frontend",
        percentage: "80%",
    },
    {
        imageUrl: express,
        nom: "Express",
        type: "Backend",
        percentage: "95%",
    },
    {
        imageUrl: git,
        nom: "Git",
        type: "Contrôle de version",
        percentage: "95%",
    },
    {
        imageUrl: github,
        nom: "GitHub",
        type: "Contrôle de version",
        percentage: "95%",
    },
    {
        imageUrl: javascript,
        nom: "JavaScript",
        type: "Frontend",
        percentage: "95%",
    },
    {
        imageUrl: mongodb,
        nom: "MongoDB",
        type: "Base de données",
        percentage: "85%",
    },
    {
        imageUrl: nextjs,
        nom: "Next.js",
        type: "Backend",
        percentage: "90%",
    },
    {
        imageUrl: nodejs,
        nom: "Node.js",
        type: "Backend",
        percentage: "90%",
    },
    {
        imageUrl: react,
        nom: "React",
        type: "Frontend",
        percentage: "95%",
    },
    {
        imageUrl: sass,
        nom: "Sass",
        type: "Frontend",
        percentage: "70%",
    },
    {
        imageUrl: tailwindcss,
        nom: "Tailwind CSS",
        type: "Frontend",
        percentage: "90%",
    },
    {
        imageUrl: typescript,
        nom: "TypeScript",
        type: "Frontend",
        percentage: "90%",
    },
    {
        imageUrl: lua,
        nom: "Lua",
        type: "Backend",
        percentage: "80%",
    },
    {
        imageUrl: cpp,
        nom: "C++",
        type: "Other",
        percentage: "95%",
    },
    {
        imageUrl: php,
        nom: "PHP",
        type: "Backend",
        percentage: "100%",
    },
    {
        imageUrl: rails,
        nom: "Ruby on Rails",
        type: "Backend",
        percentage: "70%",
    },
    {
        imageUrl: java,
        nom: "Java",
        type: "Other",
        percentage: "100%",
    },
    {
        imageUrl: csharp,
        nom: "C#",
        type: "Other",
        percentage: "90%",
    },
    {
        imageUrl: python,
        nom: "Python",
        type: "Other",
        percentage: "100%",
    }
];

export const experiences = [
    {
        title: "Développeur Full stack",
        company_name: "Ministère de l'Intérieur",
        icon: worker,
        iconBg: "#a2d2ff",
        date: "Septembre 2022 - Aujourd'hui",
        points: [
            "Développement et maintenance d'applications web utilisant React.js et Symfony.",
            "Collaboration avec des équipes pluridisciplinaires comprenant des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
            "Mise en œuvre du design responsive et garantie de la compatibilité entre les navigateurs.",
            "Participation aux revues de code et fourniture de commentaires constructifs aux autres développeurs.",
        ],
    },
];

export const liensSociaux = [
    {
        nom: "Contact",
        iconUrl: contact,
        lien: "/contact",
    },
    {
        nom: "GitHub",
        iconUrl: github,
        lien: "https://github.com/ernivani",
    },
    {
        nom: "LinkedIn",
        iconUrl: linkedin,
        lien: "https://www.linkedin.com/in/thomas-lindeker-562859235/",
    },
];

export const projects = [
    {
        iconUrl: liveStreaming,
        theme: "btn-back-red",
        name: "Streaming Video Next.js",
        description:
            "A Next.js project for streaming and downloading videos, leveraging Next.js, React, MongoDB, and Prisma for a seamless video streaming experience. Users can watch high-quality videos in 4K resolution using the HLS (HTTP Live Streaming) protocol.",
        lien: "https://github.com/ernivani/streaming-video-next.js",
    },
    {
        iconUrl: ia,
        theme: "btn-back-green",
        name: "Snake Game AI",
        description:
            "Classic Snake game powered by a neural network. Watch and learn as the snake improves its strategy with every move.",
        lien: "https://github.com/ernivani/ai-python-snakeGame",
    },
    {
        iconUrl: game,
        theme: "btn-back-blue",
        name: "SDL Game",
        description:
            "A simple game made with SDL2. The game is written in C++ and is a simple platformer. The game is still in development and is not yet finished.",
        lien: "https://github.com/adrianhajdin/ernivani/sdl-game",
    },
    {
        iconUrl: chatbot,
        theme: "btn-back-yellow",
        name: "Chat bot ollama",
        description: "Chatbot Ollama is an open source chat UI for Ollama.",
        lien: "https://github.com/ernivani/chatbot-ollama",
    },
];
