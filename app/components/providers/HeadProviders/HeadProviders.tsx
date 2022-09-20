import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { FC, ReactNode } from "react";
import { SecondaryColor } from "../../../../config/constants";
import FiveIcons from "./FiveIcons";

const HeadProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <NextNProgress color={SecondaryColor} height={2} startPosition={0.3} />
      <Head>
        <meta name="theme-color" content={'#43acf9'} />
        <meta name="msapplication-navbutton-color" content={"#43acf9"} />
        <FiveIcons />
      </Head>
      {children}
    </div>
  );
};

export default HeadProviders;
