import "../styles/globals.css";
import "../app/components/Elements/Select/react-select.scss";
import type { AppProps } from "next/app";
import HeadProviders from "../app/components/providers/HeadProviders/HeadProviders";
import { MeinProvider } from "../app/components/providers/MeinProvider";
import { TypeCheckRoles } from "../app/UI/authTypes";

type TypeAppProps = AppProps & TypeCheckRoles;

function MyApp({ Component, pageProps }: TypeAppProps) {
  return (
    <HeadProviders>
      <MeinProvider Component={Component}>
        <Component {...pageProps} />
      </MeinProvider>
    </HeadProviders>
  );
}

export default MyApp;
