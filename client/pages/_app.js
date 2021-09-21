import "../styles/index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Navbar from "../componentsNew/Navbar";
import Footer from "../componentsNew/Footer";
import { useRouter } from "next/router";

//TODO Add navigation animation https://dev.to/anxinyang/page-transition-effect-in-nextjs-9ch

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Navbar pathname={router.pathname} />
      <Component {...pageProps} />
      <Footer pathname={router.pathname} />
    </>
  );
}

export default MyApp;
