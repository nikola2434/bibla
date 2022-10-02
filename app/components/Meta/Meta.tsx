import Head from "next/head";
import { FC, ReactNode } from "react";

interface IMetaProps {
  title: string;
  UrlImage?: string;
  children: ReactNode;
}

function getCurrentTitle(title: string): string {
  return `${title} | bibLA`;
}

const Meta: FC<IMetaProps> = ({ title, UrlImage, children }) => {
  return (
    <>
      <Head>
        <title itemProp="headline">{getCurrentTitle(title)}</title>
        <meta property="og:locale" content="en" />
        <meta property="og:image" content={UrlImage} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  );
};

export default Meta;
