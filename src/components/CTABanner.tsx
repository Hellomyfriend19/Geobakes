import React from "react";
import { motion } from "motion/react";
import { ShoppingBag, Star, HelpCircle } from "lucide-react";

interface CTABannerProps {
  onOrderClick: () => void;
}

export default function CTABanner({ onOrderClick }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-r from-caramel via-[#C8945D] to-[#B07E4A] text-cream">
      
      {/* Visual Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cream/10 rounded-full filter blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-espresso-dark/20 rounded-full filter blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      {/* Grid Pattern with very low opacity */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "radial-gradient(#FFF 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Floating Stars Group */}
        <div className="flex items-center justify-center gap-1.5 text-blush-light animate-pulse">
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-6 h-6 fill-current scale-110" />
          <Star className="w-5 h-5 fill-current" />
        </div>

        {/* Catchy Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream leading-tight">
          Ready to Taste <span className="shadows-into-light-regular text-espresso-dark text-5xl sm:text-6xl lg:text-7xl block sm:inline">Mathematical</span> Perfection?
        </h2>

        {/* Short Line separator */}
        <div className="w-24 h-1.5 bg-espresso mx-auto rounded-full shadow-inner" />

        {/* Catchy Description */}
        <p className="text-lg sm:text-xl text-cream-light font-normal max-w-2xl mx-auto leading-relaxed opacity-90">
          Order your signature GeoBakes box today and have freshly baked, warm cookies delivered right to your doorstep. Perfect for sharing, gifting, or treating yourself.
        </p>

        {/* Order CTA Button */}
        <div className="pt-4 flex flex-col items-center justify-center space-y-3">
          <button
            onClick={onOrderClick}
            className="shadows-into-light-regular text-2xl flex items-center justify-center gap-3 px-10 py-4 bg-espresso hover:bg-espresso-dark text-cream rounded-full font-bold tracking-wider shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            <ShoppingBag className="w-6 h-6 text-caramel" />
            Build My Cookie Box
          </button>
          
          <span className="text-xs font-mono tracking-widest text-espresso-dark opacity-80 uppercase block">
            We deliver nationwide • baked and shipped same-day
          </span>
        </div>

      </div>
    </section>
  );
}
