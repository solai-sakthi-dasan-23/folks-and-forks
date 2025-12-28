import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import ImageShowcase from "./components/ImageShowcase";
import Pricing from "./components/Pricing";
import TrustBar from "./components/TrustBar";
import NutriDetails from "./components/NutriDetails";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <ImageShowcase />
        <Pricing />
        <TrustBar />
        <NutriDetails />
        <OrderForm />
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
}
