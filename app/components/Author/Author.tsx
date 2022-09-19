import { FC } from "react";
import { IAuthor } from "../../UI/types";
import Gallery, { IItemGalleryProps } from "../Galeria/Gallery";
import { Heading } from "../Heading/Heading";
import SubTitle from "../Heading/SubTitle";
import Meta from "../Meta/Meta";
import style from "./Author.module.scss";
import DetailsAuthors from "./DetalisAuthors/DetalisAuthors";

export interface IAuthorProps {
  author: IAuthor;
  booksWritten: IItemGalleryProps[];
}

const Author: FC<IAuthorProps> = ({ author, booksWritten }) => {
  return (
    <Meta title={author.nameAuthor}>
      <div className={style.author}>
        <Heading title={author.nameAuthor} />
        <DetailsAuthors author={author} />
        {booksWritten.length !== 0 && (
          <>
            <SubTitle title="Books written" />
            <Gallery
              direction="horizontal"
              gallery={booksWritten}
              type={"book"}
            />
          </>
        )}
      </div>
    </Meta>
  );
};

export default Author;
