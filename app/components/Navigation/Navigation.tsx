import { FC } from "react";
import { Logo } from "../Logo/Logo";
import { ContainerMenu } from "./Menu/ContainerMenu";
import style from "./Navigation.module.scss";
import { MenuData } from "./Menu/MenuData";
import { useGetGenresQuery } from "../../../services/genresApi";
import { SkeletonLoading } from "../Skeleton/Skeleton";
import { IMenuItems } from "./Menu/MenuInterface";
import { getGenreUrl } from "../../../config/url.config";

export const Navigation: FC = () => {
  const { data, isLoading } = useGetGenresQuery(
    { limit: 10 },
    {
      selectFromResult: ({ data, isLoading }) => ({
        isLoading: isLoading,
        data: data?.map((genre) => {
          return {
            title: genre.title,
            link: getGenreUrl(genre.link),
            icons: genre.icons,
          } as IMenuItems;
        }),
      }),
    }
  );

  return (
    <div className={style.navigation}>
      <Logo />
      <div className={style.container_menu}>
        <ContainerMenu MenuData={MenuData} />
        {isLoading ? (
          <SkeletonLoading count={5} height={20} width={170} />
        ) : (
          <ContainerMenu
            MenuData={{ title: "Book genres", items: data || [] }}
          />
        )}
        <ContainerMenu MenuData={{ title: "auth" }} />
      </div>
    </div>
  );
};
