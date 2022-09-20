import { getCookies } from "./../../../../../../config/getCookies";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import {
  useGetByIdQuery,
  useUpdateUserMutation,
} from "../../../../../../services/usersApi";
import { IUser } from "../../../../../UI/types";
import { getAdminUrl } from "../../../../../../config/url.config";
export const useUpdateUser = (setValue: UseFormSetValue<IUser>) => {
  const { query, push } = useRouter();
  const userId = String(query.id);
  const { data: User, isSuccess, isLoading } = useGetByIdQuery(userId);

  useEffect(() => {
    if (User) {
      setValue("isAdmin", User.user.isAdmin);
    }
  }, [isSuccess]);

  const [updateUser] = useUpdateUserMutation();
  const onSubmit: SubmitHandler<IUser> = async (data) => {
    if (User) {
      await updateUser({
        id: userId,
        user: {
          accessToken: getCookies(),
          refreshToken: getCookies(),
          id: userId,
          user: { ...User.user, isAdmin: data.isAdmin },
        },
      });
    }
    push(getAdminUrl("users"));
  };
  return { onSubmit, isLoading };
};
