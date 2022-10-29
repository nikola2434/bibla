import SingleBook, {
  IBookProps,
} from "../../app/components/SingleBook/SingleBook";
import { NextAuthPage } from "../../app/UI/authTypes";
import { GetStaticPaths, GetStaticProps } from "next";
import { axiocBookApi, axiosGenreApi } from "../../services/axios/axios";
import { generateLink } from "../../config/generateLink";
import { IItemGalleryProps } from "../../app/components/Galeria/Gallery";

const BookPage: NextAuthPage<IBookProps> = ({ book, similarBooks }) => {
  return <SingleBook book={book} similarBooks={similarBooks} />;
};

export default BookPage;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const books = await axiocBookApi.getBooks();
    const paths = books.map((book) => ({
      params: { id: book._id },
    }));
    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const book = await axiocBookApi.getBook(String(params?.id));
    const genre = await axiosGenreApi.getGenre(generateLink(book.genre));
    return {
      props: {
        book: book,
        similarBooks: genre.books
          ?.filter((item) => item._id !== String(params?.id))
          .map((book) => {
            return {
              link: book._id,
              poster: book.poster,
              title: book.title,
              subtitle: book.author,
            } as IItemGalleryProps;
          }),
      } as IBookProps,
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: { link: "", poster: "", title: "" } as IItemGalleryProps,
      revalidate: 10,
    };
  }
};
