import { useState, useEffect } from "react";

const slides = [
  {
    label: "THE PROBLEM",
    title: "India is\nNutrient Deficient",
    description:
      "This is not a food shortage problem. It’s a daily nutrition habit problem shaped by modern lifestyles.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600",
  },
  {
    label: "WHO WE SERVE",
    title: "Built for\nReal Life",
    description:
      "Children, gym-goers, busy professionals, and elders who want nutrition from nature — not pills or powders.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1600",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2500); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="section grid grid-cols-1 md:grid-cols-2 min-h-[80vh] items-center gap-10">

        {/* TEXT SIDE */}
        <div className="relative">
          <span className="text-xs tracking-widest text-textSecondary uppercase">
            {slides[index].label}
          </span>

          <h1
            key={slides[index].title}
            className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-brandGreen leading-tight whitespace-pre-line
                       transition-all duration-500 ease-out animate-slideUp"
          >
            {slides[index].title}
          </h1>

          <p
            key={slides[index].description}
            className="mt-6 max-w-md text-textSecondary transition-opacity duration-500"
          >
            {slides[index].description}
          </p>

          {/* Indicator */}
          <div className="mt-10 flex items-center gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === i
                    ? "w-14 bg-brandGreen"
                    : "w-6 bg-borderLight"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative h-[60vh] rounded-[2.5rem] overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            <div className="flex w-[200%] h-full">
              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.image}
                  alt=""
                  className="w-1/2 h-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
