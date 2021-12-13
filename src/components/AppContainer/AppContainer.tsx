import React from "react";
import { MainFooter } from "..";
import { MainHeader } from "../MainHeader";
import { MainNavBar } from "../MainNavBar";
import { ProductCardsGrid } from "../ProductCardsGrid";

const HomePage = () => {
  return (
    <div>
      <MainNavBar />
      <div style={{ marginTop: "72px" }}>
        <MainHeader />
        <ProductCardsGrid
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
        <MainFooter />
      </div>
    </div>
  );
};

export default HomePage;
