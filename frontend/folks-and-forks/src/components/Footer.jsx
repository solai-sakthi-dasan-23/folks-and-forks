export default function Footer() {
  return (
    <footer className="border-t border-borderLight py-8 text-xs text-center subtext">
      <div className="flex flex-col items-center gap-3">
        
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <a
            href="tel:+919876543210"
            className="hover:text-brandGreen transition"
          >
            📞 +91 9342861726
          </a>

          <a
            href="mailto:folksandforks.2025@gmail.com"
            className="hover:text-brandGreen transition"
          >
            ✉️ folksandforks.2025@gmail.com
          </a>
        </div>

        {/* Copyright */}
        <div className="opacity-70">
          © 2025 Folks & Forks. Nutrition from nature.
        </div>
      </div>
    </footer>
  );
}
