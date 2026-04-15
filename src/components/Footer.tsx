import { Snowflake, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-electric/10 pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Snowflake className="w-8 h-8 text-brand-electric" />
              <span className="text-2xl font-bold tracking-tighter">CoolFridge</span>
            </div>
            <p className="text-slate-400 mb-6">
              The most trusted refrigerator repair service in Mohammadpur, Dhaka. Quality service at your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-electric hover:text-brand-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-electric hover:text-brand-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-electric hover:text-brand-dark transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-electric transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-electric transition-colors">Services</a></li>
              <li><a href="#book-now" className="hover:text-brand-electric transition-colors">Book Now</a></li>
              <li><a href="#" className="hover:text-brand-electric transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-electric transition-colors">Fridge Repair</a></li>
              <li><a href="#" className="hover:text-brand-electric transition-colors">Gas Refill</a></li>
              <li><a href="#" className="hover:text-brand-electric transition-colors">Maintenance</a></li>
              <li><a href="#" className="hover:text-brand-electric transition-colors">Emergency Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-electric shrink-0" />
                <span>01756144670</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-electric shrink-0" />
                <span>info@coolfridge.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-electric shrink-0" />
                <span>Mohammadpur, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} CoolFridge Repair Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
