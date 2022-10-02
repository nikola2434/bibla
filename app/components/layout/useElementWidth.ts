import { useRef, useState, useEffect } from "react";
export const useElementWidth = () => {
  const ref: any = useRef();
  const [width, setWidth] = useState<number>(0);

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setWidth(width);
    })
  );

  useEffect(() => {
    observer.current.observe(ref.current);
  }, [ref, observer]);

  return { ref, width };
};
