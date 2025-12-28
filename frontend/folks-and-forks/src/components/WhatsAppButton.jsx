export default function WhatsAppButton() {
  const phoneNumber = "9342861726"; // 👈 replace with your number
  const message =
    "Hi! I want to know more about the Golden Nutri Box subscription.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center
                 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600
                 shadow-lg transition"
      aria-label="Chat with us on WhatsApp"
    >
      <img
        src="./wa.png"
        alt="WhatsApp"
        className="w-7 h-7"
      />
    </a>
  );
}
