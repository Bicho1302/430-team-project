"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal,
  } = useCart();

  return (
    <section className="container page-section">
      <div className="section-heading">
        <p className="eyebrow">Your Shopping Cart</p>
        <h1>Cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link href="/shop" className="shop-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <article key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>${item.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <p className="item-subtotal">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <p>Total: ${cartTotal.toFixed(2)}</p>

            <button className="shop-button checkout-button">
              Checkout
            </button>

            <button className="clear-cart-button" onClick={clearCart}>
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}