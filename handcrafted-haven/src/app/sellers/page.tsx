import Link from "next/link";
import { sellers } from "@/data/sellers";

export default function SellersPage() {
  return (
    <section className="container page-section">
      <div className="section-heading">
        <p className="eyebrow">Our Artisans</p>
        <h1>Meet the Sellers</h1>
        <p>
          Discover the talented makers behind the handcrafted products in our
          marketplace.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {sellers.map((seller) => (
          <article key={seller.id} className="feature-card">
            <img
              src={seller.image}
              alt={seller.name}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "1rem",
              }}
            />

            <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
              {seller.specialty}
            </p>

            <h2 style={{ marginBottom: "0.5rem" }}>{seller.name}</h2>

            <p style={{ color: "#666", marginBottom: "0.75rem" }}>
              {seller.location}
            </p>

            <p style={{ marginBottom: "1rem", lineHeight: 1.6 }}>
              {seller.bio}
            </p>

            <Link href={`/seller/${seller.id}`} className="feature-button">
              View Profile
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}