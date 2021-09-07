import { AdminRoutes } from "../../utils/routes";
import Avatar from "../../design-system/Avatar"

const AdminNavbar = () => {
  return (
    <>
    <div className="bg-chambray-500 flex items-center justify-center mx-auto">
      <p className="text-lg font-bold text-white">Main Navbar Placeholder</p>
    </div>
    <div className="flex items-center justify-between mx-auto py-5 px-16">
      <div>
        <img
          src="/MSMF_logo.png"
          alt="MSMF Logo"
          className=" w-4/12"
        />
      </div>
      <Avatar name={"Mihir Srivastava"} />
    </div>
    </>
  )
}

export default AdminNavbar;