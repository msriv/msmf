import { useRouter } from "next/router";
import SiteFooter from "./SiteFooter";

const Footer = () => {
  const router = useRouter();

  return (
    <>
    <div className="bg-silver-100 shadow-md">
      {!router.pathname.match("admin") ? (  <SiteFooter pathname={router.pathname} />  ) : null}
    </div>
    </>
    
  )
}

export default Footer;