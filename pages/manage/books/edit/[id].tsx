import BookEdit from "../../../../app/components/Admin/Edit/books/BookEdit";
import { NextAuthPage } from "../../../../app/UI/authTypes";

const BookEditPage: NextAuthPage = () => {
  return <BookEdit />;
};

BookEditPage.isOnlyAdmin = true;

export default BookEditPage;
