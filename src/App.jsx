import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import TechStack from "./sections/TachStack";

function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="pt-[60px] md:pt-0">
        <Hero />
        <hr className="h-1 border-t-0 bg-transparent bg-gradient-to-r from-primary via-secondary to-primary" />
        <About />
        <hr className="h-1 border-t-0 bg-transparent bg-gradient-to-r from-primary via-secondary to-primary" />
        <TechStack />
        <hr className="h-1 border-t-0 bg-transparent bg-gradient-to-r from-primary via-secondary to-primary" />

      </div>
    </div>
  );
}

export default App;
