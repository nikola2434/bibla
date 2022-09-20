import { AdminAuthors } from "../../app/components/Admin/AdminAuthors/AdminAuthors";
import { NextAuthPage } from "../../app/UI/authTypes";

const AuthorsStatisticsPage: NextAuthPage = () => {
  return <AdminAuthors />;
};
AuthorsStatisticsPage.isOnlyAdmin = true;

export default AuthorsStatisticsPage;
