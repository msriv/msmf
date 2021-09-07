import { useRouter } from "next/router";
import SiteNavbar from "./SiteNavbar";
import AdminNavbar from "./AdminNavbar";

const Navbar = () => {
  const router = useRouter();

  return (
    router.pathname.match("admin") ? (
      <AdminNavbar />
    ) : (
      <SiteNavbar pathname={router.pathname} />
    )
  )
}

export default Navbar;