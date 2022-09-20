import { AdminUsers } from "../../app/components/Admin/AdminUsers/AdminUsers";
import { NextAuthPage } from "../../app/UI/authTypes";

const usersPage: NextAuthPage = () => {
  return <AdminUsers />;
};

usersPage.isOnlyAdmin = true;

export default usersPage;
