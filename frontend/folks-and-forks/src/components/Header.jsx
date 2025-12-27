import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-borderLight shadow-sm">
      <div className="section flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Folks & Forks logo"
            className="h-8 w-8 object-contain"
          />
          <span className="font-semibold text-brandGreen">
            Folks & Forks
          </span>
        </div>


        <button
          onClick={() => setOpen(!open)}
          className="md:hidden space-y-1"
        >
          <span className="block w-6 h-0.5 bg-textPrimary" />
          <span className="block w-6 h-0.5 bg-textPrimary" />
          <span className="block w-6 h-0.5 bg-textPrimary" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <button onClick={() => goTo("pricing")}>Plans</button>
          <button onClick={() => goTo("contents")}>What’s Inside</button>
          <button onClick={() => goTo("order")}>Order</button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-borderLight">
          {[
            { id: "pricing", label: "Plans" },
            { id: "contents", label: "What’s Inside" },
            { id: "order", label: "Order Now" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="block w-full text-left px-6 py-4 border-b border-borderLight"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
