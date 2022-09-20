import { FC } from "react";
import { Heading } from "../../../Heading/Heading";
import { AdminNavigation } from "../../AdminNavigation/AdminNavigation";
import UserEditContainer from "./UserEditContainer/UserEditContainer";

const UserEdit: FC = () => {
  return (
    <div>
      <AdminNavigation />
      <Heading title="Edit user" />
      <UserEditContainer />
    </div>
  );
};

export default UserEdit;
