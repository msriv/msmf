import { Section, SectionContent, SectionTitle } from "../components/Common/Section";

const Facilities = () => {

  const handleFacilityPageLoad = (url: string) => {
    window.open(url, "_self");
  }

  return <Section>
    <SectionTitle title={<p>Our <b>Facilities</b></p>} />
    <SectionContent>
      <div className="flex w-full justify-center items-center space-x-10">
        <div onClick={() => handleFacilityPageLoad("/incubation/facilities")} className="transition-500 rounded shadow border border-gray-500/10 flex flex-col justify-center items-center w-5/12 hover:shadow-lg cursor-pointer">
          <p className="text-2xl font-semibold">Incubation Facilities</p>
        </div>
        <div onClick={() => handleFacilityPageLoad("/research/facilities")} className="transition-500 rounded shadow border border-gray-500/10 flex flex-col justify-center items-center w-5/12 hover:shadow-lg cursor-pointer">
          <p className="text-2xl font-semibold">Research Facilities</p>
        </div>
      </div>
    </SectionContent>
  </Section>;
};

export default Facilities;
