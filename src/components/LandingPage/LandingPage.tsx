import { MainHeader } from "../MainHeader";
import { ProductCardsGrid } from "../ProductCardsGrid";
import { LandingPageFC, LandingPageProps } from "./LandingPage.types";

const LandingPage: LandingPageFC = ({
  headerRef,
  productsCardsRef
}: LandingPageProps) => {
  return (
    <div>
      <MainHeader id={headerRef} />
      <ProductCardsGrid id={productsCardsRef} />
    </div>
  );
};

export default LandingPage;
