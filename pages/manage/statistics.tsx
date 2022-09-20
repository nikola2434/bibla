import { Admin } from "../../app/components/Admin/Admin";
import { NextAuthPage } from "../../app/UI/authTypes";

const Statistics: NextAuthPage = () => {
  return <Admin />;
};

Statistics.isOnlyAdmin = true;

export default Statistics;
