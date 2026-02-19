import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import SplashScreen from "./components/splashScreen";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">P
      {loading ? (
        <SplashScreen key="splash" />
      ) : (
        <>
          <Navbar />
          <div className="pt-[60px] lg:pt-0">
            <Hero />
            <hr className="h-1 border-t-0 bg-transparent bg-gradient-to-r from-primary via-secondary to-primary" />
            <About />
            <hr className="h-1 border-t-0 bg-transparent bg-gradient-to-r from-primary via-secondary to-primary" />
            <Skills />
            <hr className="h-1 border-t-0 bg-transparent bg-gradient-to-r from-primary via-secondary to-primary" />
            <Projects />
            <hr className="h-1 border-t-0 bg-transparent bg-gradient-to-r from-primary via-secondary to-primary" />
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
