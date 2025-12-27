const items = [
  { title: "3 Fresh Fruits", desc: "Vitamins & hydration" },
  { title: "2 Vegetables", desc: "Fiber & gut health" },
  { title: "Sprouts", desc: "Plant protein" },
  { title: "Nuts & Seeds", desc: "Healthy fats" },
];

export default function BoxContents() {
  return (
    <section className="bg-sectionTint py-16">
      <div className="section">
        <h2 className="heading text-center">
          What’s Inside Every Box
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-borderLight rounded-2xl p-5 text-center"
            >
              <h3 className="font-semibold text-base">
                {item.title}
              </h3>
              <p className="mt-2 subtext">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
