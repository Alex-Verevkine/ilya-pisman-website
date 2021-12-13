import React from "react";
import { ProductsCardGridProps } from ".";
import { ProductCard } from "../ProductCard";
import "./ProductCardsGrid.scss";

const ProductCardsGrid = ({ products = [] }: ProductsCardGridProps) => {
  return (
    <div className="product-cards-grid">
      {products.map(({ title, imageUrl }, productIndex) => (
        <ProductCard
          title={title}
          imageUrl={imageUrl}
          key={`product-${productIndex}`}
        />
      ))}
    </div>
  );
};

export default ProductCardsGrid;
