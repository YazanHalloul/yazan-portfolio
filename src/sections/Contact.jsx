/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { socialLinks } from "../utils/socialLinks";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-primary text-accent flex items-center"
    >
      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Build Something Great Together
        </h2>

        {/* Subtitle */}
        <p className="text-accent/80 max-w-2xl mx-auto mb-12 text-base lg:text-lg leading-relaxed">
          I'm currently seeking a software engineering opportunity where I can
          contribute to building scalable web, mobile, and AI-driven systems. If
          you’re looking for a motivated developer with a strong technical
          foundation, feel free to reach out.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <motion.a
            href="mailto:yazan.halloul.10@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-secondary text-accent font-medium"
          >
            Email Me
          </motion.a>

          <motion.a
            href={socialLinks.linkedin.url}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-secondary text-accent"
          >
            {socialLinks.linkedin.label}
          </motion.a>

          <motion.a
            href={socialLinks.whatsapp.url}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-secondary text-accent"
          >
            {socialLinks.whatsapp.label}
          </motion.a>
        </div>

        {/* CV Button */}
        <a
          href="/yazan-halloul-cv.pdf"
          target="_blank"
          className="text-accent underline underline-offset-4
                 hover:text-accent transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Contact;
