import { MainHeader } from "../MainHeader";
import { ProductCardsGrid } from "../ProductCardsGrid";
import { LandingPageFC, LandingPageProps } from "./LandingPage.types";

const LandingPage: LandingPageFC = ({
  headerRef,
  productsCardsRef
}: LandingPageProps) => {
  return (
    <div>
      <MainHeader ref={headerRef} />
      <ProductCardsGrid ref={productsCardsRef} />
    </div>
  );
};

export default LandingPage;
