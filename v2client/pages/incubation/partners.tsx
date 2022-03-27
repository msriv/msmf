import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const Partners = () => {
  return (
    <Section>
      <SectionTitle
        title={
          <span>
            Our <b>Partners</b>
          </span>
        }
      />
      <SectionContent>
        <div className="relative flex flex-wrap justify-center w-full">
          <div className=" shadow-md rounded m-4 w-3/12 p-6 bg-white flex flex-col items-center self-stretch">
            <p className="uppercase text-msmf-base font-bold text-xl text-center">
              Our Funding Partners
            </p>
            <img
              src="https://cdn.ms-mf.org/images/Incubation/Bionest_logo.jpg"
              alt="Bionest"
              className="w-6/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/DST logo.png"
              alt="DST"
              className="w-7/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/icmr_logo_new.png"
              alt="ICMR"
              className="w-8/12"
            />
          </div>
          <div className="shadow-md rounded m-4 w-3/12 p-6 bg-white flex flex-col items-center self-stretch">
            <p className="uppercase text-msmf-base font-bold text-xl text-center">
              Our International Partners
            </p>
            <img
              src="https://cdn.ms-mf.org/images/Incubation/jetro.png"
              alt="Jetro"
              className="w-6/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/basel.png"
              alt="Basel"
              className="w-7/12"
            />
          </div>
          <div className="shadow-md rounded m-4 w-3/12 p-6 bg-white flex flex-col items-center self-stretch">
            <p className="uppercase text-msmf-base font-bold text-xl text-center">
              Our National Collaborators
            </p>
            <img
              src="https://cdn.ms-mf.org/images/Incubation/BBC logo.png"
              alt="BBC"
              className="w-9/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/MIRAINXT.png"
              alt="MIRAINXT"
              className="w-11/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/Manipal.png"
              alt="Manipal"
              className="w-8/12"
            />
          </div>
          <div className="shadow-md rounded w-3/12 m-4 p-6 bg-white flex flex-col items-center self-stretch">
            <p className="uppercase text-msmf-base font-bold text-xl text-center">
              Our Investment Partners
            </p>
            <img
              src="https://cdn.ms-mf.org/images/Incubation/Axillor logo.png"
              alt="Axillor"
              className="w-9/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/villgro.png"
              alt="Villgro"
              className="w-11/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/GE logo.png"
              alt="GE logo"
              className="w-8/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/The-GAIN-revised.png"
              alt="GAIN"
              className="w-8/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/Arthayan.png"
              alt="Arthayan"
              className="w-8/12"
            />
          </div>
          <div className="shadow-md rounded w-3/12 m-4 p-6 bg-white flex flex-col items-center self-stretch">
            <p className="uppercase text-msmf-base font-bold text-xl text-center">
              Our Hospital Partners
            </p>
            <img
              src="https://cdn.ms-mf.org/images/Incubation/NITTE-LOGO.jpg"
              alt="NITTE"
              className="w-7/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/adichunchanagiri university.png"
              alt="adichunchanagiri university"
              className="w-8/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/SAVEETA DENTAL.jpg"
              alt="SAVEETA DENTAL"
              className="w-6/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/SCUDDER MEMOTIAL HOSPITAL.jpg"
              alt="SCUDDER MEMOTIAL HOSPITAL"
              className="w-6/12"
            />
            <img
              src="https://cdn.ms-mf.org/images/Incubation/Shivakrupa hospital.png"
              alt="Shivakrupa hospital"
              className="w-10/12"
            />
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default Partners;
