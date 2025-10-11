// src/components/RatingsReviews.js
import React, { useState } from "react";
import "./RatingsReviews.css";

const RatingsReviews = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [reviewsList, setReviewsList] = useState([]);

  const handleSubmit = () => {
    if (rating === 0 || review.trim() === "") {
      alert("Please give a rating and write a review!");
      return;
    }

    const newReview = {
      rating,
      review,
      date: new Date().toLocaleDateString(),
    };
    setReviewsList([newReview, ...reviewsList]);
    setRating(0);
    setReview("");
  };

  return (
    <div className="review-container">
      <h2>🌟 Ratings & Reviews</h2>

      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <span
              key={index}
              className={
                currentRating <= (hover || rating)
                  ? "star filled"
                  : "star"
              }
              onClick={() => setRating(currentRating)}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          );
        })}
      </div>

      <textarea
        placeholder="Write your review here..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="review-textarea"
      ></textarea>

      <button className="submit-btn" onClick={handleSubmit}>
        ✅ Submit Review
      </button>

      <div className="reviews-list">
        {reviewsList.map((r, i) => (
          <div key={i} className="review-card">
            <div className="review-stars">
              {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
            </div>
            <div className="review-text">{r.review}</div>
            <div className="review-date">🗓️ {r.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsReviews;


