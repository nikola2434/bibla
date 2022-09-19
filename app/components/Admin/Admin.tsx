import { FC } from "react";
import style from "./Admin.module.scss";
import { AdminNavigation } from "./AdminNavigation/AdminNavigation";
import { AdminStats } from "./AdminStats/AdminStats";

import Meta from "../Meta/Meta";

export const Admin: FC = () => {
  return (
    <Meta title="Statistics">
      <div className={style.admin}>
        <AdminNavigation />
        <AdminStats />
      </div>
    </Meta>
  );
};
