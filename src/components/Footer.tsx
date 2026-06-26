import React from "react";
import { Instagram, Facebook, Twitter, Heart, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso-dark text-cream pt-16 pb-8 border-t border-cream/5 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-radial-gradient from-caramel/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-cream/10">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <a href="#hero" className="flex items-center gap-2 group">
              <img
                src="https://github.com/Hellomyfriend19/Nice/blob/main/geobakes.png?raw=true"
                alt="GeoBakes Logo"
                referrerPolicy="no-referrer"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <span className="shadows-into-light-regular text-2xl font-bold tracking-wide text-cream">
                GeoBakes
              </span>
            </a>
            <p className="text-sm text-cream-dark leading-relaxed font-normal">
              Merging geometric perfection with artisanal passion to bake cookies that feed both your eyes and soul.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-espresso-light hover:bg-caramel text-cream transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-espresso-light hover:bg-caramel text-cream transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-espresso-light hover:bg-caramel text-cream transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="shadows-into-light-regular text-xl font-bold text-caramel tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-dark font-normal">
              <li>
                <a href="#hero" className="hover:text-caramel transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-caramel transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#our-story" className="hover:text-caramel transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-caramel transition-colors">Why GeoBakes</a>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div className="space-y-4">
            <h4 className="shadows-into-light-regular text-xl font-bold text-caramel tracking-wider">
              Bake Times
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-dark font-normal">
              <li className="flex justify-between">
                <span>Mon — Fri</span>
                <span className="font-mono text-xs">7:00 AM — 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-mono text-xs">8:00 AM — 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-mono text-xs">Closed for Kneading</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="shadows-into-light-regular text-xl font-bold text-caramel tracking-wider">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm text-cream-dark font-normal">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-caramel shrink-0 mt-0.5" />
                <span>314 Fibonacci Circle, Golden Ratio, CA 90210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-caramel shrink-0" />
                <span>+1 (555) 314-1592</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-caramel shrink-0" />
                <span>hello@geobakes.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-dark font-mono opacity-80">
          <p>© {currentYear} GeoBakes Inc. All rights baked fresh.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-blush fill-current" /> for geometric foodies.
          </p>
        </div>

      </div>
    </footer>
  );
}
