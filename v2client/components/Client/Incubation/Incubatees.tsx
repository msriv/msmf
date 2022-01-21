import { Section, SectionContent, SectionTitle } from "../../Common/Section";

const Incubatees = () => {
  return (
    <Section>
      <SectionTitle
        title={
          <span>
            Our <b>Incubatees</b>
          </span>
        }
      />
      <SectionContent>
        <div className="flex flex-wrap justify-center items-center w-full mt-10">
          <div className="flex justify-center w-3/12 my-2">
            <img
              src="/assets/images/Incubation/FSD logo 1.png"
              alt="FSD logo"
            />
          </div>
          <div className="flex justify-center w-3/12 my-2">
            <img
              src="/assets/images/Incubation/SIAMAF 1.png"
              alt="SIAMAF logo"
            />
          </div>
          <div className="flex justify-center w-3/12 my-2">
            <img
              src="/assets/images/Incubation/Thermaissance Logo - 1.png"
              alt="Thermaissance logo"
            />
          </div>
          <div className="flex justify-center w-3/12 my-2">
            <img
              src="/assets/images/Incubation/logo_farcast_horizontal_4C 1.png"
              alt="Farcast logo"
            />
          </div>
          <div className="flex justify-center w-3/12 my-2">
            <img
              src="/assets/images/Incubation/tutle logo 1.png"
              alt="Tutle logo"
            />
          </div>
          <div className="flex justify-center w-3/12 my-2">
            <img
              src="/assets/images/Incubation/64 Codon - Grey (1) 1.png"
              alt="64 Codon logo"
            />
          </div>
          <div className="flex justify-center w-3/12 my-2">
            <img
              src="/assets/images/Incubation/TeraLumen Logo Final 1.png"
              alt="TeraLumen logo"
            />
          </div>
          <div className="flex justify-center w-3/12 my-2">
            <img
              src="/assets/images/Incubation/Logo white owl(Oxyliv) 1.png"
              alt="Oxyliv logo"
            />
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default Incubatees;
