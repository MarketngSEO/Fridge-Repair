import { motion } from "motion/react";
import { Phone, MessageSquare, ShieldCheck, Clock, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
          alt="Fridge Repair Technician"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-brand-dark/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1.5 bg-brand-electric/10 border border-brand-electric text-brand-electric text-[0.75rem] font-bold uppercase tracking-wider rounded-[4px] mb-6">
              24/7 Emergency Support
            </div>
            <h1 className="text-[3.5rem] md:text-[4.5rem] font-black leading-[1.1] mb-6 hero-text-shadow">
              Emergency Fridge Repair <span className="text-brand-electric block">in Mohammadpur</span>
            </h1>
            <p className="text-lg text-text-muted mb-10 max-w-[500px] leading-relaxed">
              Fast, reliable & professional fridge repair, gas refill & doorstep maintenance. Expert technicians ready to fix your appliance today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-electric hover:bg-brand-electric/90 text-brand-dark font-black text-sm uppercase tracking-widest px-8 py-7 rounded-[8px] neon-glow-sm transition-all hover:scale-105"
                asChild
              >
                <a href="tel:01756144670">
                  Confirm Booking
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-yellow-400 text-sm font-bold">
              <span>★★★★★</span>
              <span className="text-white/80 font-medium">(4.9/5 Based on 250+ local reviews)</span>
            </div>

            <div className="mt-6 flex gap-6">
              <div className="flex items-center gap-2 text-[0.75rem] font-bold text-white/80">
                <span className="text-brand-electric">✓</span> Same Day Fix
              </div>
              <div className="flex items-center gap-2 text-[0.75rem] font-bold text-white/80">
                <span className="text-brand-electric">✓</span> Expert Techs
              </div>
              <div className="flex items-center gap-2 text-[0.75rem] font-bold text-white/80">
                <span className="text-brand-electric">✓</span> Affordable Price
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-10" />
    </section>
  );
}
