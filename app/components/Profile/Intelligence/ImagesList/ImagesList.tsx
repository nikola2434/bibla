import { FC } from "react";
import style from "./ImagesList.module.scss";
import dolphin from "../../../../../public/images/dolphin.png";
import penguin from "../../../../../public/images/penguin.png";
import seal from "../../../../../public/images/seal.png";
import shark from "../../../../../public/images/shark.png";
import turtle from "../../../../../public/images/turtle.png";
import whale from "../../../../../public/images/whale.png";
import Image from "next/image";

const ImagesList: FC<{ updateImage: (url: string) => void }> = ({
  updateImage,
}) => {
  return (
    <div className={style.images_list}>
      <div
        className={style.image}
        onClick={() => updateImage("/images/dolphin.png")}
      >
        <Image
          src={dolphin}
          alt="dolphin"
          width={80}
          height={80}
          draggable={false}
          className={style.poster}
        />
      </div>
      <div
        className={style.image}
        onClick={() => updateImage("/images/penguin.png")}
      >
        <Image
          src={penguin}
          alt="penguin"
          width={80}
          height={80}
          draggable={false}
          className={style.poster}
        />
      </div>
      <div
        className={style.image}
        onClick={() => updateImage("/images/seal.png")}
      >
        <Image
          src={seal}
          alt="seal"
          width={80}
          height={80}
          draggable={false}
          className={style.poster}
        />
      </div>
      <div
        className={style.image}
        onClick={() => updateImage("/images/shark.png")}
      >
        <Image
          src={shark}
          alt="shark"
          width={80}
          height={80}
          draggable={false}
          className={style.poster}
        />
      </div>
      <div
        className={style.image}
        onClick={() => updateImage("/images/turtle.png")}
      >
        <Image
          src={turtle}
          alt="turtle"
          width={80}
          height={80}
          draggable={false}
          className={style.poster}
        />
      </div>
      <div
        className={style.image}
        onClick={() => updateImage("/images/whale.png")}
      >
        <Image
          src={whale}
          alt="whale"
          width={80}
          height={80}
          draggable={false}
          className={style.poster}
        />
      </div>
    </div>
  );
};

export default ImagesList;
