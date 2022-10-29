import {
  IUpdateUser,
  useGetUserByIdQuery,
  useUpdateAdminUserMutation,
} from "./../../../../../../services/users/usersApi";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";

import { IUser } from "../../../../../UI/types";
import { getAdminUrl } from "../../../../../../config/url.config";
export const useUpdateUser = (setValue: UseFormSetValue<IUser>) => {
  const { query, push } = useRouter();
  const userId = String(query.id);
  const { data: User, isSuccess, isLoading } = useGetUserByIdQuery(userId);

  useEffect(() => {
    if (User) {
      setValue("isAdmin", User.isAdmin);
    }
  }, [isSuccess]);

  const [updateUser] = useUpdateAdminUserMutation();
  const onSubmit: SubmitHandler<IUpdateUser> = async (data) => {
    await updateUser({ isAdmin: data.isAdmin || false, id: userId });
    push(getAdminUrl("users"));
  };
  return { onSubmit, isLoading };
};
