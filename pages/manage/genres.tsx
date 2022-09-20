
import { AdminGenre } from "../../app/components/Admin/AdminGenre/AdminGenre";
import { NextAuthPage } from "../../app/UI/authTypes";

const GenresStatisticsPage: NextAuthPage = () => {
  return <AdminGenre />;
};
GenresStatisticsPage.isOnlyAdmin = true;

export default GenresStatisticsPage;
