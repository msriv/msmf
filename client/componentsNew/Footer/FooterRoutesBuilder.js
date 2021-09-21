import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Button from "../../design-system/Button";
import { SiteRoutes } from "../../utils/routes";

const RoutesBuilder = (props) => {
  const { pathname } = props;

  const [route, setRoute] = useState({});

  useEffect(() => {
    setRoute(SiteRoutes.find((item) => item.route.match(pathname)));
  }, [pathname]);

  return (
    <div>
      <p className="font-roboto-medium uppercase text-white text-xl mb-3">
        {route && route.page}
      </p>
      {route &&
        route["sub-routes"]?.map((item) => (
          <Link key={item.slug} href={item.route}>
            <p className="text-white text-lg no-underline cursor-pointer mb-1">
              {item.page}
            </p>
          </Link>
        ))}
    </div>
  );
};

RoutesBuilder.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default RoutesBuilder;
