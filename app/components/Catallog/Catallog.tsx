import { FC } from "react";
import Description from "../Description/Description";
import Gallery, { IItemGalleryProps } from "../Galeria/Gallery";
import { Heading } from "../Heading/Heading";
import Meta from "../Meta/Meta";
import style from "./Catallog.module.scss";

export interface ICatallogProps {
  description: string;
  Books: IItemGalleryProps[];
  title: string;
}

const Сatallog: FC<ICatallogProps> = ({ description, Books, title }) => {
  return (
    <Meta title={title}>
      <div className={style.trending}>
        <Heading title={title} />
        <div className={style.description}>
          <Description description={description} />
        </div>
        <Gallery gallery={Books} direction="vertical" />
      </div>
    </Meta>
  );
};

export default Сatallog;
