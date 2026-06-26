import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Hand } from "lucide-react";
import ModelViewer from "./ModelViewer";
import FlipFadeText from "./FlipFadeText";

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  // Subtle crumb/dot scatter pattern using CSS radial gradients
  const crumbBgStyle = {
    backgroundImage: `
      radial-gradient(#C68B59 1px, transparent 1px)
    `,
    backgroundSize: "20px 20px",
    opacity: 0.1,
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cream overflow-hidden"
    >
      {/* Subtle Crumb Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={crumbBgStyle} />

      {/* Decorative Warm Spotlights */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blush/20 filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-caramel/15 filter blur-3xl pointer-events-none" />

      <div className="w-full min-h-screen pt-28 pb-16 flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline and Description (Slides in from the left) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
            >
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blush-light text-espresso-light border border-blush/30 shadow-sm">
                <Sparkles className="w-4 h-4 text-caramel animate-pulse" />
                <span className="shadows-into-light-regular text-lg font-bold tracking-wider uppercase text-caramel">
                  Handcrafted With Love
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="leading-none flex flex-col gap-0 select-text">
                <FlipFadeText 
                  text="Delicious &" 
                  textClassName="shadows-into-light-regular text-espresso text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-normal py-1" 
                />
                <FlipFadeText 
                  text="Perfect" 
                  textClassName="shadows-into-light-regular text-caramel text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-normal py-1" 
                  staggerDelay={0.06}
                />
              </h1>

              {/* Tagline */}
              <p className="text-lg sm:text-xl text-espresso-light font-normal max-w-xl leading-relaxed">
                Experience artisan cookies baked with geometric perfection and wholesome warmth. Crunchy on the outside, insanely gooey on the inside. Crafted using premium single-origin Belgian chocolate and grass-fed cream.
              </p>

              {/* Call to Actions */}
              <div className="relative z-30">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                  <button
                    onClick={onOrderClick}
                    className="shadows-into-light-regular text-2xl flex items-center justify-center gap-2 px-8 py-3.5 bg-caramel hover:bg-caramel-hover text-cream rounded-full font-bold tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Order Fresh Box
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href="#menu"
                    className="shadows-into-light-regular text-2xl flex items-center justify-center px-8 py-3.5 border-2 border-espresso text-espresso hover:bg-espresso hover:text-cream rounded-full font-bold tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Explore Menu
                  </a>
                </div>
              </div>

              {/* Micro-Perks Hook */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-espresso-light opacity-80 pt-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-caramel" />
                  <span>Baked Fresh Every Morning</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-caramel" />
                  <span>No Artificial Additives</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-caramel" />
                  <span>Ecofriendly Box Packaging</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: 3D Model Viewer directly integrated in the hero (Slides in from the right) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-5 flex justify-center items-center w-full relative z-20 select-none"
            >
              {/* Seamless Borderless Container directly in the Hero Section */}
              <div className="relative w-full max-w-[1200px] aspect-square flex flex-col justify-center items-center">
                
                {/* Backglow element for subtle depth behind the model */}
                <div className="absolute inset-0 bg-radial-gradient from-blush-light/35 to-transparent pointer-events-none rounded-full blur-3xl scale-125" />

                {/* 3D Model-Viewer Container */}
                <div className="w-full h-full relative z-10 flex items-center justify-center">
                  <ModelViewer
                    url="/chocolate_cookie_3d_scan.glb"
                    width="100%"
                    height="100%"
                    autoRotate={true}
                    autoRotateSpeed={0.3}
                    fadeIn={true}
                    environmentPreset="sunset"
                    enableMouseParallax={true}
                    enableHoverRotation={true}
                    enableManualRotation={true}
                    enableManualZoom={false}
                    ambientIntensity={0.8}
                    keyLightIntensity={2.5}
                    fillLightIntensity={1.5}
                    rimLightIntensity={2.0}
                    defaultRotationX={-20}
                    defaultRotationY={10}
                    defaultZoom={1.2}
                    modelScale={2.4}
                  />
                </div>

                {/* Finger rotating indicator overlay */}
                <div className="absolute bottom-4 right-4 pointer-events-none z-20 flex items-center gap-2 bg-cream-light/85 backdrop-blur-sm border border-caramel/15 px-3 py-1.5 rounded-full shadow-sm">
                  <Hand className="w-5 h-5 text-caramel animate-swipe-gesture" />
                  <span className="shadows-into-light-regular text-espresso text-base font-bold tracking-wider">Drag to Rotate</span>
                </div>

              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
