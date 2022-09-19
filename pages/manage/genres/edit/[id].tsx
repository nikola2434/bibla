import { GenreEdit } from "../../../../app/components/Admin/Edit/genre/GenreEdit";
import { NextAuthPage } from "../../../../app/UI/authTypes";

const GenreEditPage: NextAuthPage = () => {
  return <GenreEdit />;
};

GenreEditPage.isOnlyAdmin = true;

export default GenreEditPage;
