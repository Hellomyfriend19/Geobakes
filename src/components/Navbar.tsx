import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { OrderItem } from "../types";

interface NavbarProps {
  cart: OrderItem[];
  onOpenCart: () => void;
}

export default function Navbar({ cart, onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Calculate total items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Our Story", href: "#our-story" },
    { label: "Why Us", href: "#why-us" },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/90 backdrop-blur-md shadow-md border-b border-caramel/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <img
              src="https://github.com/Hellomyfriend19/Nice/blob/main/geobakes.png?raw=true"
              alt="GeoBakes Logo"
              referrerPolicy="no-referrer"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Typographic fallback if image fails or is blocked
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <span className="shadows-into-light-regular text-2xl sm:text-3xl font-semibold tracking-wide text-espresso hover:text-caramel transition-colors">
              GeoBakes
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="shadows-into-light-regular text-xl font-medium text-espresso hover:text-caramel transition-colors tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-caramel after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Cart Icon Button */}
            <button
              id="cart-toggle-btn"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-espresso hover:text-caramel hover:bg-caramel/10 transition-colors focus:outline-none focus:ring-2 focus:ring-caramel/30"
              aria-label="Open Order Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-caramel text-cream text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Order Now CTA Button */}
            <button
              id="order-now-cta"
              onClick={onOpenCart}
              className="shadows-into-light-regular text-xl px-6 py-2.5 bg-caramel hover:bg-caramel-hover text-cream rounded-full font-bold tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              Order Now
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full text-espresso"
              aria-label="Open Order Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-caramel text-cream text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-espresso hover:text-caramel"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[68px] z-30 bg-cream-light border-b border-caramel/10 shadow-lg md:hidden py-6 px-4"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="shadows-into-light-regular text-2xl py-2 text-espresso hover:text-caramel transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-caramel/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="shadows-into-light-regular text-2xl py-3 w-full bg-caramel text-cream rounded-full font-bold tracking-wider"
                >
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
