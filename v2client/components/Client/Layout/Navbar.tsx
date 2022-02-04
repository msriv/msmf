import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ISitemap, Sitemap } from "../../../utils/Sitemap";

interface DropDownProps {
  route: ISitemap;
  dropMenu: Array<ISitemap>;
}

const DropDown = (props: DropDownProps) => {
  const { route, dropMenu } = props;
  const dropDownRef = useRef(null);
  const [showDropMenu, setShowDropMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // @ts-ignore
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setShowDropMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [dropDownRef]);

  const handleToggleDropMenu = () => {
    setShowDropMenu((prevState) => !prevState);
  };

  return (
    <div key={route.slug} className="relative">
      <p
        onClick={handleToggleDropMenu}
        className={`${
          route.cta ? "msmf__nav-cta" : "msmf__nav-item"
        } font-avenir-book flex items-center`}
      >
        <span>{route.page}</span>
        <span className="material-icons-round">arrow_drop_down</span>
      </p>
      {showDropMenu ? (
        <div
          className="absolute top-10 left-0 flex flex-col divide-y-2 w-40 bg-white shadow rounded z-[9999]"
          id="drop-menu"
          ref={dropDownRef}
        >
          {dropMenu.map((subRoute: ISitemap, key: number) => (
            <Link key={subRoute.slug} href={subRoute.route!}>
              <p
                onClick={handleToggleDropMenu}
                className={`${key === 0 ? "rounded-tr rounded-tl" : ""} ${
                  key === route.dropmenu!.length - 1
                    ? "rounded-bl rounded-br"
                    : ""
                } font-avenir-book py-2 px-4 hover:bg-gray-100 cursor-pointer`}
              >
                {subRoute.page}
              </p>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const Navbar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>("");
  const [isSubRoute, setIsSubRoute] = useState<boolean>(false);

  useEffect(() => {
    const pathname = router.pathname.split("/");
    const vertical = pathname[1];
    const subRoute = pathname[2];

    if (subRoute) {
      setIsSubRoute(true);
    }

    setCurrentPath(vertical);
    return () => {
      setCurrentPath("");
    };
  }, [router.pathname]);

  return (
    <nav
      className={`${
        isSubRoute ? "msmf__nav-bar-bg" : "msmf__nav-top"
      } msmf__nav-bar`}
    >
      <div id="msmf-branding">
        <img src="/assets/msmf_logo1.jpg" alt="msmf-logo" className=" w-44" />
      </div>
      <div className="msmf__nav-list">
        {Sitemap.find((path) => currentPath === path.slug)?.subroutes?.map(
          (route) => {
            if (route.route) {
              return (
                <Link key={route.slug} href={route.route}>
                  <p
                    className={`${
                      route.cta ? "msmf__nav-cta" : "msmf__nav-item"
                    } font-avenir-book flex items-center`}
                  >
                    <span>{route.page}</span>
                  </p>
                </Link>
              );
            } else if (route.dropmenu) {
              return (
                <DropDown
                  key={route.slug}
                  route={route}
                  dropMenu={route.dropmenu}
                />
              );
            }
          }
        )}
      </div>
    </nav>
  );
};

export default Navbar;
