function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      <p className="text-sm tracking-[0.3em] text-gray-400 mb-6">
        START A CONVERSATION
      </p>

      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
        Diva the hacker with Art style
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10">
        Tell us about your project and let's build something great together.
      </p>

      <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
        Start a conversation
      </button>
    </section>
  );
}

export default Hero;


