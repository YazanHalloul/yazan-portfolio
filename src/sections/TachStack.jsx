import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

import {
  SiDotnet,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiJavascript,
  SiPostman,
  SiTensorflow,
} from "react-icons/si";

import {
  TbApi,
  TbBrandOpenai,
  TbBrandVscode,
  TbPencilCode,
} from "react-icons/tb";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

function TechStack() {
  const techStack = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "ASP.NET Core", icon: <SiDotnet /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Mobile",
      items: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Dart", icon: <SiDart /> },
      ],
    },
    {
      category: "AI",
      items: [
        { name: "Machine Learning", icon: <FaPython /> },
        { name: "Deep Learning", icon: <SiTensorflow /> },
        { name: "LLMs", icon: <TbBrandOpenai /> },
        { name: "Prompt Engineering", icon: <TbPencilCode /> },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <TbBrandVscode /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
  ];
  return (
    <section id="tech_stack" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold bg-secondary text-accent mb-8 p-4 border-2 border-primary rounded-xl"
          >
            Tech Stack
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {techStack.map((group, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-primary border border-secondary rounded-2xl p-6 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-accent hover:text-secondary transition-colors duration-300"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
