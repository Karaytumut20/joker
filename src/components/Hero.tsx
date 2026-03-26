import { ArrowRight, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-32 sm:py-0">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Tow truck loading car"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-neutral-950/80 bg-gradient-to-t from-neutral-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/50 border border-neutral-800 text-amber-500 font-medium text-sm mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          24/7 Emergency Towing & Roadside Assistance
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 leading-[1.1]">
          Fast, Reliable, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">& Professional</span><br />
          Vehicle Towing.
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-300 mb-10 text-balance leading-relaxed">
          Joker Vehicle Towing provides top-tier car transport and roadside assistance 24/7. Your vehicle's safety is our ultimate priority.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-4">
          <a
            href="tel:+15551234567"
            className="w-full sm:w-auto px-8 py-5 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-lg font-black rounded-full transition-all flex items-center justify-center gap-3 transform hover:scale-105 shadow-[0_0_25px_rgba(245,158,11,0.3)]"
          >
            <PhoneCall size={22} className="shrink-0" />
            <span>Get a Free Quote</span>
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-5 bg-neutral-800 hover:bg-neutral-700 text-white text-lg font-bold rounded-full transition-all flex items-center justify-center gap-3 group border border-neutral-700"
          >
            <span>Our Services</span>
            <ArrowRight size={22} className="shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
    </section>
  );
}
