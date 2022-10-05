import { FC, useState, useEffect } from "react";
import { Logo } from "../Logo/Logo";
import { ContainerMenu } from "./Menu/ContainerMenu";
import style from "./Navigation.module.scss";
import { MenuData } from "./Menu/MenuData";
import { useGetGenresQuery } from "../../../services/genresApi";
import { SkeletonLoading } from "../Skeleton/Skeleton";
import { IMenuItems } from "./Menu/MenuInterface";
import { getGenreUrl } from "../../../config/url.config";
import { IoIosArrowBack } from "react-icons/io";
import cn from "classnames";
import { useMatchMedia } from "../../../hooks/useMatchMedia";

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
  const { isTablet, isMobile, isDesktop } = useMatchMedia();
  useEffect(() => {
    if (isTablet || isDesktop) setIsOpen(false);
  }, [isMobile]);
  const [isOpen, setIsOpen] = useState(!isMobile);
  const changeOpen = () => {
    if (!isMobile) setIsOpen(true);
  };

  return (
    <div
      className={cn(style.navigation, {
        [style.active_navigation]: isOpen,
      })}
    >
      <Logo setIsOpen={() => changeOpen()} />
      <div className={style.container_menu}>
        <ContainerMenu MenuData={MenuData} setIsOpen={() => changeOpen()} />
        {isLoading ? (
          <SkeletonLoading count={5} height={20} width={170} />
        ) : (
          <ContainerMenu
            MenuData={{ title: "Book genres", items: data || [] }}
            setIsOpen={() => changeOpen()}
          />
        )}
        <ContainerMenu
          MenuData={{ title: "auth" }}
          setIsOpen={() => changeOpen()}
        />
      </div>
      <div className={style.container_arrow}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={cn(style.arrow, { [style.active_arrow]: isOpen })}
        >
          <IoIosArrowBack />
        </div>
      </div>
    </div>
  );
};
