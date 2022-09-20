import { FC } from "react";
import { Heading } from "../../../Heading/Heading";
import { AdminNavigation } from "../../AdminNavigation/AdminNavigation";
import AuthorEditContainer from "./AuthorEditContainer";

const AuthorEdit: FC = () => {
  return (
    <div>
      <AdminNavigation />
      <Heading title="Edit authors" />
      <AuthorEditContainer />
    </div>
  );
};

export default AuthorEdit;
