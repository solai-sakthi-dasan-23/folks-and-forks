export default function BoxContents() {
  return (
    <section
      id="contents"
      className="py-20 bg-white"
    >
      <div className="section">
        {/* Heading */}
        <h2 className="heading text-center">
          What’s Inside the Nutri Box
        </h2>

        <p className="text-center text-textSecondary mt-3 max-w-2xl mx-auto">
          We don’t just pack food. We design a daily nutrition habit that
          fits naturally into your life — without effort, confusion, or
          repetition.
        </p>

        {/* Content cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Amla */}
          <div className="bg-sectionTint rounded-2xl p-6">
            <p className="text-lg font-semibold text-brandGreen">
              Amla
            </p>
            <p className="text-sm text-textSecondary mt-2">
              A daily dose of Vitamin C to support immunity and keep your
              body resilient — naturally.
            </p>
          </div>

          {/* Fruits */}
          <div className="bg-sectionTint rounded-2xl p-6">
            <p className="text-lg font-semibold text-brandGreen">
              3 Fresh Fruits
            </p>
            <p className="text-sm text-textSecondary mt-2">
              Apples, bananas, citrus fruits, and seasonal varieties —
              rotated through the week to avoid boredom and ensure balance.
            </p>
          </div>

          {/* Vegetables */}
          <div className="bg-sectionTint rounded-2xl p-6">
            <p className="text-lg font-semibold text-brandGreen">
              2 Vegetables
            </p>
            <p className="text-sm text-textSecondary mt-2">
              Fiber-rich vegetables selected to support digestion, gut
              health, and sustained energy throughout the day.
            </p>
          </div>

          {/* Sprouts */}
          <div className="bg-sectionTint rounded-2xl p-6">
            <p className="text-lg font-semibold text-brandGreen">
              Sprouts Rotation
            </p>
            <p className="text-sm text-textSecondary mt-2">
              Moong sprouts, black chana, and moth beans rotated through
              the week to provide clean plant protein.
            </p>
          </div>

          {/* Nuts & Seeds */}
          <div className="bg-sectionTint rounded-2xl p-6">
            <p className="text-lg font-semibold text-brandGreen">
              Nuts & Seeds Mix
            </p>
            <p className="text-sm text-textSecondary mt-2">
              A carefully portioned mix of nuts and seeds to deliver
              healthy fats, satiety, and lasting energy.
            </p>
          </div>

          {/* Habit message */}
          <div className="bg-brandGreenSoft rounded-2xl p-6">
            <p className="text-lg font-semibold text-brandGreen">
              Built as a Daily Habit
            </p>
            <p className="text-sm text-textSecondary mt-2">
              No planning. No prep. No guesswork. Just open the box and
              eat — consistently, every day.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-textSecondary mb-4">
            Ready to make healthy eating effortless?
          </p>
          <button
            onClick={() =>
              document
                .getElementById("order")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="primary-btn px-10"
          >
            Start My Daily Nutrition
          </button>
        </div>
      </div>
    </section>
  );
}
