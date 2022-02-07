import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  const router = useRouter();
  const { children } = props;

  return (
    <div>
      {router.pathname.split("/")[1] !== "admin" ? <Navbar /> : null}
      {children}
      {router.pathname.split("/")[1] !== "admin" ? <Footer /> : null}
    </div>
  );
};

export default Layout;
