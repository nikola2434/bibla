import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { TypeCheckRoles } from "../../../UI/authTypes";

export interface ICheckRolesProps extends TypeCheckRoles {
  children: ReactNode;
}

export const CheckRole: FC<TypeCheckRoles> = ({
  Component: { isOnlyAdmin, isOnlyUser },
  children,
}) => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.users);

  if (user?.isAdmin) return <>{children}</>;

  if (isOnlyAdmin) {
    router.pathname !== "/404" && router.replace("/404");
    return null;
  }

  const isUser = user && !user.isAdmin;

  if (isUser && isOnlyUser) {
    return <>{children}</>;
  } else {
    router.pathname !== "/auth" && router.replace("/auth");
    return null;
  }
};
