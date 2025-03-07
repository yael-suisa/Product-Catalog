import { useState } from "react";
import axios from "axios";
import { API_URL } from "@/constants";
import { Form, Textarea, Button, ErrorMessage } from "./styles";

export default function ReviewForm({ productId, onReviewSubmitted }) {
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!review.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(`${API_URL}/api/reviews/${productId}`, { text: review });
      onReviewSubmitted(res.data); // שולח רק את הביקורת החדשה לקומפוננטת האב
      setReview("");
    } catch (err) {
      console.error("Error submitting review:", err);
      setError("Failed to submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Submit a review"
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  );
}
