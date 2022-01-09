import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const Layout = ({ children }) => {
  const router = useRouter();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default Layout;
