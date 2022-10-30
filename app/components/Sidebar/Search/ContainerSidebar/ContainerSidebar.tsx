import { FC } from "react";
import { useGetPopularBooksQuery } from "../../../../../services/books/booksApi";

import { SkeletonLoading } from "../../../Skeleton/Skeleton";
import ListPopularBooks from "./ListPopularBooks/ListPopularBooks";

const ContainerSidebar: FC = () => {
  const { PopularBooks, isLoading } = useGetPopularBooksQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      PopularBooks: data?.slice(0, 4),
      isLoading,
    }),
  });
  return (
    <div>
      {isLoading ? (
        <SkeletonLoading
          count={4}
          height={40}
          width={170}
          style={{ marginLeft: 10 }}
        />
      ) : (
        <ListPopularBooks
          books={PopularBooks || []}
          link="popular"
          title="Popular now"
        />
      )}
    </div>
  );
};

export default ContainerSidebar;
