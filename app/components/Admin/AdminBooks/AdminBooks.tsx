import { FC } from "react";
import { AdminNavigation } from "../AdminNavigation/AdminNavigation";
import { AdminBooksContainer } from "./AdminBooksContainer";

export const AdminBooks: FC = () => {
  return (
    <div>
      <AdminNavigation />
      <AdminBooksContainer />
    </div>
  );
};
