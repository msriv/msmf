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
              <div className="text-white text-center  w-4/12 my-16">
                <p className="text-[45px] m-0 font-bold ">37</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Patients under care
                </p>
              </div>
              <div className="text-white text-center w-4/12 my-16">
                <p className="text-[45px] m-0 font-bold ">38</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Patients completed treatment 20-21
                </p>
              </div>
              <div className="text-white text-center w-4/12 my-16">
                <p className="text-[45px] m-0 font-bold ">600</p>
                <p className="text-[19px] uppercase font-bold m-0 w-8/12 mx-auto">
                  Patients receiving nutritional support per month
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.ms-mf.org/images/Rectangle 1550.png"
          alt="philanthropy-banner"
          className="w-screen object-cover h-[416px]"
        />
      </div>
    </Section>
  );
};

export default PhilanthropyImpact;
