"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-neutral-950/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tighter text-white">
              JOKER<span className="text-amber-500">HAUL</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.name === "Contact") {
                      e.preventDefault();
                      window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-sm font-medium text-neutral-300 hover:text-amber-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a
              href="tel:+15551234567"
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-300 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-neutral-900 border-t border-neutral-800 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                
                setTimeout(() => {
                  if (link.name === "Contact") {
                    window.scrollTo({
                      top: document.documentElement.scrollHeight,
                      behavior: "smooth",
                    });
                  } else {
                    const targetId = link.href.replace('#', '');
                    const element = document.getElementById(targetId);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }, 300); // wait for mobile menu collapse animation
              }}
              className="text-lg font-medium text-neutral-300 hover:text-amber-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+15551234567"
            className="w-full mt-4 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
