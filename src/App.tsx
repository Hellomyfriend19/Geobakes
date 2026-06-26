import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import OrderDrawer from "./components/OrderDrawer";
import { CookieItem, OrderItem } from "./types";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import ImageTrail from "./components/ImageTrail";

export default function App() {
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  // Add an item to the cart
  const handleAddToCart = (cookie: CookieItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.cookie.id === cookie.id);
      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        return [...prevCart, { cookie, quantity: 1 }];
      }
    });
  };

  // Increment item quantity in cart
  const handleIncrement = (cookie: CookieItem) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.cookie.id === cookie.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement item quantity in cart
  const handleDecrement = (cookie: CookieItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.cookie.id === cookie.id);
      if (existing && existing.quantity <= 1) {
        return prevCart.filter((item) => item.cookie.id !== cookie.id);
      }
      return prevCart.map((item) =>
        item.cookie.id === cookie.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // Remove item completely from cart
  const handleRemove = (cookie: CookieItem) => {
    setCart((prevCart) => prevCart.filter((item) => item.cookie.id !== cookie.id));
  };

  // Clear cart completely
  const handleClear = () => {
    setCart([]);
  };

  return (
    <ImageTrail className="relative min-h-screen bg-cream text-espresso selection:bg-blush-light selection:text-espresso-dark font-serif antialiased">
      {/* 1. Header & Navigation */}
      <Navbar cart={cart} onOpenCart={() => setIsCartOpen(true)} />

      {/* Main Page Sections */}
      <main>
        {/* 2. Cinematic Hero Section */}
        <Hero onOrderClick={() => setIsCartOpen(true)} />

        {/* 3. Handcrafted Cookie Menu (Stagger-fade-up cards) */}
        <Menu onAddToCart={handleAddToCart} />

        {/* 4. Heritage Story / About Section */}
        <About />

        {/* 5. Why GeoBakes Perks Section */}
        <WhyUs />

        {/* 6. Gorgeous Caramel CTA Banner */}
        <CTABanner onOrderClick={() => setIsCartOpen(true)} />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* 8. Slide-out Artisan Order Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        onClear={handleClear}
      />
    </ImageTrail>
  );
}

