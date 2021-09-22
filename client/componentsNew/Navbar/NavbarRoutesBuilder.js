import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Button from "../../design-system/Button";
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
    <div className="flex space-x-20 items-center">
      {route &&
        route["sub-routes"]?.map((item) =>
          item.cta ? (
            <Button key={item.slug} type={"button"}>
              {item.page}
            </Button>
          ) : (
            <Link key={item.slug} href={item.route}>
              <span className="text-lg text-shark-500 font-inter-medium cursor-pointer">
                {item.page}
              </span>
            </Link>
          )
        )}
    </div>
  );
};

RoutesBuilder.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default RoutesBuilder;
