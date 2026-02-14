function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-soft flex items-center"
    >
      {" "}
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm Yazan Halloul
            </h1>

            <p className="text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0">
              Software Engineer with a background in Artificial Intelligence, building scalable web, mobile, and intelligent systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-secondary text-white px-6 py-3 rounded-full">
                View Work
              </button>

              <button className="border border-secondary text-secondary px-6 py-3 rounded-full">
                Contact Me
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-end">
            <img
              src="/profile.jpg"
              alt="Yazan Halloul"
              className="w-64 md:w-80 lg:w-96 object-cover rounded-3xl shadow-lg border-4 border-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
