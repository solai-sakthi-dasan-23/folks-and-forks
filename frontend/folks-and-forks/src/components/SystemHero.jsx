export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-white">
      <div className="section text-center flex flex-col items-center">

        {/* Product Image */}
        <div className="w-64 sm:w-80 md:w-96 mb-10">
          <img
            src="https://images.unsplash.com/photo-1604908812755-5f2b2c9c1c1a?q=80&w=800"
            alt="Folks & Forks Nutri Box"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brandGreen leading-tight">
          Daily nutrition.
          <br />
          Packed. Delivered. Done.
        </h1>

        {/* Subline */}
        <p className="mt-4 text-textSecondary max-w-md">
          Fresh fruits, vegetables, sprouts, nuts & seeds — portioned for real life.
        </p>

      </div>
    </section>
  );
}
