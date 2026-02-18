import { DiDotnet, DiMsqlServer, DiMysql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiJavascript,
  SiPostman,
  SiTensorflow,
  SiDjango,
  SiOpenai,
} from "react-icons/si";

import {
  TbApi,
  TbBrandVscode,
  TbPencilCode,
} from "react-icons/tb";

export const techIcons = {
  React: { icon: FaReact, color: "#61DBFB" },
  HTML: { icon: FaHtml5, color: "#E34F26" },
  CSS: { icon: FaCss3Alt, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  Tailwind: { icon: SiTailwindcss, color: "#38BDF8" },

  "ASP.NET Core": { icon: DiDotnet, color: "#605CA9" },
  "REST APIs": { icon: TbApi, color: "orange" },
  SQL: { icon: FaDatabase, color: "#B71C1C" },
  "SQL Server": { icon: DiMsqlServer, color: "#B71C1C" },
  "MySQL": { icon: GrMysql, color: "#00758F" },
  Django: { icon: SiDjango, color: "#092E20" },

  Flutter: { icon: SiFlutter, color: "#08589C" },
  Dart: { icon: SiDart, color: "#08589C" },

  "Machine Learning": { icon: FaBrain, color: "#F4CCCB" },
  "Deep Learning": { icon: SiTensorflow, color: "#FFA000" },
  LLMs: { icon: SiOpenai, color: "#10A37F" },
  "Prompt Engineering": { icon: TbPencilCode, color: "#123458" },

  Git: { icon: FaGitAlt, color: "#F1502F" },
  GitHub: { icon: FaGithub, color: "#ffffff" },
  "VS Code": { icon: TbBrandVscode, color: "#007ACC" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
};