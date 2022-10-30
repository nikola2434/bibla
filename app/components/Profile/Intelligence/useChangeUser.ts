import { useState, useEffect } from "react";
import { IChangePassword } from "./UserProfileInterface";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import {
  useGetProfileQuery,
  useUpdateImageMutation,
  useUpdateUserMutation,
} from "../../../../services/users/usersApi";

export const useChangeUser = (setValue: UseFormSetValue<IChangePassword>) => {
  const [changeData, setChangeData] = useState(false);
  const [changeImage, setChangeImage] = useState(false);

  const [updateImageUser] = useUpdateImageMutation();
  const { data: user, isLoading, isSuccess } = useGetProfileQuery(undefined);
  useEffect(() => {
    if (user) setValue("login", user.email);
  }, [isSuccess]);

  const [updateUserApi] = useUpdateUserMutation();

  const onSubmit: SubmitHandler<IChangePassword> = async (data) => {
    await updateUserApi({
      data: {
        email: data.login,
      },
    });

    setChangeData(false);
  };
  const updateImage = async (url: string) => {
    await updateImageUser({ data: { url } });

    setChangeImage(false);
  };

  return {
    user,
    isLoading,
    onSubmit,
    changeData,
    setChangeData,
    changeImage,
    setChangeImage,
    updateImage,
  };
};
