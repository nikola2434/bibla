import { FC } from "react";
import ArrowSlide from "./ArrowSlide/ArrowSlide";
import Slide from "./Slide/Slide";
import { ISlide } from "./slider-interface";
import style from "./Slider.module.scss";
import { useSlider } from "./useSlider";

interface ISliderProps {
  slides: ISlide[];
}

const Slider: FC<ISliderProps> = ({ slides }) => {
  const { handleChangeSlide, isBack, isNext, currentIndex } = useSlider(
    slides.length
  );
  return (
    <div className={style.slider}>
      {slides.length && (
        <>
          <div
            key={slides[currentIndex].title}
            className={style.slide_container}
          >
            <Slide slide={slides[currentIndex]} />
          </div>

          {isNext && (
            <ArrowSlide
              direction="next"
              changeSlide={() => handleChangeSlide("next")}
            />
          )}
          {isBack && (
            <ArrowSlide
              direction="back"
              changeSlide={() => handleChangeSlide("back")}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Slider;
