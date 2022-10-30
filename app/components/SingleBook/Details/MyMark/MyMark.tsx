import { Rating } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import {
  useGetRatingQuery,
  useSetRatingMutation,
} from "../../../../../services/ratings/ratingApi";
import SubTitle from "../../../Heading/SubTitle";
import { SkeletonLoading } from "../../../Skeleton/Skeleton";
import style from "./MyMark.module.scss";

export const MyMark: FC<{ bookId: string }> = ({ bookId }) => {
  const [rating, setRating] = useState(0);
  const { data, isLoading } = useGetRatingQuery(bookId);
  const [setRatingApi] = useSetRatingMutation();
  useEffect(() => {
    if (data) {
      setRating(data.value);
    }
  }, [data]);

  return (
    <div className={style.mark}>
      <SubTitle title="My mark:" />
      {isLoading ? (
        <SkeletonLoading count={1} />
      ) : (
        <Rating
          name="rating"
          value={rating}
          precision={0.5}
          size="large"
          onChange={(event, newValue) => {
            setRatingApi({ bookId, value: newValue || 0 });
          }}
        />
      )}
    </div>
  );
};
