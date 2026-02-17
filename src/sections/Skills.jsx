/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { skills } from "../utils/skills";
import { techIcons } from "../utils/techIcons";

function Skills() {
  return (
    <section id="tech_stack" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold bg-secondary text-accent mb-8 p-4 border-2 border-primary rounded-xl"
          >
            Skills
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-primary border border-secondary rounded-2xl p-6 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent text-center lg:text-left">
                {group.category}
              </h3>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {group.items.map((item, i) => {
                  const Icon = techIcons[item.name]?.icon;
                  const iconColor = techIcons[item.name]?.color;
                  return (
                    <div
                      key={i}
                      style={{"--hover-color": iconColor}}
                      className={`flex items-center gap-2 text-accent border border-accent rounded-lg py-1 px-2
                         hover:text-[var(--hover-color)] transition-colors duration-300`}
                    >
                      <span className="text-2xl">{Icon && <Icon color={iconColor} />}</span>
                      <span className="text-sm">{item.name}</span>
                    </div>
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

export default Skills;
