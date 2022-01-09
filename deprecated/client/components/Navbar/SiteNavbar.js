import PropTypes from "prop-types";
import RoutesBuilder from "./NavbarRoutesBuilder";
import Image from "next/image";

const SiteNavbar = (props) => {
  const { pathname } = props;

  return (
    <>
      <div className="flex items-center justify-between mx-auto py-2 px-16">
        <Image width={180} height={102} src="/msmf_logo1.jpg" />
        <RoutesBuilder pathname={pathname} />
      </div>
    </>
  );
};

SiteNavbar.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default SiteNavbar;
