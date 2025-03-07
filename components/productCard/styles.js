import styled from "styled-components";

export const Card = styled.div`
  border: 2px solid #000; /* Black border */
  padding: 20px;
  background: #fffaf0; /* Champagne color */
  border-radius: 12px;
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h3`
  color: #000; /* Black text */
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #333; /* Slightly softer black */
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-weight: bold;
  color: #000;
`;

export const StyledLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s;

  &:hover {
    background: #333;
  }
`;
