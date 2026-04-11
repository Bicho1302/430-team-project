"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) return;

    setSubmitted(true);
    clearCart();
  }

  if (cart.length === 0 && !submitted) {
    return (
      <section className="container page-section checkout-page">
        <h1>Your cart is empty</h1>
        <Link href="/shop" className="feature-button secondary">
          Go back to shop
        </Link>
      </section>
    );
  }

  if (submitted) {
    return (
      <section className="container page-section checkout-page">
        <div className="feature-card">
          <h1>Thank you for your order! 🎉</h1>
          <p>Your handcrafted items are on the way.</p>
          <Link href="/shop" className="feature-button">
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container page-section checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-layout">
        <form className="feature-card checkout-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="feature-input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="feature-input"
          />

          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            required
            className="feature-input"
          />

          <button type="submit" className="feature-button">
            Place Order
          </button>
        </form>

        <div className="feature-card">
          <h2>Order Summary</h2>

          <div className="checkout-summary-items">
            {cart.map((item) => (
              <div key={item.id} className="checkout-summary-item">
                <p>
                  {item.name} x {item.quantity}
                </p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="checkout-total">
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}