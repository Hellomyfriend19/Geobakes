import React from "react";
import { motion } from "motion/react";
import { Sparkles, Heart, Award } from "lucide-react";

export default function About() {
  return (
    <section
      id="our-story"
      className="py-24 bg-espresso text-cream overflow-hidden relative"
    >
      {/* Absolute Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-cream-light/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-espresso-dark/30 to-transparent pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-caramel/10 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Warm Kitchen Photo (Animates in from left) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative group"
          >
            {/* Visual Frame */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-cream/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                alt="Cozy artisan bakery kitchen rolling out fresh cookie dough"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Decorative Offset Golden Frame behind image */}
            <div className="absolute -bottom-4 -right-4 inset-0 border border-caramel/40 rounded-[2.5rem] pointer-events-none -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
            
            {/* Overlay Stamp Badge */}
            <div className="absolute -bottom-6 -left-6 bg-caramel border-4 border-espresso text-cream p-5 rounded-full shadow-lg -rotate-12 z-20 max-w-[130px] text-center select-none">
              <span className="shadows-into-light-regular text-2xl font-bold block leading-none">Established</span>
              <span className="shadows-into-light-regular text-4xl font-black block leading-none mt-1">2021</span>
            </div>
          </motion.div>

          {/* Right Column: Text & Stats (Animates in from right) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center items-start text-left space-y-8"
          >
            {/* Small Label */}
            <div className="space-y-2">
              <span className="shadows-into-light-regular text-2xl font-bold tracking-widest text-blush uppercase block">
                The GeoBakes Heritage
              </span>
              <h2 className="text-4xl sm:text-5xl font-semibold text-cream leading-tight">
                Crafting Geometric Perfection, One Cookie at a Time
              </h2>
            </div>

            <div className="w-16 h-1 bg-caramel rounded-full" />

            {/* Narrative text */}
            <div className="space-y-4 text-cream-dark leading-relaxed text-base sm:text-lg">
              <p>
                GeoBakes started in a tiny home oven with a simple, eccentric dream: to combine the satisfying symmetry of geometric shapes with the rich, indulgent goodness of traditional, hand-kneaded cookies.
              </p>
              <p>
                To us, baking is an exact science but a soulful art. We obsess over the weight of each cookie, the ratio of semi-sweet dark chocolate chips to organic milk chocolate, and the precise baking temperature required to lock in a perfectly gooey, warm center while maintaining crisp, caramelized outer edges.
              </p>
            </div>

            {/* 3 Stats Grid */}
            <div className="grid grid-cols-3 gap-4 w-full pt-6 border-t border-cream/10">
              
              {/* Stat 1 */}
              <div className="text-left space-y-1">
                <span className="shadows-into-light-regular text-4xl sm:text-5xl font-bold text-caramel block">
                  12+
                </span>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-cream-dark opacity-85 block">
                  Signature Flavors
                </span>
              </div>

              {/* Stat 2 */}
              <div className="text-left space-y-1">
                <span className="shadows-into-light-regular text-4xl sm:text-5xl font-bold text-blush block">
                  100%
                </span>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-cream-dark opacity-85 block">
                  Hand-Rolled Dough
                </span>
              </div>

              {/* Stat 3 */}
              <div className="text-left space-y-1">
                <span className="shadows-into-light-regular text-4xl sm:text-5xl font-bold text-caramel block">
                  50k+
                </span>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-cream-dark opacity-85 block">
                  Smiles Delivered
                </span>
              </div>

            </div>

            {/* Quick Baker Quote */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-espresso-light border border-cream/5 w-full mt-2">
              <Heart className="w-6 h-6 text-blush shrink-0 mt-1" />
              <p className="text-sm italic text-cream-dark font-normal">
                "We don't cut corners because there are no corners to cut on a perfect circle. We bake with our hands and heart." <span className="text-caramel font-semibold block not-italic mt-1 text-xs font-mono">— Chef Tatuli & Chef Tamar, Founders & Head Bakers</span>
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
