import { useState } from "react"
import AdminNavigationButton from "../../componentsNew/AdminNavigationButton"
import Dashboard from "./Dashboard.js";
import DashboardIcon from "../../componentsNew/Icons/DashboardIcon.svg";
import Cube from "../../componentsNew/Icons/Cube.svg";
import ChevronRight from "../../componentsNew/Icons/ChevronRight.svg";
import Facilities from "./Facilities.js";
import Typography from "../../design-system/Typography"

const Admin = () => {

  const [component, setComponent] = useState(<Dashboard />)
  const [open, setOpen] = useState(false)

  const handleMenu = () => {}

  const handleComponent = (comp) => {
    setComponent(comp)
  }

  return (
    <div className="flex m-2">
      <div className="m-4 p-4 w-2/12 flex flex-col space-y-4 bg-deep-cerulean-100 bg-opacity-50 rounded-2xl">
        <div onClick={handleMenu} className="cursor-pointer self-end w-2/12 transition duration-500 ease-in-out  hover:bg-chambray-200 hover:text-black hover:shadow-lg rounded-xl flex flex-row justify-center items-center p-2">
          <ChevronRight className="w-5" />
        </div>
        <div onClick={() => handleComponent(<Dashboard />)} className="cursor-pointer transition duration-500 ease-in-out hover:bg-chambray-200 hover:text-black hover:shadow-lg rounded-xl flex flex-row items-center space-x-4 p-2">
          <DashboardIcon className="w-5" />
          <span >Dashboard</span>
        </div>
        <div onClick={() => handleComponent(<Facilities />)}  className="cursor-pointer transition duration-500 ease-in-out hover:bg-chambray-200 hover:text-black hover:shadow-lg rounded-xl flex flex-row items-center space-x-4 p-2">
          <Cube className="w-5" />
          <span >Add Facilities</span>
        </div>
        </div>
      <div className="w-10/12 m-4 p-4">
        {component}
      </div>
      
    </div>
  )
}

export default Admin