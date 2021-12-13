import React from "react";
import { isDesktop } from "react-device-detect";
import {
  useCardClassNames,
  useCardTitleClassNames,
  useProductCardPictureClassNames
} from "./hooks";
import { ProductCardProps } from ".";
import "./ProductCard.scss";

const ProductCard = ({ title = "", imageUrl = "" }: ProductCardProps) => {
  const productCardClassNames = useCardClassNames({ isDesktop });
  const productCardTitleClassNames = useCardTitleClassNames({ isDesktop });
  const productCardPictureClassNames = useProductCardPictureClassNames({
    isDesktop
  });

  return (
    <div className={productCardClassNames}>
      <picture className={productCardPictureClassNames}>
        <img src={imageUrl} alt={`${title}`} />
      </picture>
      <h3 className={productCardTitleClassNames}>{title}</h3>
    </div>
  );
};

export default ProductCard;
