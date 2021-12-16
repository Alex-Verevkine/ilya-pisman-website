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
      <ProductCardsGrid
        ref={productsCardsRef}
        products={[
          {
            title: "test product 1",
            imageUrl:
              "https://static.wixstatic.com/media/3528b1_d61b1bfd441c4477a456b428f2f77f25~mv2.jpg/v1/fill/w_415,h_396,q_90/3528b1_d61b1bfd441c4477a456b428f2f77f25~mv2.jpg"
          },
          {
            title: "test product 1",
            imageUrl:
              "https://static.wixstatic.com/media/3528b1_d61b1bfd441c4477a456b428f2f77f25~mv2.jpg/v1/fill/w_415,h_396,q_90/3528b1_d61b1bfd441c4477a456b428f2f77f25~mv2.jpg"
          },
          {
            title: "test product 1",
            imageUrl:
              "https://static.wixstatic.com/media/3528b1_d61b1bfd441c4477a456b428f2f77f25~mv2.jpg/v1/fill/w_415,h_396,q_90/3528b1_d61b1bfd441c4477a456b428f2f77f25~mv2.jpg"
          },
          {
            title: "test product 1",
            imageUrl:
              "https://static.wixstatic.com/media/3528b1_d61b1bfd441c4477a456b428f2f77f25~mv2.jpg/v1/fill/w_415,h_396,q_90/3528b1_d61b1bfd441c4477a456b428f2f77f25~mv2.jpg"
          },
          {
            title: "test product 1",
            imageUrl:
              "https://static.wixstatic.com/media/3528b1_d61b1bfd441c4477a456b428f2f77f25~mv2.jpg/v1/fill/w_415,h_396,q_90/3528b1_d61b1bfd441c4477a456b428f2f77f25~mv2.jpg"
          },
          {
            title: "test product 1",
            imageUrl:
              "https://static.wixstatic.com/media/3528b1_d61b1bfd441c4477a456b428f2f77f25~mv2.jpg/v1/fill/w_415,h_396,q_90/3528b1_d61b1bfd441c4477a456b428f2f77f25~mv2.jpg"
          }
        ]}
      />
    </div>
  );
};

export default LandingPage;
