import { GetStaticProps } from "next";
import { IItemGalleryProps } from "../app/components/Galeria/Gallery";
import { ICatallogProps } from "../app/components/Catallog/Catallog";
import { NextAuthPage } from "../app/UI/authTypes";
import { PopularBooksApi } from "../services/axios/axios";
import Catallog from "../app/components/Catallog/Catallog";

const trendingPage: NextAuthPage<ICatallogProps> = ({
  Books,
  description,
  title,
}) => {
  return <Catallog Books={Books} description={description} title={title} />;
};

export default trendingPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const trending = await PopularBooksApi.getPopularBooks();

    return {
      props: {
        title: "Trending now",
        description: "A list of great books that everyone should read. A selection of the most interesting and popular books.",
        Books: trending.map(
          (item) =>
            ({
              link: item._id,
              poster: item.poster,
              title: item.title,
              subtitle: item.author,
            } as IItemGalleryProps)
        ),
      } as ICatallogProps,
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        title: "Trending now",
        description: "",
        Books: [],
      } as ICatallogProps,
    };
  }
};
