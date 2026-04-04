import { products } from "@/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductDetailPageProps = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({
  params
}: ProductDetailPageProps) {
  const productId = Number(params.id);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <section className="container page-section">
      <Link href="/shop" className="back-link">
        ← Back to Shop
      </Link>

      <div className="product-detail">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />

        <div className="product-detail-content">
          <p className="product-category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-price large-price">${product.price}</p>
          <p className="product-description">{product.description}</p>

          <button className="shop-button">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}