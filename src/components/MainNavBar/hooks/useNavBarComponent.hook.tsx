import { useMemo, useState } from "react";
import { NavBarDesktop, NavBarDesktopFC } from "../NavBarDesktop";
import { NavBarMobile, NavBarMobileFC } from "../NavBarMobile";

const useNavBarComponent = ({
  isDesktop
}: {
  isDesktop: boolean;
}): null | NavBarMobileFC | NavBarDesktopFC => {
  const [NavBarComponent, setNavBarComponent] = useState<
    null | NavBarMobileFC | NavBarDesktopFC
  >(null);

  useMemo(() => {
    const TargetComponent = isDesktop ? NavBarDesktop : NavBarMobile;
    setNavBarComponent(TargetComponent);
  }, [isDesktop]);
  return NavBarComponent;
};

export default useNavBarComponent;
