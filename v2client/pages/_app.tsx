import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import AppSessionProvider from "../components/Session/AppSessionProvider";

if (process.env.NODE_ENV !== "development") console.log = () => {};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppSessionProvider>
        <Component {...pageProps} />
      </AppSessionProvider>
    </Provider>
  );
}

export default MyApp;
