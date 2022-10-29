import { GetStaticPaths, GetStaticProps } from "next";
import Catallog, {
  ICatallogProps,
} from "../../app/components/Catallog/Catallog";
import { IItemGalleryProps } from "../../app/components/Galeria/Gallery";
import { NextAuthPage } from "../../app/UI/authTypes";
import { axiosGenreApi } from "../../services/axios/axios";

const CatallogPage: NextAuthPage<ICatallogProps> = ({
  Books,
  description,
  title,
}) => {
  return <Catallog Books={Books} description={description} title={title} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const genres = await axiosGenreApi.getGenres();
    const paths = genres.map((g) => ({
      params: { slug: g.link },
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
    const genre = await axiosGenreApi.getGenre(String(params?.slug));
    console.log(genre);
    return {
      props: {
        title: genre.title,
        description: genre.description,
        Books: genre.books?.map((book) => {
          return {
            link: book._id,
            poster: book.poster,
            title: book.title,
            subtitle: book.author,
          } as IItemGalleryProps;
        }),
      } as ICatallogProps,
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: { Books: [], description: "", title: "" } as ICatallogProps,
    };
  }
};

export default CatallogPage;
