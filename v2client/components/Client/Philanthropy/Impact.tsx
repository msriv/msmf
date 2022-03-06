import { Section, SectionContent } from "../../Common/Section";

const PhilanthropyImpact = (): JSX.Element => {
  return (
    <Section>
      <div className={`relative w-screen h-[416px]`}>
        <div id="overlay" className={`image-overlay flex flex-col h-[416px]`}>
          <div className="mt-16 w-full">
            <p className="text-[38px] font-light font-roboto text-white text-center">
              Our <b>Impact</b>
            </p>
            <div className="flex flex-wrap justify-center w-full">
              <div className="text-white text-center  w-3/12 my-16">
                <p className="text-[45px] m-0 font-bold ">25</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Startups Incubated
                </p>
              </div>
              <div className="text-white text-center w-3/12 my-16">
                <p className="text-[45px] m-0 font-bold ">25</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Startups Incubated
                </p>
              </div>
              <div className="text-white text-center w-3/12 my-16">
                <p className="text-[45px] m-0 font-bold ">25</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Startups Incubated
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/Rectangle 1550.png"
          alt="philanthropy-banner"
          className="w-screen object-cover h-[416px]"
        />
      </div>
    </Section>
  );
};

export default PhilanthropyImpact;
