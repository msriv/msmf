import SiteFooter from "./SiteFooter";

const Footer = ({ pathname }) => {
  return (
    <>
      <div className="mt-20">
        {!pathname.match("admin") ? <SiteFooter pathname={pathname} /> : null}
      </div>
    </>
  );
};

export default Footer;
