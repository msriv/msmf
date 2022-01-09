import AdminNavbar from "./Navbar";
import Sidebar from "./Sidebar";

interface AdminLayoutProps {
  children: JSX.Element;
}

const AdminLayout = (props: AdminLayoutProps) => {
  const { children } = props;
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="m-4 h-full rounded shadow">
        <AdminNavbar />
        <div className="flex w-full divide-x items-start px-6">
          <div className="w-2/12">
            <Sidebar />
          </div>
          <div className="w-10/12 p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
