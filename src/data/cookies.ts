import { CookieItem, PerkItem } from "../types";

export const COOKIE_MENU: CookieItem[] = [
  {
    id: "triple-chocolate",
    name: "Triple Chocolate Chip Cookie",
    description: "An espresso-infused dark cocoa dough packed with rich Belgian white, milk, and semi-sweet dark chocolate chunks.",
    price: 4.75,
    image: "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=800&q=80",
    badge: "Indulgent Dark"
  },
  {
    id: "classic-chocolate",
    name: "Chocolate Chip Cookie",
    description: "Our signature golden-baked cookie: crispy golden-brown edges with a warm, gooey, chocolate-puddled center.",
    price: 4.25,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller"
  },
  {
    id: "pumpkin-chocolate",
    name: "Pumpkin Chocolate Chip Cookie",
    description: "Real organic pumpkin purée blended with aromatic warm autumn spices and studded with premium milk chocolate chips.",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80",
    badge: "Seasonal Special"
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll Cookie",
    description: "A soft brown sugar swirl cookie infused with real Ceylon cinnamon and finished with an elegant vanilla cream drizzle.",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80",
    badge: "Baker's Favorite"
  }
];

export const PERKS: PerkItem[] = [
  {
    id: "real-ingredients",
    title: "Real Ingredients",
    description: "We use organic flour, grass-fed Irish butter, and single-origin Belgian chocolate. No artificial preservatives, ever.",
    iconName: "Leaf"
  },
  {
    id: "baked-fresh",
    title: "Baked Fresh Daily",
    description: "Our ovens never rest. Every single cookie is hand-rolled and baked fresh in small batches every single morning.",
    iconName: "Flame"
  },
  {
    id: "safe-delivery",
    title: "Safe & Fresh Delivery",
    description: "Specially packaged in our insulated, aroma-locking signature boxes to ensure they arrive warm and completely intact.",
    iconName: "Truck"
  },
  {
    id: "personal-touch",
    title: "A Personal Touch",
    description: "Each box is packaged by hand with a handwritten gratitude note and a sprinkle of gourmet sea salt flakes.",
    iconName: "Sparkles"
  }
];
