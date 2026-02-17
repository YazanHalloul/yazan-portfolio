/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { socialLinks } from "../utils/socialLinks";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-primary flex flex-col justify-center"
    >
      <div className="flex flex-col items-center gap-10">
        <div className="max-w-6xl mx-auto px-6 w-full ">
          <div className="flex flex-col lg:flex-row items-center justify-between pt-8 gap-10">
            {/* Text */}
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
                Hi, I'm Yazan Halloul
              </h1>

              <p className="text-accent mb-8 max-w-xl mx-auto lg:mx-0">
                <Typewriter
                  words={[
                    `Software Engineer with a background in Artificial Intelligence,
                   building web and mobile applications using modern technologies`,
                  ]}
                  loop={1}
                  cursorStyle="."
                  cursor
                  typeSpeed={60}
                  deleteSpeed={0}
                  delaySpeed={1000}
                />
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" bg-secondary text-accent px-6 py-3 rounded-full"
                >
                  View Work
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-accent  text-accent px-6 py-3 rounded-full"
                >
                  Contact Me
                </motion.a>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-end ">
              <motion.img
                src="/profile.jpg"
                alt="Yazan Halloul"
                className="w-64 md:w-80 lg:w-96 object-cover rounded-[2rem] "
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "backInOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
        <div className="text-[16px] max-w-6xl mx-auto px-6 pb-8 pt-8 lg:pt-0 w-full flex flex-row gap-4 justify-center lg:justify-start text-accent ">
          {" "}
          {Object.entries(socialLinks).map(([index, link]) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${link.iconColor} text-accent px-3 py-3 rounded-full`}
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
