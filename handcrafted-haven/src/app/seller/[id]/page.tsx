import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { sellers } from "@/data/sellers";
import { products } from "@/data/products";

type SellerProfilePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SellerProfilePage({
  params,
}: SellerProfilePageProps) {
  const { id } = await params;
  const sellerId = Number(id);

  const seller = sellers.find((item) => item.id === sellerId);

  if (!seller) {
    notFound();
  }

  const sellerProducts = products.filter(
    (product) => product.sellerId === seller.id
  );

  return (
    <section className="container page-section">
      <Link href="/shop" className="back-link">
        ← Back to Shop
      </Link>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(220px, 320px) 1fr",
          gap: "2rem",
          alignItems: "start",
          marginBottom: "2.5rem",
        }}
      >
        <img
          src={seller.image}
          alt={seller.name}
          style={{
            width: "100%",
            maxWidth: "320px",
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />

        <div>
          <p
            style={{
              marginBottom: "0.5rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Seller Profile
          </p>

          <h1 style={{ marginBottom: "1rem" }}>{seller.name}</h1>

          <p style={{ marginBottom: "0.75rem" }}>
            <strong>Specialty:</strong> {seller.specialty}
          </p>

          <p style={{ marginBottom: "0.75rem" }}>
            <strong>Location:</strong> {seller.location}
          </p>

          <p style={{ lineHeight: 1.7, marginBottom: "1rem" }}>
            {seller.bio}
          </p>

          <Link href="/seller/add-product" className="feature-button">
            Add New Product
          </Link>
        </div>
      </div>

      <div className="section-heading" style={{ textAlign: "left" }}>
        <p className="eyebrow">Curated Collection</p>
        <h2>Products by {seller.name}</h2>
        <p>
          Browse handcrafted items created by this artisan and discover their
          unique style.
        </p>
      </div>

      <div className="product-grid">
        {sellerProducts.length === 0 ? (
          <p>This seller has not added any products yet.</p>
        ) : (
          sellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}