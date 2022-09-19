import { FC } from "react";
import style from "./Slide.module.scss";
import { ISlide } from "../slider-interface";
import { useRouter } from "next/router";
import Image from "next/image";
import { getBookUrl } from "../../../../config/url.config";

const Slide: FC<{ slide: ISlide }> = ({ slide }) => {
  const { push } = useRouter();
  return (
    <div className={style.slide}>
      <div className={style.poster}>
        <Image
          src={slide.poster}
          alt={slide.title}
          draggable={false}
          objectFit="cover"
          width={990}
          height={330}
          priority
          className={style.image}
        />
      </div>
      <div className={style.content}>
        <div className={style.title}>{slide.title}</div>
        <div className={style.subtitle}>{slide.subtitle}</div>
        <button
          className={style.button}
          onClick={() => push(getBookUrl(slide.link))}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Slide;
