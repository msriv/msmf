import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import MSMFLoader from "./MSMFLoader";
import Navbar from "./Navbar";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  const router = useRouter();
  const { children } = props;
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const showPageLoader = () => {
    setIsPageLoaded(true);
    window.removeEventListener("load", showPageLoader);
  };

  useEffect(() => {
    window.addEventListener("load", showPageLoader);
  }, [router.pathname]);

  return (
    <div>
      {router.pathname.split("/")[1] !== "admin" ? <Navbar /> : null}
      <MSMFLoader open={!isPageLoaded} />
      {children}
      {router.pathname.split("/")[1] !== "admin" ? <Footer /> : null}
    </div>
  );
};

export default Layout;
