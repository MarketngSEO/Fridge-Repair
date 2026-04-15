import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LeadForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <section id="book-now" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-[450px] mx-auto geometric-glass rounded-[16px] p-8 md:p-10">
          <div className="text-center mb-10 pb-6 border-b border-white/10">
            <h2 className="text-2xl font-black uppercase tracking-tight">Book Technician Now</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[0.75rem] uppercase tracking-wider text-text-muted font-bold">Your Name</Label>
              <Input id="name" placeholder="Enter your name" className="bg-white/5 border-white/20 focus:border-brand-electric rounded-[8px] h-12" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[0.75rem] uppercase tracking-wider text-text-muted font-bold">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="01XXX XXXXXX" className="bg-white/5 border-white/20 focus:border-brand-electric rounded-[8px] h-12" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-[0.75rem] uppercase tracking-wider text-text-muted font-bold">Service Type</Label>
              <Select required>
                <SelectTrigger className="bg-white/5 border-white/20 focus:border-brand-electric rounded-[8px] h-12">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-brand-dark border-white/20">
                  <SelectItem value="repair">Refrigerator Repair</SelectItem>
                  <SelectItem value="gas">Gas Refilling</SelectItem>
                  <SelectItem value="cleaning">Deep Cleaning</SelectItem>
                  <SelectItem value="compressor">Compressor Check</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-[0.75rem] uppercase tracking-wider text-text-muted font-bold">Address in Mohammadpur</Label>
              <Input id="address" placeholder="e.g. Ring Road, Block C" className="bg-white/5 border-white/20 focus:border-brand-electric rounded-[8px] h-12" required />
            </div>

            <Button type="submit" className="w-full bg-brand-electric hover:bg-brand-electric/90 text-brand-dark font-black uppercase tracking-widest h-14 rounded-[8px] neon-glow-sm transition-all hover:scale-[1.02]">
              Confirm Booking
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
