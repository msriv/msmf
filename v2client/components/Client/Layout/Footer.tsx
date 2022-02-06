import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Sitemap } from "../../../utils/Sitemap";
import Link from "next/link";

const GetInTouchContent: {
  [vertical: string]: {
    address?: string;
    phoneNumbers?: Array<string>;
    email?: string;
    location?: string;
  };
} = {
  "": {
    address: `A-Block, 8th Floor #258/A, NH Health City, Bangalore - 560 099`,
    phoneNumbers: ["+91-807 122 2351", "+91-802 780 3456"],
    email: "msmf@ms-mf.org",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5627527677534!2d77.69266841508325!3d12.80686937193603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c33ea16001d%3A0x51693da9325cf807!2sMazumdar%20Shaw%20Medical%20Center!5e0!3m2!1sen!2sin!4v1644062770890!5m2!1sen!2sin",
  },
  philanthropy: {
    address: `A-Block, 8th Floor #258/A, NH Health City, Bangalore - 560 099`,
    phoneNumbers: ["+91-807 122 2351", "+91-802 780 3456"],
    email: "msmf@ms-mf.org",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5627527677534!2d77.69266841508325!3d12.80686937193603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c33ea16001d%3A0x51693da9325cf807!2sMazumdar%20Shaw%20Medical%20Center!5e0!3m2!1sen!2sin!4v1644062770890!5m2!1sen!2sin",
  },
  adrc: {
    address:
      "3rd block, International Wing, Narayana Health City, Bommasandra, Bangalore-12",
    phoneNumbers: ["+91-807 122 2351", "+91-802 780 3456"],
  },
  incubation: {
    address:
      "258/A, Hosur Road, Bommasandra Industrial Area, Bengaluru - 560099",
    phoneNumbers: ["+91-807 122 2351", "+91-802 780 3456"],
    email: "tbi@ms-mf.org",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5627527677534!2d77.69266841508325!3d12.80686937193603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c33ea16001d%3A0x51693da9325cf807!2sMazumdar%20Shaw%20Medical%20Center!5e0!3m2!1sen!2sin!4v1644062770890!5m2!1sen!2sin",
  },
  research: {
    address: "A-Block, 8th Floor #258/A, NH Health City",
    phoneNumbers: ["+91-807 122 2351", "+91-802 780 3456"],
  },
};

const Footer = () => {
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
    <footer className="w-full relative mt-10 footer-bg p-12">
      <div className="relative mx-auto bg-msmf-base p-8 z-10 flex space-x-20 items-start">
        <div id="get-in-touch" className="w-full">
          <p className="font-semibold text-white text-2xl">Get in touch</p>
          <hr className="border-msmf-dark my-4" />
          {GetInTouchContent[currentPath]?.address && (
            <p className="text-white text-lg mt-6">
              <span className="font-semibold italic">Meet us:</span>{" "}
              {GetInTouchContent[currentPath].address}
            </p>
          )}
          {GetInTouchContent[currentPath]?.phoneNumbers && (
            <p className="text-white text-lg mt-6">
              <span className="font-semibold italic">Call us:</span>{" "}
              {GetInTouchContent[currentPath]?.phoneNumbers?.join(", ")}
            </p>
          )}
          {GetInTouchContent[currentPath]?.email && (
            <p className="text-white text-lg mt-6">
              <span className="font-semibold italic">Email us:</span>{" "}
              {GetInTouchContent[currentPath]?.email}
            </p>
          )}
          {GetInTouchContent[currentPath]?.location && (
            <p className="text-white text-lg mt-6">
              <span className="font-semibold italic">Locate us:</span>{" "}
              <iframe
                src={GetInTouchContent[currentPath]?.location}
                width="400"
                height="200"
                style={{ marginTop: "1rem", marginBottom: "0" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </p>
          )}
        </div>
        <div id="get-connected" className="w-full">
          <p className="font-semibold text-white text-2xl">Get connected</p>
          <hr className="border-msmf-dark my-4" />
          <div className="flex items-center justify-between">
            <img
              src="/assets/images/Common/icons8-linkedin-192.png"
              alt="linkedin"
              className="w-10 h-10"
            />
            <img
              src="/assets/images/Common/icons8-facebook-192.png"
              alt="facebook"
              className="w-10 h-10"
            />
            <img
              src="/assets/images/Common/icons8-instagram-144.png"
              alt="instagram"
              className="w-10 h-10"
            />
            <img
              src="/assets/images/Common/icons8-twitter-144.png"
              alt="twitter"
              className="w-10 h-10"
            />
            <img
              src="/assets/images/Common/icons8-medium-256.png"
              alt="medium"
              className="w-10 h-10"
            />
            <img
              src="/assets/images/Common/icons8-youtube-192.png"
              alt="youtube"
              className="w-10 h-10"
            />
          </div>
        </div>
        <div id="sitemap" className="w-full">
          <p className="font-semibold text-white text-2xl">Sitemap</p>
          <hr className="border-msmf-dark my-4" />
          <Link href={"/"}>
            <p className="text-white text-lg mt-2 cursor-pointer">MSMF</p>
          </Link>
          <Link href={`/${currentPath}`}>
            <p className="text-white text-lg mt-2 cursor-pointer">Home</p>
          </Link>
          {Sitemap.find((path) => currentPath === path.slug)?.subroutes?.map(
            (route) => {
              if (route.route) {
                return (
                  <Link key={route.slug} href={route.route}>
                    <p className="text-white text-lg mt-2 cursor-pointer">
                      {route.page}
                    </p>
                  </Link>
                );
              }
            }
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
