import { BreadCrumbsMemoized } from "./Breadcrumbs";

const AdminNavbar = () => {
  return (
    <nav className="px-6 py-4 w-full flex ">
      <BreadCrumbsMemoized />
    </nav>
  );
};

export default AdminNavbar;
