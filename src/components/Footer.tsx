import { Phone, Mail, MapPin, Globe, MessageCircle, Share2, Rss } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 pt-20 pb-10 border-t border-neutral-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <span className="text-2xl font-black tracking-tighter text-white block mb-6">
              JOKER<span className="text-amber-500">HAUL</span>
            </span>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Your trusted partner for specialized vehicle transport, emergency towing, and 24/7 roadside assistance. Always fast, always professional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-neutral-950 transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-neutral-950 transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-neutral-950 transition-colors">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-neutral-950 transition-colors">
                <Rss size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-neutral-400 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#fleet" className="text-neutral-400 hover:text-amber-500 transition-colors">Our Fleet</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-neutral-400">Emergency Towing</li>
              <li className="text-neutral-400">Long-Distance Transport</li>
              <li className="text-neutral-400">Motorcycle Transport</li>
              <li className="text-neutral-400">Flatbed Towing</li>
              <li className="text-neutral-400">Roadside Assistance</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-500 shrink-0 mt-1" size={20} />
                <span className="text-neutral-400">123 Transport Way,<br />Automotive District,<br />NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-500 shrink-0" size={20} />
                <a href="tel:+15551234567" className="text-neutral-400 hover:text-amber-500 transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-500 shrink-0" size={20} />
                <a href="mailto:dispatch@jokerhaul.com" className="text-neutral-400 hover:text-amber-500 transition-colors">dispatch@jokerhaul.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            Joker Haul © 2024. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
