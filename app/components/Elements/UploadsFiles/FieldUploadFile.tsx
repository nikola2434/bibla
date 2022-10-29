import { FC } from "react";
import { IFieldUploadProps } from "../ElementsInterface";
import { useUploadFiles } from "./uploadFiles";
import style from "./FieldUploadFiles.module.scss";
import { SkeletonLoading } from "../../Skeleton/Skeleton";
import Image from "next/image";
import photo from "../../../../public/photo.png";

export const FieldUploadFile: FC<IFieldUploadProps> = ({
  onChange,
  placeholder,
  error,
  folder,
  image,
}) => {
  const { isLoading, uploadFile } = useUploadFiles(onChange, folder);
  console.log(image);

  return (
    <div className={style.field}>
      <div className={style.input}>
        <div className={style.placeholder}>{placeholder}</div>
        <input type="file" onChange={uploadFile} className={style.file_input} />

        {error && <div className={style.error}>{error.message}</div>}
      </div>

      {isLoading ? (
        <SkeletonLoading
          count={1}
          height={200}
          width={150}
          style={{ position: "absolute", left: 140, bottom: -30 }}
        />
      ) : image && image !== " " ? (
        <div className={style.image}>
          <Image
            src={image}
            alt="photo"
            width={150}
            height={200}
            className={style.poster}
          />
        </div>
      ) : (
        <div className={style.image}>
          <Image src={photo} alt="photo" width={60} height={60} />
        </div>
      )}
    </div>
  );
};
