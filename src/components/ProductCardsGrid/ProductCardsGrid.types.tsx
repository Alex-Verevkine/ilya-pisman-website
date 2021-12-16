import { FC, PropsWithChildren } from "react";
import { ProductCardProps } from "../ProductCard";

export type ProductsCardGridProps = PropsWithChildren<{
  products: Array<ProductCardProps>;
}>;
