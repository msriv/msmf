import { AdminRoutes } from "../../utils/routes";
import Avatar from "../../design-system/Avatar";

const AdminNavbar = () => {
  return (
    <>
      <div className="flex items-center justify-end mx-auto py-5 px-16">
        <Avatar name={"Mihir Srivastava"} />
      </div>
    </>
  );
};

export default AdminNavbar;
