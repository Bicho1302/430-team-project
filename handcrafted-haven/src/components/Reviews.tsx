"use client";

import { useEffect, useMemo, useState } from "react";

type Review = {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
};

type ReviewsProps = {
  productId: string | number;
};

const initialReviewsData: Record<string, Review[]> = {
  "1": [
    {
      id: 1,
      user: "Emily",
      rating: 5,
      comment: "Beautiful handmade product. The quality is amazing.",
      date: "2026-04-01",
    },
    {
      id: 2,
      user: "Daniel",
      rating: 4,
      comment: "Very nice craftsmanship and fast delivery.",
      date: "2026-04-03",
    },
  ],
  "2": [
    {
      id: 1,
      user: "Sophia",
      rating: 5,
      comment: "Looks even better in person. I love it.",
      date: "2026-04-02",
    },
  ],
};

function StarRating({
  rating,
  onChange,
  interactive = false,
}: {
  rating: number;
  onChange?: (value: number) => void;
  interactive?: boolean;
}) {
  return (
    <div className="star-row">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => interactive && onChange?.(star)}
          className={`star-button ${star <= rating ? "filled" : ""} ${
            interactive ? "interactive" : ""
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function Reviews({ productId }: ReviewsProps) {
  const idKey = String(productId);
  const STORAGE_KEY = `reviews-${idKey}`;

  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 🔥 LOAD from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setReviews(parsed);
          return;
        }
      }

      // fallback to initial data
      setReviews(initialReviewsData[idKey] || []);
    } catch (error) {
      console.error("Error loading reviews:", error);
      setReviews(initialReviewsData[idKey] || []);
    }
  }, [idKey]);

  // 🔥 SAVE to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    } catch (error) {
      console.error("Error saving reviews:", error);
    }
  }, [reviews, STORAGE_KEY]);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return total / reviews.length;
  }, [reviews]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !comment.trim() || rating === 0) {
      setError("Please complete your name, rating, and review.");
      setSuccess("");
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      user: name.trim(),
      rating,
      comment: comment.trim(),
      date: new Date().toISOString().split("T")[0],
    };

    setReviews((prev) => [newReview, ...prev]);

    setName("");
    setRating(0);
    setComment("");
    setError("");
    setSuccess("Review submitted successfully!");
  }

  return (
    <section className="reviews-section">
      <h2 style={{ marginBottom: "1rem" }}>Customer Reviews</h2>

      <div className="feature-card reviews-summary">
        <p style={{ marginBottom: "0.5rem" }}>
          {reviews.length > 0 ? (
            <strong>{averageRating.toFixed(1)} / 5</strong>
          ) : (
            <strong>No ratings yet</strong>
          )}
        </p>

        <StarRating rating={Math.round(averageRating)} />

        <p style={{ marginTop: "0.5rem" }}>
          {reviews.length} review{reviews.length !== 1 ? "s" : ""}
        </p>
      </div>

      <form className="feature-card reviews-form" onSubmit={handleSubmit}>
        <h3>Leave a Review</h3>

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setSuccess("");
          }}
          className="feature-input"
        />

        <div>
          <p style={{ marginBottom: "0.4rem" }}>Your Rating:</p>
          <StarRating
            rating={rating}
            onChange={(value) => {
              setRating(value);
              setSuccess("");
            }}
            interactive
          />
        </div>

        <textarea
          placeholder="Write your review"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            setSuccess("");
          }}
          rows={4}
          className="feature-textarea"
        />

        {error && <p className="feature-message-error">{error}</p>}
        {success && <p className="feature-message-success">{success}</p>}

        <button
          type="submit"
          disabled={!name.trim() || !comment.trim() || rating === 0}
          className="feature-button"
        >
          Submit Review
        </button>
      </form>

      <div className="reviews-list">
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to leave one.</p>
        ) : (
          reviews.map((review) => (
            <article key={review.id} className="feature-card">
              <div className="review-item-header">
                <strong>{review.user}</strong>
                <span className="review-date">{review.date}</span>
              </div>

              <div style={{ margin: "0.5rem 0" }}>
                <StarRating rating={review.rating} />
              </div>

              <p style={{ margin: 0 }}>{review.comment}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}