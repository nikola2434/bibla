import Image from "next/image";
import { FC } from "react";
import { IAuthor } from "../../../UI/types";
import style from "./DetalisAuthors.module.scss";

const DetailsAuthors: FC<{ author: IAuthor }> = ({
  author: { DateOfBirth, avatar, country, nameAuthor },
}) => {
  const now: Date = new Date(DateOfBirth);
  const UKDate = new Intl.DateTimeFormat("en-UK", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
  return (
    <div className={style.details_Authors}>
      <div className={style.image}>
        <Image
          src={avatar}
          alt={nameAuthor}
          width={180}
          height={250}
          draggable={false}
          unoptimized
          priority
          objectFit="cover"
          className={style.poster}
        />
      </div>
      <div className={style.characteristics}>
        <div className={style.author}>{nameAuthor}</div>
        <div className={style.characteristic}>{country}</div>
        <div className={style.characteristic}>{UKDate.format(now)}</div>
      </div>
    </div>
  );
};

export default DetailsAuthors;
