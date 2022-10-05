import { useState, useLayoutEffect } from "react";

const queries = [
  "(max-width: 480px)",
  "(min-width: 980px) and (max-width: 1279px)",
  "(min-width: 1280px)",
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));

  const getValues = () => mediaQueryLists.map((list) => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach((list) => list.addEventListener("change", handler));

    return () =>
      mediaQueryLists.forEach((list) =>
        list.removeEventListener("change", handler)
      );
  }, []);

  return { isMobile: values[0], isTablet: values[1], isDesktop: values[2] };
};
