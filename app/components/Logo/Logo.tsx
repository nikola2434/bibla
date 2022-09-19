import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logo from "../../../public/logo.png";
import style from "./Logo.module.scss";

export const Logo: FC = () => {
  return (
    <Link href="/">
      <a className={style.logo}>
        <Image src={logo} draggable={false} alt="" />
      </a>
    </Link>
  );
};
