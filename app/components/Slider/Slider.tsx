import { AnimatePresence, motion } from "framer-motion";
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
          <AnimatePresence>
            <motion.div
              key={slides[currentIndex].title}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className={style.slide_container}
              transition={{
                opacity: { duration: 1 },
              }}
            >
              <Slide slide={slides[currentIndex]} />
            </motion.div>
          </AnimatePresence>
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
