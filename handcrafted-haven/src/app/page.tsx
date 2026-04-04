import styles from "@/styles/landing.module.css";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      
      <main>
        <Hero />
        <section className={styles.intro}>
          <div className={styles.container}>
            <h2>Discover handmade goods with heart</h2>
            <p>
              Handcrafted Haven connects talented artisans with shoppers who
              value originality, craftsmanship, and sustainable choices.
            </p>
          </div>
        </section>

        <FeaturedCategories />

        <section className={styles.community}>
          <div className={styles.container}>
            <h2>Why Handcrafted Haven?</h2>
            <div className={styles.grid}>
              <article className={styles.card}>
                <h3>Support Artisans</h3>
                <p>
                  Help creators share their stories and grow their small
                  businesses.
                </p>
              </article>
              <article className={styles.card}>
                <h3>Unique Products</h3>
                <p>
                  Find handcrafted items that stand out from mass-produced
                  alternatives.
                </p>
              </article>
              <article className={styles.card}>
                <h3>Community Driven</h3>
                <p>
                  Browse, review, and celebrate the creativity of makers from
                  many backgrounds.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}