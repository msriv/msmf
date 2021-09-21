import Layout from "../componentsNew/Layout";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout>
      <div
        style={{ height: "60vh" }}
        className=" w-screen flex flex-col space-y-10 justify-center items-center"
      >
        <div className="">
          <img
            src="/MSMF_logo.png"
            alt="MSMF Logo"
            className=" w-4/12 mx-auto"
          />
        </div>
        <div>
          <p className="font-avenir-book text-lg">
            Oops! Looks like you wandered far enough. Please return to{" "}
            <Link href="/">
              <span className="font-avenir-heavy text-chambray-500 no-underline cursor-pointer hover:no-underline">
                Home
              </span>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
