import { FC } from "react";
import { Heading } from "../../../Heading/Heading";
import { AdminNavigation } from "../../AdminNavigation/AdminNavigation";
import { GenreEditContainer } from "./GenreEditContainer";

export const GenreEdit: FC = () => {
  return (
    <div>
      <AdminNavigation />
      <Heading title="Genre edit" />
      <GenreEditContainer />
    </div>
  );
};
