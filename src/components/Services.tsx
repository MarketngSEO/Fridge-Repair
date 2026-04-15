import { motion } from "motion/react";
import { Snowflake, Droplets, Settings, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Fridge Repair",
    description: "Complete diagnostics and repair for all cooling issues, compressor faults, and electrical problems.",
    icon: Snowflake,
    color: "text-blue-400",
  },
  {
    title: "Gas Refill",
    description: "Professional gas charging and leakage testing to restore your fridge's cooling efficiency.",
    icon: Droplets,
    color: "text-cyan-400",
  },
  {
    title: "Maintenance",
    description: "Regular servicing to prevent breakdowns and extend the lifespan of your appliance.",
    icon: Settings,
    color: "text-indigo-400",
  },
  {
    title: "Emergency Service",
    description: "24/7 rapid response for urgent breakdowns in Mohammadpur and surrounding areas.",
    icon: Zap,
    color: "text-yellow-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Professional <span className="text-brand-electric">Services</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We provide comprehensive cooling solutions for residential and commercial refrigerators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="service-card-geometric p-6 rounded-[8px] flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-brand-electric flex items-center justify-center shrink-0 shadow-lg shadow-brand-electric/20 group-hover:scale-110 transition-transform">
                  <service.icon className="w-5 h-5 text-brand-dark" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider">{service.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
