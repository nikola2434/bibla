import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logoSeo from "../../../public/logoSeo.png";
import Meta from "../Meta/Meta";
import style from "./ErrorPage.module.scss";

const ErrorPage: FC<{ title: string }> = ({ title }) => {
  return (
    <Meta title="Page not found">
      <div className={style.container_error}>
        <Link href={"/"}>
          <a className={style.link}>
            <Image src={logoSeo} alt="Home" width={120} height={100} />
          </a>
        </Link>
        <div className={style.title}>{title}</div>
      </div>
    </Meta>
  );
};

export default ErrorPage;
