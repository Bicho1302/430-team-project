import Link from "next/link";
import styles from "@/styles/landing.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Handcrafted Haven</div>
        <nav aria-label="Main navigation">
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/sellers">Sellers</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}