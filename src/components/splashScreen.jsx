/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-primary flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Name */}
      <motion.h1
        className="text-accent text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Yazan
      </motion.h1>

      {/* Animated Line */}
      <div className="w-[200px] lg:w-[400px]">
      <motion.div
        className="h-[2px] bg-secondary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      </div>
    </motion.div>
  );
}