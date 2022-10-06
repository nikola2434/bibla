import { GetStaticPaths, GetStaticProps } from "next";
import Author, { IAuthorProps } from "../../app/components/Author/Author";
import { IItemGalleryProps } from "../../app/components/Galeria/Gallery";
import { NextAuthPage } from "../../app/UI/authTypes";
import { axiocBookApi, axiosAuthorApi } from "../../services/axios";

const AuthorPage: NextAuthPage<IAuthorProps> = ({ author, booksWritten }) => {
  return <Author author={author} booksWritten={booksWritten} />;
};

export default AuthorPage;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const authors = await axiosAuthorApi.getAuthors();
    const paths = authors.map((author) => ({
      params: { id: author.id },
    }));
    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const author = await axiosAuthorApi.getAuthor(String(params?.id));
    const books = await axiocBookApi.getBooksId(author.BooksWritten);
    return {
      props: {
        author: author,
        booksWritten: books.map((book) => {
          return {
            link: book.id,
            poster: book.poster,
            title: book.title,
            subtitle: book.author,
          } as IItemGalleryProps;
        }),
      } as IAuthorProps,
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        author: {
          avatar: "",
          BooksWritten: [],
          country: "",
          DateOfBirth: "",
          id: "",
          nameAuthor: "",
        },
        booksWritten: [],
      } as IAuthorProps,
      revalidate: 10,
    };
  }
};
