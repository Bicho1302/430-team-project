"use client";

import Link from "next/link";
import styles from "@/styles/landing.module.css";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Handcrafted Haven</div>

        <nav aria-label="Main navigation">
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/sellers">Sellers</Link></li>
            <li><Link href="/about">About</Link></li>

            {/* 🛒 CART LINK */}
            <li>
              <Link href="/cart">
                Cart ({cartCount})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}