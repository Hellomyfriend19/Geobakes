import React from "react";
import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { PERKS } from "../data/cookies";

// Dynamically fetch lucide icons based on string names
const IconRenderer = ({ name, className }: { name: string; className: string }) => {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return <LucideIcons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
};

export default function WhyUs() {
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="why-us"
      className="py-24 bg-cream relative overflow-hidden"
    >
      {/* Decorative background vectors */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blush-light/30 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-caramel/10 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <span className="shadows-into-light-regular text-2xl font-bold tracking-wider text-caramel uppercase">
            The GeoBakes Promise
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-espresso leading-tight">
            Why Foodies Choose GeoBakes
          </h2>
          <div className="w-16 h-1 bg-caramel mx-auto rounded-full" />
          <p className="text-espresso-light leading-relaxed">
            We hold ourselves to mathematical perfection and raw baking integrity. Here is what goes into every single cookie we deliver.
          </p>
        </div>

        {/* Perks Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PERKS.map((perk) => (
            <motion.div
              key={perk.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(44, 27, 17, 0.08), 0 10px 10px -5px rgba(44, 27, 17, 0.04)"
              }}
              className="flex flex-col items-center text-center p-8 bg-cream-light rounded-3xl border border-caramel/10 hover:border-caramel/30 transition-all duration-300 relative group"
            >
              {/* Icon Sphere Wrapper */}
              <div className="w-16 h-16 rounded-2xl bg-blush-light text-caramel hover:text-cream hover:bg-caramel flex items-center justify-center mb-6 shadow-inner transition-colors duration-300">
                <IconRenderer name={perk.iconName} className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-espresso mb-3 group-hover:text-caramel transition-colors">
                {perk.title}
              </h3>
              <p className="text-sm text-espresso-light leading-relaxed font-normal">
                {perk.description}
              </p>

              {/* Decorative Subtle Line */}
              <div className="absolute bottom-0 inset-x-12 h-1 bg-gradient-to-r from-transparent via-caramel/25 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Quality Seal */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-3xl bg-cream-dark/30 border border-caramel/10 max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-caramel font-bold px-2.5 py-1 bg-cream-light rounded-md">
              Our Seal
            </span>
            <p className="text-xs sm:text-sm text-espresso-light font-normal text-left sm:text-center">
              "We guarantee 100% satisfaction. If your cookies aren't warm and perfectly gooey inside, we will replace your batch immediately, no questions asked."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
