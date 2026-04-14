"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddProductPage() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.price.trim() ||
      !form.category.trim() ||
      !form.description.trim() ||
      !form.image.trim()
    ) {
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="container page-section">
        <div className="feature-card" style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p className="eyebrow">Seller Dashboard</p>
          <h1>Product Submitted</h1>
          <p style={{ marginBottom: "1rem" }}>
            Your product has been submitted successfully. In a future version,
            this form can connect to a database so new artisan products can be
            added dynamically.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              type="button"
              className="feature-button"
              onClick={() => {
                setForm({
                  name: "",
                  price: "",
                  category: "",
                  description: "",
                  image: "",
                });
                setSubmitted(false);
              }}
            >
              Add Another Product
            </button>

            <Link href="/shop" className="feature-button secondary">
              Back to Shop
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container page-section">
      <div className="section-heading">
        <p className="eyebrow">Seller Dashboard</p>
        <h1>Add a New Product</h1>
        <p>
          Sellers can use this form to submit handcrafted products with details,
          pricing, and images.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="feature-card"
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div>
          <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>
            Product Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="feature-input"
            placeholder="Enter product name"
            required
          />
        </div>

        <div>
          <label htmlFor="price" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            className="feature-input"
            placeholder="Enter product price"
            required
          />
        </div>

        <div>
          <label htmlFor="category" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>
            Category
          </label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="feature-select"
            required
          >
            <option value="">Select a category</option>
            <option value="Ceramics">Ceramics</option>
            <option value="Home Decor">Home Decor</option>
            <option value="Textiles">Textiles</option>
            <option value="Woodwork">Woodwork</option>
            <option value="Art">Art</option>
            <option value="Jewelry">Jewelry</option>
          </select>
        </div>

        <div>
          <label htmlFor="image" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>
            Image URL
          </label>
          <input
            id="image"
            name="image"
            type="text"
            value={form.image}
            onChange={handleChange}
            className="feature-input"
            placeholder="Paste product image URL"
            required
          />
        </div>

        <div>
          <label htmlFor="description" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>
            Product Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="feature-textarea"
            placeholder="Describe the handcrafted item"
            rows={5}
            required
          />
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button type="submit" className="feature-button">
            Submit Product
          </button>

          <Link href="/shop" className="feature-button secondary">
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
}