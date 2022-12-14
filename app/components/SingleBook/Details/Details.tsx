import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

import { getAuthorUrl, getGenreUrl } from "../../../../config/url.config";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { axiosAuthorApi } from "../../../../services/axios/axios";
import { Icons } from "../../../UI/Icons";
import { IBook } from "../../../UI/types";
import FavoriteButton from "./FavoritButton/FavoriteButton";
import style from "./Details.module.scss";
import { generateLink } from "../../../../config/generateLink";
import { MyMark } from "./MyMark/MyMark";

const Details: FC<{ book: IBook }> = ({ book }) => {
  const { user } = useAppSelector((state) => state.users);
  const { push, query } = useRouter();
  return (
    <div className={style.details}>
      <div className={style.image}>
        <Image
          src={book.poster}
          alt={book.title}
          width={180}
          height={250}
          draggable={false}
          unoptimized
          priority
          objectFit="cover"
          className={style.poster}
        />
      </div>
      <div className={style.characteristics}>
        <a className={style.author}>{book.author}</a>

        {user && (
          <div className={style.favorite}>
            <FavoriteButton bookId={String(query.id)} />
          </div>
        )}

        <Link href={getGenreUrl(generateLink(book.genre))}>
          <a className={style.genre}>{book.genre}</a>
        </Link>
        <div className={style.rating}>
          <div className={style.star}>
            <Icons name="MdStar" />
          </div>
          {book.rating}
        </div>
        {user && <MyMark bookId={String(query.id)} />}
      </div>
    </div>
  );
};

export default Details;
