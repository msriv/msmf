import { PAGES } from "../../utils/sitemap";
import PhilanthropyNavbar from './PhilanthropyNavbar'
const Navbar = (props) => {

  const {
    page
  } = props

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