import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ISitemap, Sitemap } from "../../../utils/Sitemap";

interface DropDownProps {
  route: ISitemap;
  subRoute?: string;
  dropMenu: Array<ISitemap>;
}

const DropDown = (props: DropDownProps) => {
  const { route, subRoute, dropMenu } = props;
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

  const handleToggleDropMenu = (event: any) => {
    event.stopPropagation();
    setShowDropMenu((prevState) => !prevState);
  };

  if (document) {
    import("tw-elements");
  }
  return (
    <div
      key={route.slug}
      onClick={handleToggleDropMenu}
      className={`relative ${
        subRoute && subRoute === route.slug ? "nav-active" : ""
      }`}
    >
      <div className={`msmf__nav-item font-avenir-book flex items-center`}>
        <span>{route.page}</span>
        <span className="material-icons-round">arrow_drop_down</span>
      </div>
      {showDropMenu ? (
        <div
          className="absolute top-10 left-0 flex flex-col divide-y-2 min-w-fit w-full bg-white shadow rounded z-[9999]"
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
  const [subRoute, setSubRoute] = useState("");

  useEffect(() => {
    console.log(router.pathname);
    const pathname = router.pathname.split("/");
    const vertical = pathname[1];
    const currentSubRoute = pathname[2];

    if (currentSubRoute) {
      setIsSubRoute(true);
      setSubRoute(currentSubRoute);
    } else {
      setIsSubRoute(false);
      setSubRoute("");
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
      <Link href={`/${currentPath}`}>
        <div id="msmf-branding" className="cursor-pointer">
          {currentPath === "adrc" ? (
            <img
              src="/assets/adrc-logo.png"
              alt="adrc-logo"
              className=" w-32"
            />
          ) : (
            <img
              src="/assets/msmf_logo1.jpg"
              alt="msmf-logo"
              className=" w-44 min-w-[11rem]"
            />
          )}
        </div>
      </Link>
      <div className="msmf__nav-list">
        {Sitemap.find((path) => currentPath === path.slug)?.subroutes?.map(
          (route) => {
            if (route.route) {
              return (
                <Link key={route.slug} href={route.route}>
                  <p
                    className={`relative ${
                      route.cta
                        ? `msmf__nav-cta`
                        : `msmf__nav-item ${
                            subRoute && subRoute === route.slug
                              ? "nav-active"
                              : ""
                          }`
                    } font-avenir-book flex items-center `}
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
                  subRoute={subRoute}
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
