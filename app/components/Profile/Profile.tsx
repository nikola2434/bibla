import { FC } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { Heading } from "../Heading/Heading";
import IntelligenceUser from "./Intelligence/IntelligenceUser";
import style from "./Profile.module.scss";

const Profile: FC = () => {
  return (
    <div className={style.profile}>
      <Heading title="Profile" />
      <IntelligenceUser />
    </div>
  );
};

export default Profile;
