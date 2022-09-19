import Link from "next/link";
import { FC } from "react";
import { IBook } from "../../../../../UI/types";
import { getBookUrl, getGenreUrl } from "../../../../../../config/url.config";
import Image from "next/image";
import style from "./ItemPopularBook.module.scss";
import { Icons } from "../../../../../UI/Icons";
import { generateLink } from "../../../../../../config/generateLink";

const ItemPopularBook: FC<{ book: IBook }> = ({ book }) => {
  return (
    <div>
      <Link href={getBookUrl(book.id)}>
        <a className={style.popular_book}>
          <Image
            src={book.poster}
            width={60}
            height={97}
            alt={book.title}
            draggable={false}
            priority
            className={style.image}
          />
          <div className={style.container_characteristics}>
            <div className={style.title}>{book.title}</div>
            <Link href={"/genre/" + generateLink(book.genre)}>
              <div className={style.genre}>{book.genre}</div>
            </Link>
            <div className={style.rating}>
              <div className={style.star}>
                <Icons name="MdStarRate" />
              </div>

              <div>{book.rating}</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ItemPopularBook;
