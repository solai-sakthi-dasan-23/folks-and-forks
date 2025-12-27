export default function LeadForm() {
  return (
    <section className="section py-20">
      <h2 className="heading text-center">
        Start Your Healthy Habit
      </h2>

      <p className="mt-2 text-center subtext">
        Leave your details. We’ll reach out.
      </p>

      <div className="mt-8 max-w-xl mx-auto space-y-4">
        <input
          className="input"
          placeholder="Your Name"
        />
        <input
          className="input"
          placeholder="Mobile Number"
          inputMode="numeric"
        />
        <textarea
          className="input"
          rows="3"
          placeholder="Delivery Address"
        />
        <button className="primary-btn w-full">
          Get Started
        </button>
      </div>
    </section>
  );
}
