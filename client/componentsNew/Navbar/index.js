import Link from "next/link";
import SiteNavbar from "./SiteNavbar";
import AdminNavbar from "./AdminNavbar";

const Navbar = ({ pathname }) => {
  return (
    <>
      <div className="flex items-center justify-evenly my-5">
        <div>
          <img src="/MSMF_logo.png" alt="MSMF Logo" className=" w-4/12" />
        </div>
        <Link href="/philanthropy">
          <button
            type="button"
            className="transition ease-in-out duration-200 bg-transparent hover:bg-guardsman-red border border-guardsman-red rounded px-5 py-2 text-guardsman-red hover:text-white flex justify-center items-center"
          >
            Philanthropy
          </button>
        </Link>
        <Link href="/research">
          <button
            type="button"
            className="transition ease-in-out duration-200 bg-transparent hover:bg-christine border border-christine rounded px-5 py-2 text-christine hover:text-white flex justify-center items-center"
          >
            Research
          </button>
        </Link>
        <Link href="/incubation">
          <button
            type="button"
            className="transition ease-in-out duration-200 bg-transparent hover:bg-apple border border-apple rounded px-5 py-2 text-apple hover:text-white flex justify-center items-center"
          >
            Incubation
          </button>
        </Link>
        <Link href="/diagnostics">
          <button
            type="button"
            className="transition ease-in-out duration-200 bg-transparent hover:bg-mountain-meadow border border-mountain-meadow rounded px-5 py-2 text-mountain-meadow hover:text-white flex justify-center items-center"
          >
            Diagnostics
          </button>
        </Link>
      </div>
      <div className="bg-silver-100 shadow-md">
        {pathname.match("admin") ? (
          <AdminNavbar />
        ) : (
          <SiteNavbar pathname={pathname} />
        )}
      </div>
    </>
  );
};

export default Navbar;
