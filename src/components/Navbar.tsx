import { useState, useEffect } from "react";
import { Snowflake, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-dark/80 backdrop-blur-md border-b border-brand-electric/10 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-brand-electric rounded-[4px] neon-glow-sm flex items-center justify-center transition-transform duration-500 group-hover:rotate-90">
            <Snowflake className="w-5 h-5 text-brand-dark" />
          </div>
          <span className="text-xl font-extrabold tracking-widest uppercase">CoolMaster Dhaka</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-brand-electric transition-colors">Home</a>
          <a href="#services" className="text-sm font-medium hover:text-brand-electric transition-colors">Services</a>
          <a href="#book-now" className="text-sm font-medium hover:text-brand-electric transition-colors">Book Now</a>
          <Button className="bg-brand-electric hover:bg-brand-electric/90 text-brand-dark font-bold rounded-full px-6" asChild>
            <a href="tel:01756144670">
              <Phone className="w-4 h-4 mr-2" />
              01756144670
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-brand-electric/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Home</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Services</a>
              <a href="#book-now" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Book Now</a>
              <Button className="bg-brand-electric hover:bg-brand-electric/90 text-brand-dark font-bold rounded-full w-full py-6" asChild>
                <a href="tel:01756144670">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
