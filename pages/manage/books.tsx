import { Admin } from "../../app/components/Admin/Admin";
import { AdminBooks } from "../../app/components/Admin/AdminBooks/AdminBooks";
import { NextAuthPage } from "../../app/UI/authTypes";

const BooksStatisticsPage: NextAuthPage = () => {
  return <AdminBooks />;
};
BooksStatisticsPage.isOnlyAdmin = true;

export default BooksStatisticsPage;
