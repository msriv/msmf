import Campaigns from "../../components/Client/Philanthropy/Campaigns";
import PhilanthropyHero from "../../components/Client/Philanthropy/Hero";
import PhilanthropyImpact from "../../components/Client/Philanthropy/Impact";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";
import Link from "next/link";

const Philanthropy = () => {
  return (
    <div>
      <PhilanthropyHero />
      <Section>
        <SectionTitle
          title={
            <span>
              Our <b>Programs</b>
            </span>
          }
        />
        <SectionContent>
          <div className="flex justify-between w-full">
            <Link href={"/philanthropy/programs"}>
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-lg rounded bg-white p-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-philanthropy flex justify-center">
                  <img
                    src="assets/images/Philanthropy/food-donation 1.png"
                    alt="food-donation"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center text-2xl">
                  Nutritional Support
                </p>
              </div>
            </Link>
            <Link href={"/philanthropy/programs"}>
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-lg rounded bg-white p-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-philanthropy flex justify-center">
                  <img
                    src="assets/images/Philanthropy/drugs 1.png"
                    alt="covid"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center text-2xl">Drug Discount</p>
              </div>
            </Link>
            <Link href={"/philanthropy/programs"}>
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-lg rounded bg-white p-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-philanthropy flex justify-center">
                  <img
                    src="assets/images/ADRC/kidney 1.png"
                    alt="transplant"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center text-2xl">
                  Support for Medical Care
                </p>
              </div>
            </Link>
            <Link href={"/philanthropy/programs"}>
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-lg rounded bg-white p-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-philanthropy flex justify-center">
                  <img
                    src="assets/images/ADRC/kidney 1.png"
                    alt="transplant"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center text-2xl">
                  Activities for children in the Pediatric Oncology Wing
                </p>
              </div>
            </Link>
          </div>
        </SectionContent>
      </Section>
      <PhilanthropyImpact />
      <Campaigns />
    </div>
  );
};

export default Philanthropy;
