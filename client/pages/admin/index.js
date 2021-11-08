import { useState } from "react";
import Dashboard from "./Dashboard.js";
import DashboardIcon from "../../components/Icons/DashboardIcon.svg";
import Cube from "../../components/Icons/Cube.svg";
import ChevronRight from "../../components/Icons/ChevronRight.svg";
import Facilities from "./Facilities";
import AssetManager from "./AssetManager";
import ImageIcon from "../../components/Icons/Image.svg";
import Layout from "../../components/Layout";

// Blogs
// Members
// Publications
// Assets Manager
// Contract Features

const Admin = () => {
  const [components, setComponent] = useState(<Dashboard />);
  const [open, setOpen] = useState(false);

  const handleMenu = () => {};

  const handleComponent = (comp) => {
    setComponent(comp);
  };

  return (
    <Layout>
      <div className="flex m-10 bg-blue-ribbon-100 bg-opacity-30 rounded-lg p-4">
        <div className="m-4 p-4 w-2/12 flex flex-col space-y-4 bg-deep-cerulean-300 bg-opacity-50 rounded-2xl">
          <div
            onClick={handleMenu}
            className="cursor-pointer self-end w-2/12 transition duration-200 ease-in-out  hover:bg-chambray-900 hover:text-white hover:shadow-lg rounded-xl flex flex-row justify-center items-center p-2"
          >
            <ChevronRight className="w-5" />
          </div>
          <div
            onClick={() => handleComponent(<Dashboard />)}
            className="cursor-pointer transition duration-200 ease-in-out hover:bg-deep-cerulean-900 hover:text-white  rounded-xl flex flex-row items-center space-x-4 p-2"
          >
            <DashboardIcon className="w-5" />
            <span>Dashboard</span>
          </div>
          <div
            onClick={() => handleComponent(<Facilities />)}
            className="cursor-pointer transition duration-200 ease-in-out hover:bg-chambray-900 hover:text-white  rounded-xl flex flex-row items-center space-x-4 p-2"
          >
            <Cube className="w-5" />
            <span>Add Facilities</span>
          </div>
          <div
            onClick={() => handleComponent(<AssetManager />)}
            className="cursor-pointer transition duration-200 ease-in-out hover:bg-chambray-900 hover:text-white  rounded-xl flex flex-row items-center space-x-4 p-2"
          >
            <ImageIcon className="w-5" />
            <span>Asset Manager</span>
          </div>
        </div>
        <div className="w-10/12 m-4 p-4">{components}</div>
      </div>
    </Layout>
  );
};

export default Admin;
