import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Layout from "../components/Client/Layout";
import { useEffect } from "react";

// if (process.env.NEXT_PUBLIC_NODE_ENV !== "development") console.log = () => {};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <AppSessionProvider> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </AppSessionProvider> */}
    </Provider>
  );
}

export default MyApp;
