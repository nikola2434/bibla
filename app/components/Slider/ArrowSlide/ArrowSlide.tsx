import { FC } from "react";
import { Icons } from "../../../UI/Icons";
import style from "./ArrowSlide.module.scss";
import cn from "classnames";

interface ArrowSlideProps {
  direction: "next" | "back";
  changeSlide: () => void;
}

const ArrowSlide: FC<ArrowSlideProps> = ({ direction, changeSlide }) => {
  const isNext = direction === "next";
  return (
    <button
      onClick={changeSlide}
      className={cn(style.arrow, {
        [style.next]: isNext,
        [style.back]: !isNext,
      })}
    >
      <Icons name={isNext ? "MdKeyboardArrowRight" : "MdKeyboardArrowLeft"} />
    </button>
  );
};

export default ArrowSlide;
