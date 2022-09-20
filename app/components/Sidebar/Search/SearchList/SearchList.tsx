import { FC } from "react";
import { IBook } from "../../../../UI/types";
import { SearchItemList } from "./SearchItemList/SearchItemList";
import style from "./SearchList.module.scss";

export const SearchList: FC<{ books: IBook[] }> = ({ books }) => {
  return (
    <div className={style.list}>
      {books.length ? (
        books.map((book) => <SearchItemList book={book} key={book.title} />)
      ) : (
        <div className={style.message}>Book not found!</div>
      )}
    </div>
  );
};
