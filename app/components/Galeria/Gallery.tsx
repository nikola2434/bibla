import { FC } from "react";
import style from "./Gallery.module.scss";
import ItemGallery from "./ItemGallery";
import cn from "classnames";
export interface IItemGalleryProps {
  poster: string;
  link: string;
  title: string;
  subtitle?: string;
}
const Gallery: FC<{
  gallery: IItemGalleryProps[];
  direction: "horizontal" | "vertical";
  type?: "book" | "author";
}> = ({ gallery, direction, type }) => {
  return (
    <>
      <div
        className={cn({
          [style.gallery]: direction === "horizontal",
          [style.gallery_vertical]: direction === "vertical",
        })}
      >
        {gallery.map((item) => (
          <ItemGallery item={item} key={item.title} type={type} />
        ))}
      </div>
    </>
  );
};

export default Gallery;
