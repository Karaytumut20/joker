import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-950">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Footer />
    </main>
  );
}
