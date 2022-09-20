import { FC } from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import style from "./Skeleton.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonLoading: FC<SkeletonProps> = ({ ...rest }) => {
  return (
    <Skeleton
      {...rest}
      baseColor={"#0957b4"}
      highlightColor={"#43acf9"}
      className={style.skeleton}
    />
  );
};
