import { useState } from "react";
export const useSlider = (length: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isNext = currentIndex + 1 < length;
  const isBack = currentIndex ? currentIndex - 1 < length : false;

  function handleChangeSlide(direction: "next" | "back") {
    const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  return { isNext, isBack, handleChangeSlide, currentIndex };
};
