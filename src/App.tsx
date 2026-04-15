import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceArea from "./components/ServiceArea";
import Reviews from "./components/Reviews";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import StickyButtons from "./components/StickyButtons";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-foreground selection:bg-brand-electric selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <ServiceArea />
        <Reviews />
        <LeadForm />
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
}
