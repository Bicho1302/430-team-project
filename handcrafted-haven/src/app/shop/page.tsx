import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <section className="container page-section">
      <div className="section-heading">
        <p className="eyebrow">Our Collection</p>
        <h1>Shop Handcrafted Products</h1>
        <p>
          Browse a curated selection of handmade goods designed to bring beauty,
          warmth, and personality into everyday life.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}