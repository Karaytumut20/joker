import { Truck, Map, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Truck size={32} />,
      title: "Emergency Towing",
      description: "24/7 rapid response towing services for accidents, breakdowns, and emergencies. We'll get you off the road safely.",
      delay: "0",
    },
    {
      icon: <Map size={32} />,
      title: "Long-Distance Transport",
      description: "Secure and fully insured vehicle transportation across the state or across the country. Your car is in safe hands.",
      delay: "100",
    },
    {
      icon: <Wrench size={32} />,
      title: "Roadside Assistance",
      description: "Jump-starts, tire changes, lockout services, and fuel delivery. We bring the garage to you when you need it most.",
      delay: "200",
    }
  ];

  return (
    <section id="services" className="py-24 bg-neutral-900 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-amber-500 font-bold tracking-wider uppercase text-sm mb-4">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            What We Do
            <span className="w-8 h-[2px] bg-amber-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Our Professional Services
          </h2>
          <p className="text-neutral-400 text-lg">
            We offer comprehensive towing and roadside assistance solutions designed to get you back on track efficiently and safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-neutral-950 rounded-2xl p-8 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(245,158,11,0.2)] hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 group-hover:bg-amber-500 group-hover:text-neutral-950 group-hover:border-amber-400 text-amber-500 flex items-center justify-center mb-6 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
