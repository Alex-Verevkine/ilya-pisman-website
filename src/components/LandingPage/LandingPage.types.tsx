import { PropsWithChildren, FC, RefObject } from "react";

export type LandingPageProps = PropsWithChildren<{
  headerRef?: RefObject<HTMLHeadElement>;
  productsCardsRef?: RefObject<HTMLDivElement>;
}>;

export type LandingPageFC = FC<LandingPageProps>;
