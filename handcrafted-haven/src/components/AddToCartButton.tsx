"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function AddToCartButton({ product }: any) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addToCart(product);
    setAdded(true);

    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button className="shop-button" onClick={handleClick}>
      {added ? "Added!" : "Add to Cart"}
    </button>
  );
}