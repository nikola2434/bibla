import { useAppDispatch } from "./../../../../hooks/useAppDispatch";
import { axiosUserApi } from "../../../../services/axios/axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IChangePassword } from "./UserProfileInterface";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { useUpdateUserMutation } from "../../../../services/users/usersApi";

export const useChangeUser = (
  setValue: UseFormSetValue<IChangePassword>,
  login: string | undefined
) => {
  const { query } = useRouter();
  const userID = String(query.id);
  const [changeData, setChangeData] = useState(false);
  const [changeImage, setChangeImage] = useState(false);

  useEffect(() => {
    setValue("login", login || "");
  }, [changeData]);

  const [updateUserApi] = useUpdateUserMutation();

  const onSubmit: SubmitHandler<IChangePassword> = async (data) => {
    await updateUserApi({
      data: {
        email: data.login,
        password:
          data.password === data.newPassword ? data.newPassword : data.password,
      },
      id: userID,
    });

    setChangeData(false);
  };
  const updateImage = async (url: string) => {
    const user = await axiosUserApi.getByIdUser(userID);
    await updateUserApi({
      id: userID,
      data: { avatar: url },
    });
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
