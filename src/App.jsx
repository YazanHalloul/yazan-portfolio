import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[60px] md:pt-0">
        <Hero />
        {/* <hr className="h-0.5 bg-secondary" /> */}
        <hr className=" h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <About />
      </div>
    </>
  );
}

export default App;
