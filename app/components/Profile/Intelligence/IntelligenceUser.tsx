import Image from "next/image";
import { FC, useState } from "react";
import style from "./IntelligenceUser.module.scss";
import logoSeo from "../../../../public/logoSeo.png";
import { Icons } from "../../../UI/Icons";
import { IChangePassword, IIntelligenceProps } from "./UserProfileInterface";
import { useForm } from "react-hook-form";
import FieldsUser from "./FieldsUser";
import Button from "../../Elements/Button/Button";
import { useChangeUser } from "./useChangeUser";
import cn from "classnames";
import ImagesList from "./ImagesList/ImagesList";

const IntelligenceUser: FC<IIntelligenceProps> = ({ user }) => {
  const { register, setValue, formState, handleSubmit } =
    useForm<IChangePassword>({ mode: "onChange" });

  const {
    changeData,
    onSubmit,
    setChangeData,
    changeImage,
    setChangeImage,
    updateImage,
  } = useChangeUser(setValue, user?.login);
  return (
    <div className={style.intelligence}>
      <div className={style.image}>
        <Image
          src={user?.avatar || logoSeo}
          alt={"avatar"}
          priority
          draggable={false}
          objectFit="cover"
          width={200}
          height={200}
        />
        <button onClick={() => setChangeImage(!changeImage)}>change</button>
      </div>
      {changeImage && <ImagesList updateImage={updateImage} />}

      <div className={style.intelligence_container}>
        <div className={style.login_container}>
          {changeData ? (
            <form onSubmit={handleSubmit(onSubmit)} className={style.fields}>
              <FieldsUser register={register} formState={formState} />
              <Button buttonStyle={1}>Update</Button>
            </form>
          ) : (
            <div className={style.login}>{user?.login}</div>
          )}
          <button
            onClick={() => setChangeData(!changeData)}
            className={cn({
              [style.not_active]: !changeData,
              [style.active]: changeData,
            })}
          >
            <Icons name="MdEdit" />
          </button>
        </div>
        <div className={style.role}>
          role: {user?.isAdmin ? "Admin" : "User"}
        </div>
      </div>
    </div>
  );
};

export default IntelligenceUser;
