import styles from "@/styles/landing.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Handmade • Local • Meaningful</p>
          <h1>Find handcrafted treasures made by real artisans</h1>
          <p>
            Explore one-of-a-kind products, discover talented sellers, and shop
            with purpose.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="/shop">
              Shop Now
            </a>
            <a className={styles.secondaryButton} href="/sellers">
              Meet the Makers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}