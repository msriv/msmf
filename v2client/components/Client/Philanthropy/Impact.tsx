import { Section, SectionContent } from "../../Common/Section";

const PhilanthropyImpact = (): JSX.Element => {
  return (
    <Section>
      <div className="relative w-screen h-[612px]">
        <div id="overlay" className="image-overlay flex flex-col h-[612px]">
          <div className="mt-16 w-full">
            <p className="text-[38px] font-light font-roboto text-white text-center">
              Our <b>Impact</b>
            </p>
            <div className="flex flex-wrap justify-center w-full mt-10">
              <div className="text-white text-center  w-3/12 my-16">
                <p className="text-[45px] m-0 font-bold ">25</p>
                <p className="text-[13px] uppercase font-bold m-0">
                  Startups Incubated
                </p>
              </div>
              <div className="text-white text-center w-3/12 my-16">
                <p className="text-[45px] m-0 font-bold ">25</p>
                <p className="text-[13px] uppercase font-bold m-0">
                  Startups Incubated
                </p>
              </div>
              <div className="text-white text-center w-3/12 my-16">
                <p className="text-[45px] m-0 font-bold ">25</p>
                <p className="text-[13px] uppercase font-bold m-0">
                  Startups Incubated
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="http://api.ms-mf.org/assets/IncubationBanner.png"
          alt="incubation-banner"
          className="w-screen h-full object-cover"
        />
      </div>
    </Section>
  );
};

export default PhilanthropyImpact;
