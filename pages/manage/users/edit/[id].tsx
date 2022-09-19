import UserEdit from "../../../../app/components/Admin/Edit/User/UserEdit";
import { NextAuthPage } from "../../../../app/UI/authTypes";

const EditUserPage: NextAuthPage = () => {
  return <UserEdit />;
};

EditUserPage.isOnlyAdmin = true;

export default EditUserPage;
