import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ReviewForm from "../../components/ReviewForm";
import { API_URL } from "@/constants";
import { Container, Title, Description, ReviewSection, ReviewTitle, ReviewText } from "./styles";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (id) {
      axios.get(`${API_URL}/api/products/${id}`).then((res) => setProduct(res.data));
      axios.get(`${API_URL}/api/reviews/${id}`).then((res) => setReviews(res.data));
    }
  }, [id]);

  const handleNewReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      
      <ReviewSection>
        <ReviewTitle>Reviews</ReviewTitle>
        {reviews.map((review) => (
          <ReviewText key={review._id}>{review.text}</ReviewText>
        ))}
        <ReviewForm productId={product.id} onReviewSubmitted={handleNewReview} />
      </ReviewSection>
    </Container>
  );
}
