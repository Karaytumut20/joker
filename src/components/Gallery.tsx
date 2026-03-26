export default function Gallery() {
  const images = [
    {
      src: "/images/fleet-1.jpg",
      alt: "Medium-Duty Transport Vehicle 1"
    },
    {
      src: "/images/fleet-2.jpg",
      alt: "Medium-Duty Transport Vehicle 2"
    },
    {
      src: "/images/fleet-3.jpg",
      alt: "Medium-Duty Transport Vehicle 3"
    },
    {
      src: "/images/fleet-4.jpg",
      alt: "Medium-Duty Transport Vehicle 4"
    },
    {
      src: "/images/fleet-5.jpg",
      alt: "Medium-Duty Transport Vehicle 5"
    },
    {
      src: "/images/fleet-6.jpg",
      alt: "Medium-Duty Transport Vehicle 6"
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-neutral-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-wider uppercase text-sm mb-4">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              Our Vehicles
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Images of Our Transport Fleet
            </h2>
          </div>
          <p className="text-neutral-400 max-w-sm">
            Take a look at our state-of-the-art, 3-car medium-duty auto transport carriers, built to safely and efficiently transport your vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
