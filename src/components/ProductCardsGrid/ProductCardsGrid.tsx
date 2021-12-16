import React, { forwardRef } from "react";
import { ProductsCardGridProps } from ".";
import { ProductCard } from "../ProductCard";
import "./ProductCardsGrid.scss";

const ProductCardsGrid = forwardRef<HTMLDivElement, ProductsCardGridProps>(
  ({ products = [] }: ProductsCardGridProps, ref) => {
    return (
      <div className="product-cards-grid" ref={ref}>
        {products.map(({ title, imageUrl }, productIndex) => (
          <ProductCard
            title={title}
            imageUrl={imageUrl}
            key={`product-${productIndex}`}
          />
        ))}
      </div>
    );
  }
);

export default ProductCardsGrid;
