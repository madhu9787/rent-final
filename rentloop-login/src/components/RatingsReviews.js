import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./RatingsReviews.css";

const RatingsReviews = ({ itemId: propItemId, ownerId: propOwnerId }) => {
  const location = useLocation();
  const { itemId: stateItemId, ownerId: stateOwnerId } = location.state || {};

  const itemId = stateItemId || propItemId;
  const ownerId = stateOwnerId || propOwnerId;

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [reviewsList, setReviewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (itemId) {
      fetchReviews();
    }
  }, [itemId]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/reviews/item/${itemId}`);
      setReviewsList(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!user) {
      alert("Please log in to leave a review!");
      return;
    }

    if (rating === 0 || review.trim() === "") {
      alert("Please give a rating and write a review!");
      return;
    }

    try {
      const newReviewData = {
        item: itemId || "65c3a5b8e9b8f2d5a1a1a1a1", // Fallback for demo
        renter: user.id,
        owner: ownerId || "65c3a5b8e9b8f2d5a1a1a1a2", // Fallback for demo
        rating,
        comment: review,
      };

      const res = await axios.post("http://localhost:5000/api/reviews", newReviewData);

      // Refresh list
      setReviewsList([res.data, ...reviewsList]);
      setRating(0);
      setReview("");
      alert("Review submitted successfully!");
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review.");
    }
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
        {loading ? (
          <p>Loading reviews...</p>
        ) : reviewsList.length === 0 ? (
          <p className="no-reviews">No reviews yet. Be the first to rate!</p>
        ) : (
          reviewsList.map((r) => (
            <div key={r._id} className="review-card">
              <div className="review-header">
                <div className="review-stars">
                  {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                </div>
                <div className="review-date">🗓️ {new Date(r.createdAt).toLocaleDateString()}</div>
              </div>
              <div className="review-author">By: {r.renter?.fullName || r.renter?.name || "Verified Renter"}</div>
              <div className="review-text">{r.comment}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RatingsReviews;


