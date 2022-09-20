import { FC } from "react";
import { AdminNavigation } from "../AdminNavigation/AdminNavigation";
import { AdminAuthorsContainer } from "./AdminAuthorsContainer";

export const AdminAuthors: FC = () => {
  return (
    <div>
      <AdminNavigation />
      <AdminAuthorsContainer />
    </div>
  );
};
