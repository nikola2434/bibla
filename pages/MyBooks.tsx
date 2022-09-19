import { GetStaticProps } from "next";
import MyBooks from "../app/components/MyBooks/MyBooks";
import { NextAuthPage } from "../app/UI/authTypes";

const MyBooksPage: NextAuthPage = () => {
  return <MyBooks />;
};
MyBooksPage.isOnlyUser = true;

export default MyBooksPage;
