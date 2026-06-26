import React, { useState } from "react";
import { motion } from "motion/react";
import { COOKIE_MENU } from "../data/cookies";
import { CookieItem } from "../types";
import { Check, Plus, ShoppingBag } from "lucide-react";

interface MenuProps {
  onAddToCart: (cookie: CookieItem) => void;
}

export default function Menu({ onAddToCart }: MenuProps) {
  // Store the "Added!" status for each cookie, keyed by cookie ID
  const [addedStatus, setAddedStatus] = useState<Record<string, boolean>>({});

  const handleAddClick = (cookie: CookieItem) => {
    // If already in confirming state, ignore duplicate clicks
    if (addedStatus[cookie.id]) return;

    // Trigger cart addition parent state
    onAddToCart(cookie);

    // Show confirmation status
    setAddedStatus((prev) => ({ ...prev, [cookie.id]: true }));

    // Reset status after 1.8 seconds
    setTimeout(() => {
      setAddedStatus((prev) => ({ ...prev, [cookie.id]: false }));
    }, 1800);
  };

  // Framer Motion Stagger Containers
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
      id="menu"
      className="py-24 bg-cream-light border-y border-caramel/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <span className="shadows-into-light-regular text-2xl font-bold tracking-wider text-caramel uppercase">
            Fresh From Our Ovens
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-espresso leading-tight">
            Explore Our Handcrafted Cookie Menu
          </h2>
          <div className="w-16 h-1 bg-caramel mx-auto rounded-full" />
          <p className="text-espresso-light leading-relaxed">
            Every GeoBake cookie is meticulously hand-rolled, packed with Belgian chocolate chunks, and baked fresh to order. Select your favorites below.
          </p>
        </div>

        {/* Card Grid with Stagger Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {COOKIE_MENU.map((cookie) => {
            const isConfirmed = addedStatus[cookie.id];
            
            return (
              <motion.div
                key={cookie.id}
                variants={cardVariants}
                className="group relative flex flex-col justify-between bg-cream rounded-3xl overflow-hidden border border-caramel/10 hover:border-caramel/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-espresso/5">
                  <img
                    src={cookie.image}
                    alt={cookie.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Glassmorphism Badge */}
                  {cookie.badge && (
                    <div className="absolute top-4 left-4 bg-espresso/80 backdrop-blur-sm border border-cream/20 text-cream px-3 py-1 rounded-full text-xs font-mono tracking-wider">
                      {cookie.badge}
                    </div>
                  )}

                  {/* Price Tag Badge */}
                  <div className="absolute bottom-4 right-4 bg-caramel text-cream shadows-into-light-regular text-2xl font-bold px-4 py-1.5 rounded-2xl shadow-md border border-cream/10">
                    ${cookie.price.toFixed(2)}
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-espresso group-hover:text-caramel transition-colors">
                      {cookie.name}
                    </h3>
                    <p className="text-sm text-espresso-light leading-relaxed min-h-[60px]">
                      {cookie.description}
                    </p>
                  </div>

                  {/* Add to Order Button */}
                  <button
                    onClick={() => handleAddClick(cookie)}
                    className={`shadows-into-light-regular text-2xl w-full py-3.5 px-4 rounded-2xl font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                      isConfirmed
                        ? "bg-emerald-600 text-cream shadow-sm scale-98 hover:bg-emerald-600"
                        : "bg-espresso hover:bg-caramel text-cream active:scale-95 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {isConfirmed ? (
                      <>
                        <Check className="w-5 h-5 animate-bounce" />
                        <span>Added to Order!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-5 h-5" />
                        <span>Add to Order</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating Helper Tip */}
        <div className="mt-12 text-center text-xs text-espresso-light font-mono opacity-80 flex items-center justify-center gap-1.5">
          <ShoppingBag className="w-4 h-4 text-caramel" />
          <span>No checkout account required. Build your box and check out instantly!</span>
        </div>

      </div>
    </section>
  );
}
