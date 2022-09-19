import { FC } from "react";
import { IBook } from "../../UI/types";
import Description from "../Description/Description";
import Gallery, { IItemGalleryProps } from "../Galeria/Gallery";
import { Heading } from "../Heading/Heading";
import SubTitle from "../Heading/SubTitle";
import Meta from "../Meta/Meta";
import Details from "./Details/Details";
import style from "./SingleBook.module.scss";

export interface IBookProps {
  similarBooks: IItemGalleryProps[];
  book: IBook;
}
const SingleBook: FC<IBookProps> = ({ similarBooks, book }) => {
  return (
    <div className={style.single_book}>
      <Meta title={book.title}>
        <Heading title={book.title} />
        <Details book={book} />
        <Description description={book.description} />
        {similarBooks.length !== 0 && (
          <>
            <SubTitle title="Similar" />
            <Gallery direction="horizontal" gallery={similarBooks} />
          </>
        )}
      </Meta>
    </div>
  );
};

export default SingleBook;
