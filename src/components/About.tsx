import { ShieldCheck, Clock, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-950 relative overflow-hidden scroll-mt-20">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content side */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-wider uppercase text-sm mb-4">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              More than just a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">tow truck company.</span>
            </h2>
            <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
              At Joker Vehicle Towing, we are more than just a tow truck company. We are a team of dedicated professionals specializing in secure vehicle transport and rapid-response roadside assistance. 
            </p>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
              With years of experience on the road, we treat every vehicle as if it were our own. Whether you need a local tow, long-distance transport, or emergency recovery, we have the heavy-duty equipment and the expertise to get the job done right.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-6">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-500 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-0.5 sm:mb-1 text-sm sm:text-base leading-tight">24/7 Available</h3>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-tight">Always ready</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-500 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-0.5 sm:mb-1 text-sm sm:text-base leading-tight">Fully Insured</h3>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-tight">Total protection</p>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-500 shrink-0">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-0.5 sm:mb-1 text-sm sm:text-base leading-tight">Expert Team</h3>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-tight">Professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
              <Image
                src="/images/about-truck.jpg"
                alt="Truck on the road"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-6 rounded-2xl flex items-center gap-4">
                  <div className="text-5xl font-black text-amber-500">10+</div>
                  <div>
                    <div className="font-bold text-white text-lg">Years of Experience</div>
                    <div className="text-neutral-400 text-sm">Serving our community</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
