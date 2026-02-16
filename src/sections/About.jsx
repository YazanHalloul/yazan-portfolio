/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

function About() {
  return (
    <section id="about" className="py-24 flex items-center">
      <div className="max-w-6xl mx-auto px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-secondary text-accent mb-8 p-4 border-2 border-primary rounded-xl">
            About Me
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-accent text-lg leading-relaxed max-w-3xl border
         border-secondary rounded-lg p-6 mx-auto bg-primary "
        >
          I'm a Software Engineer with a background in Artificial Intelligence,
          experienced in building web applications, cross-platform mobile apps,
          and practical AI-driven systems. I enjoy designing scalable solutions
          with clean architecture and modern technologies.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-secondary text-accent my-8 p-4 rounded-xl">
            Education
          </h2>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-primary rounded-lg text-center text-accent text-lg border
         border-secondary px-6"
        >
          <p className="leading-relaxed max-w-3xl  pt-6 mx-auto  ">
            Bachelor's Degree in Software Engineering & Artificial Intelligence
          </p>
          <hr className="w-1/3 m-auto my-2" />
          <p className="leading-relaxed max-w-3xl pb-6 mx-auto ">
            University of Higher Institute for Applied Sciences and Technology
            (HIAST)
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
