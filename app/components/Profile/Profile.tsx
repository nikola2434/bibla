import { FC } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { Heading } from "../Heading/Heading";
import IntelligenceUser from "./Intelligence/IntelligenceUser";

const Profile: FC = () => {
  const user = useAppSelector((state) => state.users.user);

  return (
    <div>
      <Heading title="Profile" />
      <IntelligenceUser user={user} />
    </div>
  );
};

export default Profile;
