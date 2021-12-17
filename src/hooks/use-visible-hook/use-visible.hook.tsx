import { useEffect } from "react";
import { UseVisibleHookProps } from "./use-visible-hook.types";

const useVisibleHook = ({ controls, inView }: UseVisibleHookProps): void => {
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
};

export default useVisibleHook;
