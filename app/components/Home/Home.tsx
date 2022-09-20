import { FC } from "react";

import Gallery, { IItemGalleryProps } from "../Galeria/Gallery";
import SubTitle from "../Heading/SubTitle";
import Slider from "../Slider/Slider";
import { ISlide } from "../Slider/slider-interface";
import style from "./Home.module.scss";

export interface IHomeProps {
  slides: ISlide[];
  books: IItemGalleryProps[];
  authors: IItemGalleryProps[];
}

export const Home: FC<IHomeProps> = ({ slides, authors, books }) => {
  return (
    <div className={style.home}>
      <Slider slides={slides || []} />
      <div className={style.gallery}>
        <SubTitle title="Popular books" />
        <Gallery gallery={books} direction="horizontal" />
        <SubTitle title="Popular authors" />
        <Gallery gallery={authors} direction="horizontal" type="author" />
      </div>
    </div>
  );
};
