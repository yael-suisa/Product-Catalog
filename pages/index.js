import { useEffect, useState } from "react";
import ProductList from "../components/productList";
import axios from "axios";
import { API_URL } from "@/constants";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background: #fffaf0; /* Champagne background */
  border-radius: 12px;
  font-family: "Comic Sans MS", cursive, sans-serif;
`;

const Title = styled.h1`
  color: #c19a6b; /* Champagne color */
  text-align: center;
  margin-bottom: 20px;
`;

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/products`).then((res) => setProducts(res.data));
  }, []);

  return (
    <Container>
      <Title>Products Catalog</Title>
      <ProductList products={products} />
    </Container>
  );
}
