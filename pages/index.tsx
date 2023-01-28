import type { GetStaticProps, NextPage } from "next";
import { IItemGalleryProps } from "../app/components/Galeria/Gallery";
import { Home, IHomeProps } from "../app/components/Home/Home";
import { ISlide } from "../app/components/Slider/slider-interface";
import { IAuthor, IBook } from "../app/UI/types";
import { classicAxios } from "../services/axios/axios";

const HomePage: NextPage<IHomeProps> = ({ slides, authors, books }) => {
  return <Home slides={slides} authors={authors} books={books} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const slides = await classicAxios.get<ISlide[]>("sliders").then((data) => {
      return data.data;
    });
    const books = await classicAxios
      .get<IBook[]>("books/allBooks")
      .then((data) => {
        return data.data
          .filter((item) => item.poster !== "")
          .map((item) => {
            return {
              link: item._id,
              poster: item.poster,
              title: item.title,
              subtitle: item.author,
            } as IItemGalleryProps;
          });
      });
    const authors = await classicAxios
      .get<IAuthor[]>("authors")
      .then((data) => {
        return data.data
          .filter((item) => item.avatar !== "")
          .map((item) => {
            return {
              link: item._id,
              poster: item.avatar,
              title: item.nameAuthor,
            } as IItemGalleryProps;
          });
      });
    return {
      props: {
        slides,
        books,
        authors,
      } as IHomeProps,
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        slides: [],
        books: [],
        authors: [],
      } as IHomeProps,
    };
  }
};
export default HomePage;
