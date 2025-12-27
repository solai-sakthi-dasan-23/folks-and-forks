export default function Hero() {
  return (
    <section className="section pt-12 pb-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-brandGreen leading-tight">
        Fresh Fruit Box
        <br />
        Delivered Daily
      </h2>

      <p className="mt-4 subtext max-w-xl mx-auto">
        Ready-to-eat fruit & nutrition boxes for people who want health without effort.
      </p>

      <div className="mt-5 text-xl font-bold text-brandYellow">
        Starting at ₹125/day
      </div>

      <div className="mt-8 space-y-3 sm:flex sm:space-y-0 sm:gap-4 sm:justify-center">
        <button className="primary-btn w-full sm:w-auto">
          Start My Daily Habit
        </button>
        <button className="secondary-btn w-full sm:w-auto">
          Try First Box
        </button>
      </div>
    </section>
  );
}
