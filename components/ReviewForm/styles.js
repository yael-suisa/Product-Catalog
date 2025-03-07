import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #fffaf0; /* Champagne background */
  border-radius: 12px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 2px solid #c19a6b; /* Champagne color border */
  border-radius: 8px;
  font-size: 16px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  resize: vertical;
  min-height: 120px;
  color: #333;
`;

export const Button = styled.button`
  padding: 10px;
  background: #c19a6b; /* Champagne color */
  color: #fff;
  font-size: 16px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #a38259;
  }

  &:disabled {
    background: #d2b7a3;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;
