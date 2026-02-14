function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I'm Yazan Halloul
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl">
        Frontend Developer building modern, responsive, and scalable web applications.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-green-500 text-black font-semibold rounded-full"
        >
          View Work
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-green-500 text-green-500 rounded-full"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
