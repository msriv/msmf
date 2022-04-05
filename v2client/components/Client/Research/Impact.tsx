import { Section, SectionContent } from "../../Common/Section";

const ResearchImpact = (): JSX.Element => {
  return (
    <Section>
      <div className="relative w-screen h-[394px]">
        <div id="overlay" className="image-overlay flex flex-col h-[394px]">
          <div className="mt-16 w-full">
            <p className="text-[38px] font-light font-roboto text-white text-center">
              Our <b>Impact</b>
            </p>
            <div className="flex flex-wrap justify-center w-full">
              <div className="text-white text-center  w-3/12 my-16">
                <p className="text-[45px] m-0 font-bold ">70</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Publications
                </p>
              </div>
              <div className="text-white text-center w-3/12 my-16">
                <p className="text-[45px] m-0 font-bold ">10</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Patents (Filed)
                </p>
              </div>
              <div className="text-white text-center w-3/12 my-16">
                <p className="text-[45px] m-0 font-bold ">2</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Patents (Granted)
                </p>
              </div>
              <div className="text-white text-center w-3/12 my-16">
                <p className="text-[45px] m-0 font-bold ">20</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Grants
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.ms-mf.org/images/Rectangle 1550.png"
          alt="philanthropy-banner"
          className="w-screen object-cover h-[394px]"
        />
      </div>
    </Section>
  );
};

export default ResearchImpact;
