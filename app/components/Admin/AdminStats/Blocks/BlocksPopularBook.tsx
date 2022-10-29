import { FC } from "react";

import style from "./Blocks.module.scss";
import { Icons } from "../../../../UI/Icons";
import Image from "next/image";
import Link from "next/link";
import { getBookUrl } from "../../../../../config/url.config";
import { SkeletonLoading } from "../../../Skeleton/Skeleton";
import { useGetPopularBookQuery } from "../../../../../services/books/booksApi";

export const BlocksPopularBook: FC = () => {
  const { isLoading, data } = useGetPopularBookQuery(undefined);

  return (
    <Link href={getBookUrl(String(data?._id))}>
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

                <div className={style.count_rating}>{data?.rating}</div>
              </div>
            </div>
            <Image
              src={String(data?.poster)}
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
