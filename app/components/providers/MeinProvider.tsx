import { StyledEngineProvider } from "@mui/material";
import { FC, ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { TypeCheckRoles } from "../../UI/authTypes";
import { Layout } from "../layout/Layout";
import Meta from "../Meta/Meta";
import { AuthProviders } from "./AuthProviders/AuthProviders";

export const MeinProvider: FC<{ children: ReactNode } & TypeCheckRoles> = ({
  children,
  Component: { isOnlyAdmin, isOnlyUser },
}) => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <Meta
          title="Read with pleasure!"
          UrlImage="http://localhost:3000/public/logoSeo.png"
        >
          <AuthProviders Component={{ isOnlyAdmin, isOnlyUser }}>
            <StyledEngineProvider injectFirst>
              <Layout>{children}</Layout>
            </StyledEngineProvider>
          </AuthProviders>
        </Meta>
      </Provider>
    );
  }
};
