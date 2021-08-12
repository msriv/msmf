import { useEffect, useState } from "react";
import { PAGES } from "../../utils/sitemap";
import PhilanthropyNavbar from './PhilanthropyNavbar'
const Navbar = (props) => {

  const [page, setPage] = useState("")

  useEffect(() => {
    const route = window.location.pathname.split("/");
    setPage(route[route.length - 1])
  },[])

  return (
    <>
    <div className="bg-chambray-500 flex items-center justify-center mx-auto">
      <p className="text-lg font-bold text-white">Main Navbar Placeholder</p>
    </div>
    {page === PAGES.PHILANTHROPY ? (
      <PhilanthropyNavbar />
    ) : null}
    </>
  )

}

export default Navbar