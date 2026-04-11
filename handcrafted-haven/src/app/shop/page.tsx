"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );

  const filteredProducts = useMemo(() => {
    let updatedProducts =
      selectedCategory === "All"
        ? [...products]
        : products.filter((p) => p.category === selectedCategory);

    if (searchTerm.trim()) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "price-low-high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-a-z") {
      updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-z-a") {
      updatedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    return updatedProducts;
  }, [selectedCategory, searchTerm, sortOption]);

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

      <div className="shop-tools">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="feature-input"
        />

        <div className="shop-tools-row">
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-pill ${
                  selectedCategory === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="feature-select"
            style={{ maxWidth: "220px" }}
          >
            <option value="default">Sort By</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="name-a-z">Name: A to Z</option>
            <option value="name-z-a">Name: Z to A</option>
          </select>
        </div>
      </div>

      <div className="product-count">
        <p>
          Showing <strong>{filteredProducts.length}</strong> product
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found matching your selection.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}