import styles from "@/styles/landing.module.css";

const categories = [
  {
    title: "Home Decor",
    text: "Handmade pieces that add warmth and personality to your space.",
  },
  {
    title: "Jewelry",
    text: "Unique accessories crafted with care and artistic detail.",
  },
  {
    title: "Art & Prints",
    text: "Creative works from independent artists and makers.",
  },
];

export default function FeaturedCategories() {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <h2>Featured Categories</h2>
        <div className={styles.grid}>
          {categories.map((category) => (
            <article key={category.title} className={styles.card}>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}