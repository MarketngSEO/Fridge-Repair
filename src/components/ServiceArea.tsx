import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const areas = [
  "Mohammadpur",
  "Adabor",
  "Shyamoli",
  "Dhanmondi",
  "Lalmatia",
  "Asad Gate",
  "Kalyanpur",
  "Farmgate",
];

export default function ServiceArea() {
  return (
    <section className="py-24 bg-brand-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Service <span className="text-brand-electric">Areas</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We provide doorstep service across Mohammadpur and nearby neighborhoods in Dhaka.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-16 text-sm">
          <strong className="text-white uppercase tracking-widest">Service Hubs:</strong>
          {areas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-2 text-text-muted"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-electric" />
              <span>{area}</span>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl overflow-hidden border border-brand-electric/20 h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d14607.60224135505!2d90.3508447!3d23.7509426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf563a62867d%3A0x64431804c7873663!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1713170000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[10px] border-brand-dark/20" />
        </div>
      </div>
    </section>
  );
}
