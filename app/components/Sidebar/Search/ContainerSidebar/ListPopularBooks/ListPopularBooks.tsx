import Link from "next/link";
import { FC } from "react";
import { IBook } from "../../../../../UI/types";
import ItemPopularBook from "../ItemPopularBook/ItemPopularBook";
import style from "./ListPopularBooks.module.scss";

interface IListPopularBooksProps {
  title: string;
  link: string;
  books: IBook[];
}

const ListPopularBooks: FC<IListPopularBooksProps> = ({
  title,
  link,
  books,
}) => {
  return (
    <div>
      <div className={style.heading}>{title}</div>
      <div className={style.list_popular_book}>
        {books.map((book) => (
          <ItemPopularBook key={book.title} book={book} />
        ))}
      </div>
      <div className={style.button}>
        <Link href={"/trending"}>
          <a>See more</a>
        </Link>
      </div>
    </div>
  );
};

export default ListPopularBooks;
