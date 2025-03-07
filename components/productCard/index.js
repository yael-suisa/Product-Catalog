import { Card, Title, Description, Price, StyledLink } from './styles';
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Card>
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      <Price>Price: {product.price} ₪</Price>
      <Link href={`/product/${product.id}`} passHref>
        <StyledLink>View Product</StyledLink>
      </Link>
    </Card>
  );
}
