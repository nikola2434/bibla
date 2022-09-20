
import Profile from "../../app/components/Profile/Profile";
import { NextAuthPage } from "../../app/UI/authTypes";

const profilePage: NextAuthPage = () => {
  return <Profile />;
};
profilePage.isOnlyUser = true;

export default profilePage;
