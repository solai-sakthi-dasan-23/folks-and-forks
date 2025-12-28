export default function ImageShowcase() {
  return (
    <section className="section py-16">
      <h2 className="heading text-center mb-8">
        What Your Daily Nutri Box Looks Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl p-4 flex items-center justify-center aspect-[4/3]"
          >
            <img
              src={`./fruitbox-${i}.png`}
              alt={`Nutri Box ${i}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
