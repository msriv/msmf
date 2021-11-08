import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import NavCTA from "./NavCTA";
import { SiteRoutes } from "../../utils/routes";

const RoutesBuilder = (props) => {
  const { pathname } = props;

  const [route, setRoute] = useState({});

  useEffect(() => {
    setRoute(
      SiteRoutes.find((item) => {
        const parallel = pathname.split("/")[1];
        return item.route.match(parallel);
      })
    );
  }, [pathname]);

  return (
    <div className="flex space-x-28 items-center">
      {route &&
        route["sub-routes"]?.map((item) => {
          let classList = "text-lg text-white font-inter-medium cursor-pointer";
          if (pathname === item.route) {
            classList += " active-nav";
          }
          return item.cta ? (
            <NavCTA key={item.slug}>{item.page}</NavCTA>
          ) : (
            <Link key={item.slug} href={item.route}>
              <span className={classList}>{item.page}</span>
            </Link>
          );
        })}
    </div>
  );
};

RoutesBuilder.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default RoutesBuilder;
