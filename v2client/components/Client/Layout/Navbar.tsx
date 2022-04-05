import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ISitemap, Sitemap } from "../../../utils/Sitemap";

interface DropDownProps {
  route: ISitemap;
  subRoute?: string;
  dropMenu: Array<ISitemap>;
  align?: "left" | "right";
  position?: "top" | "bottom" | "left" | "right";
  type: "nested-dropdown" | "normal";
}

const DropDown = (props: DropDownProps) => {
  const { route, subRoute, dropMenu, align, position, type } = props;

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

  return (
    <div
      key={route.slug}
      onClick={handleToggleDropMenu}
      className={`relative ${
        subRoute && subRoute === route.slug ? "nav-active" : ""
      }`}
    >
      <div
        className={`font-helvetica font-bold flex items-center ${
          type === "nested-dropdown"
            ? "transition-500 rounded font-helvetica font-bold px-4 py-2 hover:bg-sky-500/20 cursor-pointer whitespace-nowrap text-black flex justify-between"
            : "msmf__nav-item"
        }`}
      >
        <span>{route.page}</span>
        <span className="material-icons-round">arrow_drop_down</span>
      </div>
      {showDropMenu ? (
        <div
          className={`absolute ${
            type === "normal" ? `top-16 ${align === "left" ? "left-0" : "right-0"}` : "top-0 left-[110%]"
          } flex flex-col min-w-fit w-full bg-white shadow-md rounded z-[9999] p-4`}
          id="drop-menu"
          ref={dropDownRef}
        >
          <div
            className={`absolute ${
              type === "normal" ? `-top-1 ${align === "left" ? "left-5" : "right-5"}` : "top-3 -left-2"
            } rotate-45 bg-white w-4 h-4 -z-10`}
          ></div>
          {dropMenu
            .sort((a, b) => (a.page < b.page ? -1 : a.page > b.page ? 1 : 0))
            .map((SR: ISitemap) =>
              SR.dropmenu ? (
                <DropDown
                  key={SR.slug}
                  route={SR}
                  subRoute={subRoute}
                  dropMenu={SR.dropmenu}
                  position={"right"}
                  type={"nested-dropdown"}
                />
              ) : (
                <Link key={SR.slug} href={SR.route!}>
                  <p
                    onClick={handleToggleDropMenu}
                    className={`transition-500 rounded font-helvetica font-bold px-4 py-2 hover:bg-sky-500/20 cursor-pointer whitespace-nowrap`}
                  >
                    {SR.page}
                  </p>
                </Link>
              )
            )}
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
          (route, key, arr) => {
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
                    } font-helvetica font-bold flex items-center `}
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
                  align={key < arr.length - 1 ? "left" : "right"}
                  type={"normal"}
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
