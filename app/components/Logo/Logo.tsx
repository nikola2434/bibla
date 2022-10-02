import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logo from "../../../public/logo.png";
import style from "./Logo.module.scss";

export const Logo: FC<{ setIsOpen: () => void }> = ({ setIsOpen }) => {
  return (
    <Link href="/">
      <a className={style.logo} onClick={() => setIsOpen()}>
        <Image src={logo} draggable={false} alt="" />
      </a>
    </Link>
  );
};
