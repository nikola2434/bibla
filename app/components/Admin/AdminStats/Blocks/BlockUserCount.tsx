import { FC } from "react";
import { useGetUsersQuery } from "../../../../../services/users/usersApi";
import { TypeMaterialIcons } from "../../../../../shared/types/icons";
import { Icons } from "../../../../UI/Icons";
import { SkeletonLoading } from "../../../Skeleton/Skeleton";
import style from "./Blocks.module.scss";

interface IBlockUserCountProps {
  countUser: number;
  isLoading: boolean;
  title: string;
  icon: TypeMaterialIcons;
}

export const BlockUserCount: FC<IBlockUserCountProps> = ({
  countUser,
  isLoading,
  title,
  icon,
}) => {
  return (
    <div className={style.block_user_count}>
      {isLoading ? (
        <SkeletonLoading height={50} width={40} />
      ) : (
        <div className={style.count}>{countUser}</div>
      )}

      <div className={style.container_title}>
        <Icons name={icon} />
        <div className={style.title}> {title}</div>
      </div>
    </div>
  );
};
