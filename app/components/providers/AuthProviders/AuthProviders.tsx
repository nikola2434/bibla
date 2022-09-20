import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { FC, useEffect } from "react";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { TypeCheckRoles } from "../../../UI/authTypes";

import { ICheckRolesProps } from "./CheckRole";

const DynamicAuthProviders = dynamic<ICheckRolesProps>(
  () => import("./CheckRole").then((mod) => mod.CheckRole),
  {
    ssr: false,
  }
);

export const AuthProviders: FC<ICheckRolesProps> = ({
  Component: { isOnlyAdmin, isOnlyUser },
  children,
}) => {
  const { user } = useAppSelector((state) => state.users);
  const { logout } = useAppDispatch();

  useEffect(() => {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken && user) logout();
  }, []);

  return !isOnlyAdmin && !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicAuthProviders Component={{ isOnlyAdmin, isOnlyUser }}>
      {children}
    </DynamicAuthProviders>
  );
};
