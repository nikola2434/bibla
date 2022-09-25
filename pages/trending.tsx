import { GetStaticProps } from "next";
import { IItemGalleryProps } from "../app/components/Galeria/Gallery";
import { ICatallogProps } from "../app/components/Catallog/Catallog";
import { NextAuthPage } from "../app/UI/authTypes";
import { PopularBooksApi } from "../services/axios";
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
        description: trending.description,
        Books: trending.PopularBooks.map(
          (item) =>
            ({
              link: item.id,
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
