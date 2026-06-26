import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, Plus, Minus, Trash2, CheckCircle, Cookie, Sparkles } from "lucide-react";
import { OrderItem, CookieItem } from "../types";

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: OrderItem[];
  onIncrement: (cookie: CookieItem) => void;
  onDecrement: (cookie: CookieItem) => void;
  onRemove: (cookie: CookieItem) => void;
  onClear: () => void;
}

export default function OrderDrawer({
  isOpen,
  onClose,
  cart,
  onIncrement,
  onDecrement,
  onRemove,
  onClear,
}: OrderDrawerProps) {
  // Checkout workflow state
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deliveryNotes: "",
  });

  const subtotal = cart.reduce((sum, item) => sum + item.cookie.price * item.quantity, 0);
  const shipping = subtotal > 15 ? 0 : 3.99;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Simulate baker pre-bake handshake
    setIsCheckingOut(false);
    setCheckoutComplete(true);
  };

  const handleReset = () => {
    onClear();
    setCheckoutComplete(false);
    setIsCheckingOut(false);
    setFormData({ name: "", email: "", phone: "", deliveryNotes: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso-dark z-50 cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl z-50 flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-caramel/10 flex items-center justify-between bg-cream-light">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-caramel" />
                <span className="shadows-into-light-regular text-2xl sm:text-3xl font-bold text-espresso">
                  Your Cookie Box
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-caramel/10 text-espresso transition-colors"
                aria-label="Close cart"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {checkoutComplete ? (
                /* Success screen */
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center animate-pulse">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="shadows-into-light-regular text-4xl font-bold text-espresso">
                      Ovens Preheating!
                    </h3>
                    <p className="text-sm font-semibold text-caramel font-mono uppercase tracking-widest">
                      Order Confirmed
                    </p>
                  </div>
                  <p className="text-sm text-espresso-light max-w-sm leading-relaxed">
                    Thank you, <span className="font-bold text-espresso">{formData.name}</span>! George and the baking team are already rolling your custom dough batches. We will email your delivery confirmation to <span className="font-bold text-espresso">{formData.email}</span> shortly.
                  </p>

                  <div className="p-4 bg-blush-light/30 border border-blush/30 rounded-2xl flex items-center gap-3 w-full text-left">
                    <Cookie className="w-8 h-8 text-caramel animate-bounce" />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-caramel font-bold">Chef George's Note</p>
                      <p className="text-xs text-espresso">"Your cookies are rolling! Get ready for warm sea salt and melted chocolate."</p>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="shadows-into-light-regular text-2xl px-8 py-3 w-full bg-caramel hover:bg-caramel-hover text-cream rounded-2xl font-bold tracking-wider transition-colors shadow-md"
                  >
                    Bake Another Box
                  </button>
                </div>
              ) : isCheckingOut ? (
                /* Checkout Form */
                <form onSubmit={handleSubmitOrder} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="shadows-into-light-regular text-3xl font-bold text-espresso">Artisan Handshake</h3>
                    <p className="text-xs text-espresso-light leading-relaxed">
                      Enter your details to confirm your artisan cookie shipment. No credit card required in our preview.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="space-y-1 text-left">
                      <label htmlFor="name-input" className="text-xs font-mono uppercase tracking-wider text-espresso-light font-bold">Your Name *</label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="George Smith"
                        className="w-full px-4 py-3 rounded-xl border border-caramel/20 focus:border-caramel focus:ring-1 focus:ring-caramel bg-cream-light text-espresso text-sm outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label htmlFor="email-input" className="text-xs font-mono uppercase tracking-wider text-espresso-light font-bold">Email Address *</label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-caramel/20 focus:border-caramel focus:ring-1 focus:ring-caramel bg-cream-light text-espresso text-sm outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label htmlFor="phone-input" className="text-xs font-mono uppercase tracking-wider text-espresso-light font-bold">Phone Number</label>
                      <input
                        id="phone-input"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-caramel/20 focus:border-caramel focus:ring-1 focus:ring-caramel bg-cream-light text-espresso text-sm outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label htmlFor="notes-input" className="text-xs font-mono uppercase tracking-wider text-espresso-light font-bold">Baker Delivery Notes</label>
                      <textarea
                        id="notes-input"
                        name="deliveryNotes"
                        rows={3}
                        value={formData.deliveryNotes}
                        onChange={handleInputChange}
                        placeholder="Leave at porch, extra sea salt, etc..."
                        className="w-full px-4 py-3 rounded-xl border border-caramel/20 focus:border-caramel focus:ring-1 focus:ring-caramel bg-cream-light text-espresso text-sm outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      className="shadows-into-light-regular text-2xl px-6 py-3 border border-espresso text-espresso hover:bg-espresso/5 rounded-2xl font-bold flex-1"
                    >
                      Back to Box
                    </button>
                    <button
                      type="submit"
                      className="shadows-into-light-regular text-2xl px-6 py-3 bg-caramel hover:bg-caramel-hover text-cream rounded-2xl font-bold flex-1"
                    >
                      Confirm Order
                    </button>
                  </div>
                </form>
              ) : cart.length === 0 ? (
                /* Empty Cart state */
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                  <div className="w-16 h-16 rounded-full bg-cream-dark/50 flex items-center justify-center text-caramel">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-bold text-espresso">Your Cookie Box is Empty</p>
                    <p className="text-xs text-espresso-light max-w-xs leading-relaxed">
                      George is waiting with the dough! Explore our menu and fill your box with handcrafted geometric perfection.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="shadows-into-light-regular text-2xl px-6 py-2.5 bg-espresso hover:bg-caramel text-cream rounded-xl font-bold"
                  >
                    Bake Some Cookies
                  </button>
                </div>
              ) : (
                /* Cart Item list */
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-caramel/5">
                    <span className="text-xs font-mono uppercase tracking-wider text-espresso-light">Dough selections ({cart.length})</span>
                    <button
                      onClick={onClear}
                      className="text-xs text-caramel hover:text-caramel-hover flex items-center gap-1 font-mono transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Empty Box</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.cookie.id}
                        className="flex items-center gap-4 p-3 bg-cream-light rounded-2xl border border-caramel/5"
                      >
                        <img
                          src={item.cookie.image}
                          alt={item.cookie.name}
                          className="w-16 h-16 rounded-xl object-cover shrink-0 bg-espresso/5"
                        />
                        <div className="flex-grow space-y-1">
                          <h4 className="text-sm font-bold text-espresso line-clamp-1">{item.cookie.name}</h4>
                          <p className="text-xs text-caramel font-bold">${item.cookie.price.toFixed(2)} each</p>
                          
                          {/* Controls */}
                          <div className="flex items-center gap-2.5 pt-1">
                            <button
                              onClick={() => onDecrement(item.cookie)}
                              className="w-6 h-6 rounded-full bg-cream-dark hover:bg-caramel hover:text-cream flex items-center justify-center text-espresso transition-all"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold font-mono text-espresso">{item.quantity}</span>
                            <button
                              onClick={() => onIncrement(item.cookie)}
                              className="w-6 h-6 rounded-full bg-cream-dark hover:bg-caramel hover:text-cream flex items-center justify-center text-espresso transition-all"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <span className="text-sm font-bold text-espresso">${(item.cookie.price * item.quantity).toFixed(2)}</span>
                          <button
                            onClick={() => onRemove(item.cookie)}
                            className="p-1 rounded-md text-espresso-light hover:text-red-500 hover:bg-red-50"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Pricing Summary */}
            {!checkoutComplete && cart.length > 0 && (
              <div className="p-6 bg-cream-light border-t border-caramel/10 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-espresso-light font-mono">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-espresso-light font-mono">
                    <span>Oven Insulated Shipping</span>
                    {shipping === 0 ? (
                      <span className="text-emerald-600 font-bold uppercase">Free (Orders &gt; $15)</span>
                    ) : (
                      <span>${shipping.toFixed(2)}</span>
                    )}
                  </div>
                  {shipping > 0 && (
                    <p className="text-[10px] text-caramel text-right font-mono italic">
                      Add ${(15.0 - subtotal).toFixed(2)} more for Free Shipping
                    </p>
                  )}
                  <div className="flex justify-between text-base font-bold text-espresso pt-2 border-t border-caramel/5">
                    <span>Estimated Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {!isCheckingOut ? (
                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="shadows-into-light-regular text-2xl w-full py-4 bg-caramel hover:bg-caramel-hover text-cream rounded-2xl font-bold tracking-wider shadow-md hover:shadow-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Complete Artisan Order</span>
                  </button>
                ) : null}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
