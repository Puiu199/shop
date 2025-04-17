import { useEffect } from "react";
import { useLocation } from "react-router";

export function TooltipReinitializer() {
  const location = useLocation();

  useEffect(() => {
    // codul care reinitializează FlyonUI tooltips
    if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === "function") {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  return null;
}
