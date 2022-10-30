import { FC } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useGetFavoriteQuery } from "../../../services/users/usersApi";

import Auth from "../Auth/Auth";
import Description from "../Description/Description";
import Gallery, { IItemGalleryProps } from "../Galeria/Gallery";
import { Heading } from "../Heading/Heading";
import SubTitle from "../Heading/SubTitle";
import Meta from "../Meta/Meta";
import { SkeletonLoading } from "../Skeleton/Skeleton";
import style from "./MyBooks.module.scss";

const MyBooks: FC = () => {
  const { user } = useAppSelector((state) => state.users);
  const { favoriteBooks, isLoading } = useGetFavoriteQuery(undefined, {
    selectFromResult: ({ isLoading, data }) => ({
      favoriteBooks: data?.favoriteBooks.map(
        (item) =>
          ({
            link: item._id,
            poster: item.poster,
            title: item.title,
            subtitle: item.author,
          } as IItemGalleryProps)
      ),
      isLoading,
    }),
  });

  if (!user) return <Auth />;

  return (
    <Meta title="Recent activity">
      <div className={style.my_books}>
        <Heading title="Recent activity" />
        <Description description="Here are your favorite books, as well as books you have replied to." />
        <SubTitle title="My favorite books" />
        {isLoading ? (
          <SkeletonLoading height={200} count={1} />
        ) : (
          <Gallery direction="vertical" gallery={favoriteBooks || []} />
        )}
      </div>
    </Meta>
  );
};

export default MyBooks;
