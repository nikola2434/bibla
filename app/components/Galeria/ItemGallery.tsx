import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { getAuthorUrl, getBookUrl } from "../../../config/url.config";
import { IItemGalleryProps } from "./Gallery";
import style from "./Gallery.module.scss";
import spare from "../../../public/photo.png";

interface IItemGallery {
  item: IItemGalleryProps;
  type?: "book" | "author";
}

const ItemGallery: FC<IItemGallery> = ({
  item: { link, poster, title, subtitle },
  type = "book",
}) => {
  return (
    <Link href={type === "book" ? getBookUrl(link) : getAuthorUrl(link)}>
      <a className={style.item}>
        <div className={style.poster}>
          <Image
            alt={title}
            src={poster }
            objectFit={"cover"}
            draggable={false}
            priority
            width={150}
            height={220}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <div className={style.title}>{title}</div>
          <div className={style.subtitle}>{subtitle}</div>
        </div>
      </a>
    </Link>
  );
};

export default ItemGallery;
