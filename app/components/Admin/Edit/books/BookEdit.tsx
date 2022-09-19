import { FC } from "react";
import { Heading } from "../../../Heading/Heading";
import { AdminNavigation } from "../../AdminNavigation/AdminNavigation";
import BookEditContainer from "./BookEditContainer";

const BookEdit: FC = () => {
  return (
    <div>
      <AdminNavigation />
      <Heading title="Edit book" />
      <BookEditContainer />
    </div>
  );
};

export default BookEdit;
