import { FC } from "react";
import { AdminNavigation } from "../AdminNavigation/AdminNavigation";
import { AdminUsersContainer } from "./AdminUsersContainer";

export const AdminUsers: FC = () => {
  return (
    <div>
      <AdminNavigation />
      <AdminUsersContainer />
    </div>
  );
};
