import Link from "next/link";
import { SiteRoutes } from "../../utils/routes";
import RoutesBuilder from "./FooterRoutesBuilder";
import TextField from "../../design-system/TextField";
import Button from "../../design-system/Button";

const SiteFooter = (props) => {
  const { pathname } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" bg-shark-500 w-full py-16 px-36">
      <div className="flex space-x-64">
        <div>
          <p className="font-roboto-medium uppercase text-white text-xl mb-3">
            Explore MSMF
          </p>
          {SiteRoutes.map((route) => (
            <Link key={route.slug} href={`${route.route}`}>
              <p className="text-white text-lg no-underline cursor-pointer mb-1">
                {route.page}
              </p>
            </Link>
          ))}
        </div>
        <div>
          {!pathname.match("/404") ? (
            <RoutesBuilder pathname={pathname} />
          ) : null}
        </div>
        <div>
          <p className="font-roboto-medium uppercase text-white text-xl mb-3">
            Overview
          </p>
          <Link href="#">
            <p className="text-white text-lg no-underline cursor-pointer mb-1">
              Updates
            </p>
          </Link>
          <Link href="#">
            <p className="text-white text-lg no-underline cursor-pointer mb-1">
              Facilities
            </p>
          </Link>
          <Link href="#">
            <p className="text-white text-lg no-underline cursor-pointer mb-1">
              Career
            </p>
          </Link>
          <Link href="#">
            <p className="text-white text-lg no-underline cursor-pointer mb-1">
              Opportunities
            </p>
          </Link>
          <Link href="#">
            <p className="text-white text-lg no-underline cursor-pointer mb-1">
              Contact Us
            </p>
          </Link>
        </div>
      </div>
      <div className="mt-16 flex space-x-36">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white uppercase mb-2">
                Subcribe to our Emailer
              </label>
              <div className="flex">
                <TextField
                  id={"emailer-field"}
                  name={"email"}
                  placeholder={"jane.doe@email.com"}
                />
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </form>
        </div>
        <div id="social-media" className="flex flex-col space-y-2">
          <div>
            <p className="text-white uppercase mb-2">
              Follow us on our Social Media
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/company/tbi-msmf/"
              target="_blank"
            >
              <img src="/assets/social-media-icons/Vector.png" alt="linkedin" />
            </a>
            <a href="https://twitter.com/tbimsmf" target="_blank">
              <img src="/assets/social-media-icons/Group.png" alt="twitter" />
            </a>
            <a href="https://www.facebook.com/tbimsmf" target="_blank">
              <img
                src="/assets/social-media-icons/akar-icons_facebook-fill.png"
                alt="facebook"
              />
            </a>
            <a href="https://www.instagram.com/tbimsmf/" target="_blank">
              <img
                src="/assets/social-media-icons/Group-217.png"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteFooter;
