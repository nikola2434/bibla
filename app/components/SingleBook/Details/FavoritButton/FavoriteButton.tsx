import { FC, useState } from "react";
import style from "./FavoriteButton.module.scss";
import cn from "classnames";
import { useAddFavorite } from "./useAddFavorite";
import { Icons } from "../../../../UI/Icons";
import { IUser } from "../../../../UI/types";

interface IFavoriteBookProps {
  bookId: string;
  user: IUser;
}

const FavoriteButton: FC<IFavoriteBookProps> = ({ user, bookId }) => {
  const { handleFavoriteBook } = useAddFavorite();
  const isFavorite = user.favoriteBooks.includes(bookId);

  return (
    <div className={style.button}>
      <button
        onClick={() => handleFavoriteBook(bookId)}
        className={cn(style.heart, {
          [style.favorite]: isFavorite,
          [style.not_favorite]: !isFavorite,
        })}
      >
        <Icons name="MdFavorite" />
      </button>
    </div>
  );
};

export default FavoriteButton;
