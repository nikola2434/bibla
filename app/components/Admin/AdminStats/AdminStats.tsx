import { FC } from "react";
import { Heading } from "../../Heading/Heading";
import style from "./AdminStats.module.scss";
import { BlocksPopularBook } from "./Blocks/BlocksPopularBook";
import { ContainerCountBlocks } from "./Blocks/ContainerCountBlocks";
export const AdminStats: FC = () => {
  return (
    <div className={style.admin_stats}>
      <Heading title="Statistics" />
      <div className={style.blocks_statics}>
        <ContainerCountBlocks />
        <BlocksPopularBook />
      </div>
    </div>
  );
};
