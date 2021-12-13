import { useEffect, useState } from "react";
import classNames from "classnames";

const mainCardClasses = classNames("product-card");
const mainCardTitleClasses = classNames("product-card-title");
const mainCardPictureClasses = classNames("product-card-picture");

export const useCardClassNames = ({ isDesktop }: { isDesktop: boolean }) => {
  const [response, setResponse] = useState(mainCardClasses);
  useEffect(() => {
    setResponse(
      classNames(mainCardClasses, {
        "product-card-desktop": isDesktop,
        "product-card-mobile": !isDesktop
      })
    );
  }, [isDesktop]);

  return response;
};

export const useCardTitleClassNames = ({
  isDesktop
}: {
  isDesktop: boolean;
}) => {
  const [response, setResponse] = useState(mainCardTitleClasses);
  useEffect(() => {
    setResponse(
      classNames(mainCardTitleClasses, {
        "product-card-title-desktop": isDesktop,
        "product-card-title-mobile": !isDesktop
      })
    );
  }, [isDesktop]);

  return response;
};

export const useProductCardPictureClassNames = ({
  isDesktop
}: {
  isDesktop: boolean;
}) => {
  const [response, setResponse] = useState(mainCardPictureClasses);
  useEffect(() => {
    setResponse(
      classNames(mainCardPictureClasses, {
        "product-card-picture-desktop": isDesktop,
        "product-card-picture-mobile": !isDesktop
      })
    );
  }, [isDesktop]);

  return response;
};
