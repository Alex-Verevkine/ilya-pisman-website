import React from "react";
import { random } from "lodash";
import { isDesktop } from "react-device-detect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  useCardClassNames,
  useCardTitleClassNames,
  useProductCardPictureClassNames
} from "./hooks";
import { useVisibleHook } from "../../hooks";
import { ProductCardProps } from ".";
import "./ProductCard.scss";

const ProductCard = ({ title = "", imageUrl = "" }: ProductCardProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const productCardClassNames = useCardClassNames({ isDesktop });
  const productCardTitleClassNames = useCardTitleClassNames({ isDesktop });
  const productCardPictureClassNames = useProductCardPictureClassNames({
    isDesktop
  });
  useVisibleHook({ controls, inView });

  const squareVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: random(0.5, 1, true) }
    },
    hidden: { opacity: 0, y: random(10, 100) }
  };

  return (
    <motion.div
      ref={ref}
      className={`square ${productCardClassNames}`}
      variants={squareVariants}
      animate={controls}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.5 }
      }}
      initial="hidden"
    >
      <picture className={productCardPictureClassNames}>
        <img src={imageUrl} alt={`${title}`} />
      </picture>
      <h3 className={productCardTitleClassNames}>{title}</h3>
    </motion.div>
  );
};

export default ProductCard;
