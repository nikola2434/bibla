import { FC, useState, useEffect } from "react";
import style from "./FavoriteButton.module.scss";
import cn from "classnames";
import { useAddFavorite } from "./useAddFavorite";
import { Icons } from "../../../../UI/Icons";
import { useGetProfileQuery } from "../../../../../services/users/usersApi";

interface IFavoriteBookProps {
  bookId: string;
}

const FavoriteButton: FC<IFavoriteBookProps> = ({ bookId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { handleFavoriteBook } = useAddFavorite();
  const { data, isLoading, isSuccess } = useGetProfileQuery(undefined);

  useEffect(() => {
    if (data) {
      const isSmashed = data.favoriteBooks.some((book) => book === bookId);
      if (isSmashed !== isFavorite) setIsFavorite(isSmashed);
    }
  }, [data, isFavorite, bookId]);

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
