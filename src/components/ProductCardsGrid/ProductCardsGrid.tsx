import React, { forwardRef } from "react";
import classnames from "classnames";
import { isDesktop } from "react-device-detect";
import { ProductsCardGridProps } from ".";
import { ProductCard } from "../ProductCard";
import "./ProductCardsGrid.scss";

const ProductCardsGrid = forwardRef<HTMLDivElement, ProductsCardGridProps>(
  ({ products = [] }: ProductsCardGridProps, ref) => {
    const classNames = classnames("product-cards-grid", {
      "product-cards-grid-mobile": !isDesktop
    });
    return (
      <div className={classNames} ref={ref}>
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
