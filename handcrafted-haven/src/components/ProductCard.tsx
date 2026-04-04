import Link from "next/link";
import { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-content">
        <p className="product-category">{product.category}</p>
        <h2>{product.name}</h2>
        <p className="product-price">${product.price}</p>

        <Link href={`/product/${product.id}`} className="details-button">
          View Details
        </Link>
      </div>
    </article>
  );
}