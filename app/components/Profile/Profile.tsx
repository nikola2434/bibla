import { FC } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { Heading } from "../Heading/Heading";
import IntelligenceUser from "./Intelligence/IntelligenceUser";

const Profile: FC = () => {
  return (
    <div>
      <Heading title="Profile" />
      <IntelligenceUser />
    </div>
  );
};

export default Profile;
