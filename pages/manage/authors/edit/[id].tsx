import AuthorEdit from "../../../../app/components/Admin/Edit/authors/AuthorEdit";
import { NextAuthPage } from "../../../../app/UI/authTypes";

const AuthorsEditPage: NextAuthPage = () => {
  return <AuthorEdit />;
};
AuthorsEditPage.isOnlyAdmin = true;

export default AuthorsEditPage;
