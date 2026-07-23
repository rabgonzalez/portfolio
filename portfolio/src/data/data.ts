import type { ProjectType, skillType } from "../types";

export const skills: Record<string, skillType> = {
  Python: {
    name: "Python",
    description: "Experiencia en desarrollo web con Django.",
    logo_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#FFD43B",
  },
  Java: {
    name: "Java",
    description:
      "Desarrollo de aplicaciones con Spring Boot y aplicaciones móviles con Android.",
    logo_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "#007396",
  },
  TypeScript: {
    name: "TypeScript",
    description:
      "Desarrollo frontend con varios frameworks, y desarrollo backend con Node.js",
    logo_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  PHP: {
    name: "PHP",
    description: "Desarrollo de APIs RESTful con Laravel.",
    logo_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#777BB4",
  },
  JavaScript: {
    name: "JavaScript",
    description: "Desarrollo web frontend y backend con Node.js.",
    logo_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  Lua: {
    name: "Lua",
    description: "Creación de mods para videojuegos.",
    logo_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
    color: "#000000",
  },
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Routine-Fights",
    description: "data.projects.routineFights.description",
    tags: [skills["Python"], skills["TypeScript"]],
    codeUrl: "https://github.com/rabgonzalez/Routine-Fights",
    imageUrl: "/projects/routine-fights.png",
  },
  {
    id: 2,
    title: "MoviesXMovies",
    description: "data.projects.moviesXMovies.description",
    tags: [skills["Python"], skills["TypeScript"]],
    codeUrl: "https://moviesxmovies.jonaykb.com/docs/",
    imageUrl: "/projects/moviesxmovies.webp",
  },
  {
    id: 3,
    title: "TicTacToe",
    description: "data.projects.ticTacToeSpanish.description",
    tags: [skills["Java"], skills["TypeScript"]],
    codeUrl: "https://github.com/rabgonzalez/TicTacToe-Spanish",
  },
  {
    id: 4,
    title: "Lumino",
    description: "data.projects.lumino.description",
    tags: [skills["Python"]],
    codeUrl: "https://rabgonzalez.github.io/Lumino/",
  },
  {
    id: 5,
    title: "MovieAPI",
    description: "data.projects.movieAPI.description",
    tags: [skills["PHP"], skills["TypeScript"]],
    codeUrl: "https://github.com/rabgonzalez/MovieAPI",
    imageUrl: "/projects/movie-api.png",
  },
  {
    id: 6,
    title: "MC - Guess the Block",
    description: "data.projects.mcGuessTheBlock.description",
    tags: [skills["TypeScript"]],
    codeUrl: "https://github.com/rabgonzalez/MC-GuessTheBlock",
    imageUrl: "/projects/guess-the-block.png",
  },
];
