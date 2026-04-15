import { motion } from "motion/react";
import { Zap, UserCheck, Banknote, Home, CalendarCheck } from "lucide-react";

const features = [
  {
    title: "Fast Response",
    description: "We reach your location within 30-60 minutes of booking.",
    icon: Zap,
  },
  {
    title: "Expert Technicians",
    description: "Certified professionals with years of experience in all brands.",
    icon: UserCheck,
  },
  {
    title: "Affordable Price",
    description: "Transparent pricing with no hidden costs. Best value for money.",
    icon: Banknote,
  },
  {
    title: "Home Service",
    description: "No need to transport your fridge. We fix it at your doorstep.",
    icon: Home,
  },
  {
    title: "Same-Day Repair",
    description: "Most repairs are completed on the same day of your call.",
    icon: CalendarCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              Why Mohammadpur Residents <span className="text-brand-electric">Trust Us</span>
            </motion.h2>
            <p className="text-slate-400 mb-12 text-lg">
              We understand how essential a refrigerator is for your daily life. Our mission is to provide the fastest and most reliable repair service in Dhaka.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-electric/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-brand-electric" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden border border-brand-electric/20 neon-glow"
            >
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                alt="Expert Technician"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-card p-6 rounded-2xl">
                  <p className="text-brand-electric font-bold text-2xl mb-1">10+ Years</p>
                  <p className="text-slate-300">of Excellence in Fridge Repair</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-electric/20 blur-[100px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-neon/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
