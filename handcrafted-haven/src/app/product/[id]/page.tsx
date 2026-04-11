import { products } from "@/data/products";
import { sellers } from "@/data/sellers";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import Reviews from "@/components/Reviews";

type ProductDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const productId = Number(id);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    notFound();
  }

  const seller = sellers.find((item) => item.id === product.sellerId);

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

        {seller && (
  <div className="feature-card seller-box">
    <p style={{ fontWeight: 600 }}>Sold by</p>
    <p>{seller.name}</p>
    <p className="seller-meta">
      {seller.specialty} · {seller.location}
    </p>
    <Link
      href={`/seller/${seller.id}`}
      className="feature-button secondary"
    >
      View Seller Profile
    </Link>
  </div>
)}
         

          <AddToCartButton
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            }}
          />
        </div>
      </div>

      <Reviews productId={id} />
    </section>
  );
}