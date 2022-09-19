import { FC } from "react";
import { AdminNavigation } from "../AdminNavigation/AdminNavigation";
import { AdminGenreContainer } from "./AdminGenreContainer";

export const AdminGenre: FC = () => {
  return (
    <div>
      <AdminNavigation />
      <AdminGenreContainer />
    </div>
  );
};
