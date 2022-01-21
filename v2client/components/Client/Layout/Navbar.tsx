import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Sitemap } from "../../../utils/Sitemap";

const Navbar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    const pathname = router.pathname.split("/")[1];
    setCurrentPath(pathname);
    return () => {
      setCurrentPath("");
    };
  }, [router.pathname]);

  return (
    <nav className="msmf__nav-top msmf__nav-bar ">
      <div id="msmf-branding">
        <img src="/assets/msmf_logo1.jpg" alt="msmf-logo" className=" w-44" />
      </div>
      <div className="msmf__nav-list">
        {Sitemap.find((path) => currentPath === path.slug)?.subroutes.map(
          (route) => (
            <Link key={route.slug} href={route.route}>
              <span
                className={`${
                  route.cta ? "msmf__nav-cta" : "msmf__nav-item"
                } font-avenir-book`}
              >
                {route.page}
              </span>
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;