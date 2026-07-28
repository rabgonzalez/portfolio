import type { ExperienceType, ProjectType, skillType } from "../types";
import RoutineFightsImage from "../assets/projects/routine-fights.png";
import MoviesXMoviesImage from "../assets/projects/moviesxmovies.webp";
import MovieAPIImage from "../assets/projects/movie-api.png";
import GuessTheBlockImage from "../assets/projects/guess-the-block.png";
import TicTacToeImage from "../assets/projects/ticTacToe.jpg";
import LuminoImage from "../assets/projects/lumino.png";
import TelesforoImage from "../assets/experience/telesforo.jpg";
import ERRCImage from "../assets/experience/errc.png";
import DSTImage from "../assets/experience/dst.png";

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
    imageUrl: TicTacToeImage,
  },
  {
    id: 4,
    title: "MC - Guess the Block",
    description: "data.projects.mcGuessTheBlock.description",
    tags: [skills["TypeScript"]],
    codeUrl: "https://github.com/rabgonzalez/MC-GuessTheBlock",
    imageUrl: GuessTheBlockImage,
  },
  {
    id: 5,
    title: "Lumino",
    description: "data.projects.lumino.description",
    tags: [skills["Python"]],
    codeUrl: "https://rabgonzalez.github.io/Lumino/",
    imageUrl: LuminoImage,
  },
  {
    id: 6,
    title: "MovieAPI",
    description: "data.projects.movieAPI.description",
    tags: [skills["PHP"], skills["TypeScript"]],
    codeUrl: "https://github.com/rabgonzalez/MovieAPI",
    imageUrl: MovieAPIImage,
  }
];

export const experiences: ExperienceType[] = [
  {
    id: 1,
    title: "data.experience.DAM.title",
    company: "data.experience.DAM.company",
    description: "data.experience.DAM.description",
    startDate: "2023-09",
    endDate: "2025-05",
    tags: [skills["Java"], skills["TypeScript"], skills["PHP"]],
    icon: TelesforoImage,
  },
  {
    id: 2,
    title: "data.experience.ERRC.title",
    company: "data.experience.ERRC.company",
    description: "data.experience.ERRC.description",
    startDate: "2025-03",
    endDate: "2025-05",
    tags: [skills["Python"], skills["TypeScript"]],
    icon: ERRCImage,
  },
  {
    id: 3,
    title: "data.experience.DAW.title",
    company: "data.experience.DAW.company",
    description: "data.experience.DAW.description",
    startDate: "2025-09",
    endDate: "2026-05",
    tags: [skills["Python"], skills["JavaScript"]],
    icon: TelesforoImage,
  },
  {
    id: 4,
    title: "data.experience.DST.title",
    company: "data.experience.DST.company",
    description: "data.experience.DST.description",
    startDate: "2026-02",
    endDate: "2026-05",
    tags: [skills["Java"], skills["TypeScript"]],
    icon: DSTImage,
  }
]
