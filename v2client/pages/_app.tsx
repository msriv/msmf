import "../styles/globals.css";
import "../styles/fonts.css";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import AppSessionProvider from "../components/Session/AppSessionProvider";
import Layout from "../components/Client/Layout";
if (process.env.NODE_ENV !== "development") console.log = () => {};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppSessionProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppSessionProvider>
    </Provider>
  );
}

export default MyApp;
