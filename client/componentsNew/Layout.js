import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "spring" }}
      className=""
    >
      <Navbar pathname={router.pathname} />
      {children}
      <Footer pathname={router.pathname} />
    </motion.main>
  );
};

export default Layout;
