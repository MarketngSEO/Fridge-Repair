import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Rahat Ahmed",
    location: "Mohammadpur",
    text: "Excellent service! My Samsung fridge stopped cooling, and they fixed it within an hour. Very professional and reasonable price.",
    rating: 5,
  },
  {
    name: "Sumaiya Khan",
    location: "Dhanmondi",
    text: "The technician was very polite and knowledgeable. They did a gas refill for my LG fridge. Highly recommended for home service.",
    rating: 5,
  },
  {
    name: "Tanvir Hossain",
    location: "Adabor",
    text: "Quick response time. I called them in the morning and they were at my house by noon. Fixed the compressor issue perfectly.",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What Our <span className="text-brand-electric">Customers Say</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real feedback from homeowners in Mohammadpur who experienced our premium service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card relative pt-12">
                <div className="absolute top-0 left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-electric flex items-center justify-center shadow-lg shadow-brand-electric/20">
                  <Quote className="w-6 h-6 text-brand-dark" />
                </div>
                <CardContent>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`}
                      />
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div>
                    <p className="font-bold text-lg">{review.name}</p>
                    <p className="text-brand-electric text-sm">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
