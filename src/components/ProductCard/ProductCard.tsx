import React from "react";
import { ProductCardProps } from ".";
import "./ProductCard.scss";
const ProductCard = ({ title = "", imageUrl = "" }: ProductCardProps) => {
  return (
    <div className="product-card">
      <h3 className="product-card-title">{title}</h3>
      <picture>
        <img
          src={imageUrl}
          alt={`${title}`}
          style={{ maxWidth: "480px", maxHeight: "642px" }}
        />
      </picture>
    </div>
  );
};

export default ProductCard;
