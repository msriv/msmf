import Link from "next/link";
import SiteNavbar from "./SiteNavbar";
import AdminNavbar from "./AdminNavbar";

const Navbar = ({ pathname }) => {
  return !pathname.match("/404") ? (
    <div className="bg-chambray-500 shadow-md">
      <SiteNavbar pathname={pathname} />
    </div>
  ) : null;
};

export default Navbar;
