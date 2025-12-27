export default function Pricing() {
  const scrollToOrder = () => {
    document
      .getElementById("order")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="bg-sectionTint py-20">
      <div className="section">
        <h2 className="heading text-center">
          Simple Subscription Plans
        </h2>

        <p className="text-center subtext mt-2 max-w-xl mx-auto">
          Calculated as 4 weeks per month. Sundays excluded.
          Transparent pricing, no hidden costs.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          {/* Weekly Plan */}
          <div className="bg-white border border-borderLight rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg">
              Weekly Plan
            </h3>
            <p className="subtext mt-1">6 Days</p>

            <p className="mt-5 text-3xl font-bold text-brandGreen">
              ₹899
            </p>
            <p className="mt-1 text-xs text-textSecondary">
              ~ ₹150 per day
            </p>

            <button
              onClick={scrollToOrder}
              className="mt-6 w-full primary-btn"
            >
              Choose Plan
            </button>
          </div>

          {/* Bi-Weekly Plan */}
          <div className="bg-white border border-borderLight rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg">
              Bi-Weekly Plan
            </h3>
            <p className="subtext mt-1">12 Days</p>

            <p className="mt-5 text-3xl font-bold text-brandGreen">
              ₹1599
            </p>
            <p className="mt-1 text-xs text-textSecondary">
              ~ ₹133 per day
            </p>

            <button
              onClick={scrollToOrder}
              className="mt-6 w-full primary-btn"
            >
              Choose Plan
            </button>
          </div>

          {/* Monthly Plan – Highlighted */}
          <div className="relative bg-white border-2 border-brandGreen rounded-2xl p-6 text-center shadow-md scale-[1.03]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brandGreen text-white text-xs px-4 py-1 rounded-full">
              Frequently Purchased
            </span>

            <h3 className="font-semibold text-lg">
              Monthly Plan
            </h3>
            <p className="subtext mt-1">24 Days</p>

            <p className="mt-5 text-3xl font-bold text-brandGreen">
              ₹2999
            </p>
            <p className="mt-1 text-xs text-textSecondary">
              ~ ₹125 per day
            </p>

            <button
              onClick={scrollToOrder}
              className="mt-6 w-full primary-btn"
            >
              Choose Plan
            </button>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={scrollToOrder}
            className="primary-btn px-10"
          >
            Start My Subscription
          </button>
        </div>
      </div>
    </section>
  );
}
