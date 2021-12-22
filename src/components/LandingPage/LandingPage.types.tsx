import { PropsWithChildren, FC } from "react";

export type LandingPageProps = PropsWithChildren<{
  headerRef?: string;
  productsCardsRef?: string;
}>;

export type LandingPageFC = FC<LandingPageProps>;
