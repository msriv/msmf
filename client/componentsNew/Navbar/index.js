import { useRouter } from "next/router";
import SiteNavbar from "./SiteNavbar";
import AdminNavbar from "./AdminNavbar";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
    <div className="flex justify-evenly my-5">
      <div>
        <img
          src="/MSMF_logo.png"
          alt="MSMF Logo"
          className=" w-4/12"
        />
      </div>
      
    </div>
    <div className="bg-silver-100 shadow-md">
      {router.pathname.match("admin") ? (
      <AdminNavbar />
    ) : (
      <SiteNavbar pathname={router.pathname} />
    )}
    </div>
    </>
    
  )
}

export default Navbar;