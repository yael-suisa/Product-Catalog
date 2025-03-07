import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #fffaf0; /* Champagne background */
  border-radius: 12px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "Comic Sans MS", cursive, sans-serif;
`;

export const Title = styled.h1`
  color: #c19a6b; /* Champagne color */
  text-align: center;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #333;
  text-align: center;
  font-size: 18px;
`;

export const ReviewSection = styled.div`
  margin-top: 20px;
`;

export const ReviewTitle = styled.h3`
  color: #c19a6b; /* Champagne color */
`;

export const ReviewText = styled.p`
  background: #f8f1e4;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 8px;
  color: #333;
`;
