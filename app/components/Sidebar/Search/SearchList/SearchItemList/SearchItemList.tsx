import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { getBookUrl } from "../../../../../../config/url.config";
import { IBook } from "../../../../../UI/types";
import style from "./SearchItemList.module.scss";

export const SearchItemList: FC<{ book: IBook }> = ({ book }) => {
  return (
    <Link href={getBookUrl(book._id)}>
      <a className={style.container_item}>
        <Image
          src={book.poster}
          alt={book.title}
          objectFit="cover"
          width={50}
          height={60}
          draggable={false}
          className={style.image}
        />
        <div className={style.title}>{book.title}</div>
      </a>
    </Link>
  );
};
