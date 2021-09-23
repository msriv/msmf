import Link from "next/link";
import SiteNavbar from "./SiteNavbar";
import AdminNavbar from "./AdminNavbar";

const Navbar = ({ pathname }) => {
  return (
    <>
      <div className="flex items-center justify-evenly my-5">
        <div>
          <Link href="/">
            <img
              src="/MSMF_logo.png"
              alt="MSMF Logo"
              className=" w-4/12 cursor-pointer"
            />
          </Link>
        </div>
        <Link href="/philanthropy">
          <button
            type="button"
            className={`${
              pathname.match("philanthropy")
                ? "bg-guardsman-red text-white"
                : "bg-transparent text-guardsman-red"
            } transition ease-in-out duration-200 hover:bg-guardsman-red border border-guardsman-red rounded px-5 py-2 hover:text-white flex justify-center items-center`}
          >
            Philanthropy
          </button>
        </Link>
        <Link href="/research">
          <button
            type="button"
            className={`${
              pathname.match("research")
                ? "bg-christine text-white"
                : "bg-transparent text-christine"
            } transition ease-in-out duration-200 hover:bg-christine border border-christine rounded px-5 py-2  hover:text-white flex justify-center items-center`}
          >
            Research
          </button>
        </Link>
        <Link href="/incubation">
          <button
            type="button"
            className={`${
              pathname.match("incubation")
                ? "bg-apple text-white"
                : "bg-transparent text-apple"
            } transition ease-in-out duration-200 hover:bg-apple border border-apple rounded px-5 py-2 hover:text-white flex justify-center items-center`}
          >
            Incubation
          </button>
        </Link>
        <Link href="/diagnostics">
          <button
            type="button"
            className={`${
              pathname.match("diagnostics")
                ? "bg-mountain-meadow text-white"
                : "bg-transparent text-mountain-meadow"
            } transition ease-in-out duration-200 hover:bg-mountain-meadow border border-mountain-meadow rounded px-5 py-2  hover:text-white flex justify-center items-center`}
          >
            Diagnostics
          </button>
        </Link>
      </div>
      {!pathname.match("/404") ? (
        <div className="bg-silver-100 shadow-md">
          {pathname.match("admin") ? (
            <AdminNavbar />
          ) : (
            <SiteNavbar pathname={pathname} />
          )}
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
