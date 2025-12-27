export default function Pricing() {
  return (
    <section id="pricing" className="bg-sectionTint py-16">
      <div className="section">
        <h2 className="heading text-center">
          Simple Subscription Plans
        </h2>
        <p className="text-center subtext mt-2">
          Calculated as 4 weeks per month. Sundays excluded.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { name: "Weekly", days: "6 Days", price: "₹899" },
            { name: "Fortnight", days: "12 Days", price: "₹1599" },
            { name: "Monthly", days: "24 Days", price: "₹2999" },
          ].map((plan) => (
            <div
              key={plan.name}
              className="bg-white border border-borderLight rounded-2xl p-6 text-center"
            >
              <h3 className="font-semibold text-lg">
                {plan.name} Plan
              </h3>
              <p className="subtext mt-1">{plan.days}</p>
              <p className="mt-4 text-2xl font-bold text-brandGreen">
                {plan.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
