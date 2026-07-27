import type { ProjectType, skillType } from "../types";
import RoutineFightsImage from "../assets/projects/routine-fights.png";
import MoviesXMoviesImage from "../assets/projects/moviesxmovies.webp";
import MovieAPIImage from "../assets/projects/movie-api.png";
import GuessTheBlockImage from "../assets/projects/guess-the-block.png";

export const skills: Record<string, skillType> = {
  Python: {
    name: "Python",
    logo_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB", 
  },
  Java: {
    name: "Java",
    logo_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "#ED8B00", 
  },
  TypeScript: {
    name: "TypeScript",
    logo_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  PHP: {
    name: "PHP",
    logo_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#8892BF", 
  },
  JavaScript: {
    name: "JavaScript",
    logo_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E", 
  },
  Lua: {
    name: "Lua",
    logo_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
    color: "#000080", 
  },
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Routine-Fights",
    description: "data.projects.routineFights.description",
    tags: [skills["Python"], skills["TypeScript"]],
    codeUrl: "https://github.com/rabgonzalez/Routine-Fights",
    imageUrl: RoutineFightsImage,
  },
  {
    id: 2,
    title: "MoviesXMovies",
    description: "data.projects.moviesXMovies.description",
    tags: [skills["Python"], skills["TypeScript"]],
    codeUrl: "https://moviesxmovies.jonaykb.com/docs/",
    imageUrl: MoviesXMoviesImage,
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
    imageUrl: MovieAPIImage,
  },
  {
    id: 6,
    title: "MC - Guess the Block",
    description: "data.projects.mcGuessTheBlock.description",
    tags: [skills["TypeScript"]],
    codeUrl: "https://github.com/rabgonzalez/MC-GuessTheBlock",
    imageUrl: GuessTheBlockImage,
  },
];
