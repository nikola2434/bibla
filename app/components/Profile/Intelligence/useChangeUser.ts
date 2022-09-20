import { useAppDispatch } from "./../../../../hooks/useAppDispatch";
import { axiosUserApi } from "./../../../../services/axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IChangePassword } from "./UserProfileInterface";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { useUpdateUserMutation } from "../../../../services/usersApi";
import { userApi } from "../../../../services/auth/userAuthApi";

export const useChangeUser = (
  setValue: UseFormSetValue<IChangePassword>,
  login: string | undefined
) => {
  const { query } = useRouter();
  const userID = String(query.id);
  const [changeData, setChangeData] = useState(false);
  const [changeImage, setChangeImage] = useState(false);
  const { update } = useAppDispatch();
  useEffect(() => {
    setValue("login", login || "");
  }, [changeData]);

  const [updateUserApi] = useUpdateUserMutation();

  const onSubmit: SubmitHandler<IChangePassword> = async (data) => {
    const userApi = await axiosUserApi.getByIdUser(userID);
    await updateUserApi({
      id: userID,
      user: {
        ...userApi,
        user: {
          ...userApi.user,
          login: data.login,
          password:
            data.newPassword === "" ? userApi.user.password : data.newPassword,
        },
      },
    });
    await update({ id: userID });
    setChangeData(false);
  };
  const updateImage = async (url: string) => {
    const user = await axiosUserApi.getByIdUser(userID);
    await updateUserApi({
      id: userID,
      user: { ...user, user: { ...user.user, avatar: url } },
    });
    await update({ id: userID });
    setChangeImage(false);
  };

  return {
    onSubmit,
    changeData,
    setChangeData,
    changeImage,
    setChangeImage,
    updateImage,
  };
};
