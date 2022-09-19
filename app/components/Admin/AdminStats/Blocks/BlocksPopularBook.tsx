import { FC } from "react";
import { useGetPopularBooksQuery } from "../../../../../services/booksApi";
import style from "./Blocks.module.scss";
import { Icons } from "../../../../UI/Icons";
import Image from "next/image";
import Link from "next/link";
import { getBookUrl } from "../../../../../config/url.config";
import { SkeletonLoading } from "../../../Skeleton/Skeleton";

export const BlocksPopularBook: FC = () => {
  const { isLoading, PopularBook } = useGetPopularBooksQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      isLoading,
      PopularBook: data?.[0],
    }),
  });

  return (
    <Link href={getBookUrl(String(PopularBook?.id))}>
      <a className={style.block_user_count}>
        {isLoading ? (
          <SkeletonLoading height={200} width={220} />
        ) : (
          <>
            <div className={style.con_title}>
              <div className={style.title}>Most popular book</div>
              <div className={style.rating}>
                <div className={style.star}>
                  <Icons name="MdStar" />
                </div>

                <div className={style.count_rating}>{PopularBook?.rating}</div>
              </div>
            </div>
            <Image
              src={String(PopularBook?.poster)}
              alt="Most popular book"
              width={220}
              height={200}
              draggable={false}
              priority
              objectFit="cover"
            />
          </>
        )}
      </a>
    </Link>
  );
};
