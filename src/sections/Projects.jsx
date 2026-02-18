/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { projects } from "../utils/projects";
import { techIcons } from "../utils/techIcons";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

function Projects() {
  const linkConfig = {
    github: {
      icon: <FaGithub />,
      label: "GitHub",
    },
    demo: {
      icon: <TbExternalLink />,
      label: "Video Demo",
    },
  };
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold bg-secondary text-accent mb-8 p-4 border-2 border-primary rounded-xl"
          >
            Projects
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col bg-primary border border-secondary rounded-2xl py-3 px-5 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 "
            >
              <img
                className="mb-4 rounded-lg"
                src={project.image}
                alt="Yazan Halloul"
              />
              <h2 className="text-center lg:text-left text-lg lg:text-2xl font-semibold mb-3 text-accent">
                {project.title}
              </h2>

              <p className="text-center lg:text-left text-sm lg:text-base mb-4 text-accent">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">
                {project.skills.map((skill, index) => {
                  const Icon = techIcons[skill.name]?.icon;
                  const iconColor = techIcons[skill.name]?.color;
                  return (
                    <div
                      key={index}
                      style={{ "--hover-color": iconColor }}
                      className={`flex items-center justify-center rounded-lg py-[3px] px-2 gap-2  text-accent border border-accen
                        hover:text-[var(--hover-color)] transition-colors duration-300`}
                    >
                      <span className="text-xl">
                        {Icon && <Icon color={iconColor} />}
                      </span>
                      <span className="text-xs  md:text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>

              <hr className="mt-auto h-1 border-t-0 bg-transparent bg-gradient-to-r my-4 from-primary via-secondary to-primary" />

              <div className="grid grid-cols-2 gap-3">
                {project.links.map((e, index) => {
                  const config = linkConfig[e.type];

                  return (
                    <motion.a
                      key={index}
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex items-center justify-center rounded-xl py-1 mb-2 gap-2
                          text-accent ${config.label == "GitHub" ? "bg-[#24292e]" : "bg-secondary"}`}
                    >
                      <span className="text-1xl">{config.icon}</span>
                      <span className="text-sm  md:text-base">
                        {config.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
