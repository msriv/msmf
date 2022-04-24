import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { Sitemap } from "../../../utils/Sitemap";
import Link from "next/link";

const GetInTouchContent: {
  [vertical: string]: {
    address?: ReactNode;
    phoneNumbers?: ReactNode;
    email?: ReactNode;
    location?: string;
  };
} = {
  "": {
    address: (
      <p>A-Block, 8th Floor #258/A, NH Health City, Bangalore - 560 099</p>
    ),
    phoneNumbers: <p>+91-807 122 2351, +91-802 780 3456</p>,
    email: (
      <a href="mailto:msmf@ms-mf.org" target="_blank" rel="noreferrer">
        msmf@ms-mf.org
      </a>
    ),
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5627527677534!2d77.69266841508325!3d12.80686937193603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c33ea16001d%3A0x51693da9325cf807!2sMazumdar%20Shaw%20Medical%20Center!5e0!3m2!1sen!2sin!4v1644062770890!5m2!1sen!2sin",
  },
  philanthropy: {
    address: (
      <p>A-Block, 8th Floor #258/A, NH Health City, Bangalore - 560 099</p>
    ),
    phoneNumbers: <p>+91-807 122 2351</p>,
    email: (
      <a href="mailto:msmf@ms-mf.org" target="_blank" rel="noreferrer">
        msmf@ms-mf.org
      </a>
    ),
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5627527677534!2d77.69266841508325!3d12.80686937193603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c33ea16001d%3A0x51693da9325cf807!2sMazumdar%20Shaw%20Medical%20Center!5e0!3m2!1sen!2sin!4v1644062770890!5m2!1sen!2sin",
  },
  adrc: {
    address: (
      <p>
        3rd block, International Wing, Narayana Health City, Bommasandra,
        Bangalore-12
      </p>
    ),
    phoneNumbers: <p>+91-807 122 2351, +91-802 780 3456</p>,
    email: (
      <>
        <p>
          <b>Dr. Manjula Das</b> -{" "}
          <a
            href="mailto:manjula.msmf@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            manjula.msmf@gmail.com
          </a>
        </p>
        <p>
          <b>Dr. Sujan Dhar</b> -{" "}
          <a
            href="mailto:sujan.dhar@ms-mf.org"
            target="_blank"
            rel="noreferrer"
          >
            sujan.dhar@ms-mf.org
          </a>
        </p>
      </>
    ),
  },
  incubation: {
    address: (
      <p>258/A, Hosur Road, Bommasandra Industrial Area, Bengaluru - 560099</p>
    ),
    phoneNumbers: <p>+91-807 122 2351, +91-802 780 3456</p>,
    email: (
      <a href="mailto:msmf@ms-mf.org" target="_blank" rel="noreferrer">
        msmf@ms-mf.org
      </a>
    ),
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5627527677534!2d77.69266841508325!3d12.80686937193603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c33ea16001d%3A0x51693da9325cf807!2sMazumdar%20Shaw%20Medical%20Center!5e0!3m2!1sen!2sin!4v1644062770890!5m2!1sen!2sin",
  },
  research: {
    address: <p>A-Block, 8th Floor #258/A, NH Health City</p>,
    phoneNumbers: <p>+91-807 122 2351, +91-802 780 3456</p>,
  },
};

const Footer = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>("");
  const [isSubRoute, setIsSubRoute] = useState<boolean>(false);

  useEffect(() => {
    const pathname = router.pathname.split("/");
    let vertical = pathname[1];
    let subRoute = pathname[2];

    if (
      !["incubation", "research", "adrc", "philanthropy"].includes(vertical)
    ) {
      subRoute = vertical;
      vertical = "";
    }
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
            <div className="text-white text-lg mt-6">
              <span className="font-semibold italic">Meet us:</span>{" "}
              {GetInTouchContent[currentPath].address}
            </div>
          )}
          {GetInTouchContent[currentPath]?.phoneNumbers && (
            <div className="text-white text-lg mt-6">
              <span className="font-semibold italic">Call us:</span>{" "}
              {GetInTouchContent[currentPath]?.phoneNumbers}
            </div>
          )}
          {GetInTouchContent[currentPath]?.email && (
            <div className="text-white text-lg mt-6">
              <span className="font-semibold italic">Email us:</span>{" "}
              {GetInTouchContent[currentPath]?.email}
            </div>
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
            <a
              href="https://www.linkedin.com/company/67262314/admin/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/images/Common/icons8-linkedin-192.png"
                alt="linkedin"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://www.instagram.com/tbimsmf/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/images/Common/icons8-instagram-144.png"
                alt="instagram"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://twitter.com/tbimsmf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/images/Common/icons8-twitter-144.png"
                alt="twitter"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://medium.com/tbi-msmf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/images/Common/icons8-medium-256.png"
                alt="medium"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCilEfZZn1MmhPsPxBA1xZSg"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/images/Common/icons8-youtube-192.png"
                alt="youtube"
                className="transition-500 w-10 h-10"
              />
            </a>
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
