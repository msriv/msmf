import { NextPage } from "next";
import IncubationHero from "../../components/Client/Incubation/Hero";
import IncubationIntroduction from "../../components/Client/Incubation/Introduction";
import IncubationImpact from "../../components/Client/Incubation/Impact";
import IncubationProgramBenefits from "../../components/Client/Incubation/ProgramBenefits";
import IncubationPrograms from "../../components/Client/Incubation/Programs";
import IncubationIncubatees from "../../components/Client/Incubation/Incubatees";
import IncubateesTestimonials from "../../components/Client/Incubation/Testimonials";

const Incubation: NextPage = (props) => {
  return (
    <>
      <IncubationHero />
      <IncubationIntroduction />
      <IncubationImpact />
      <IncubationProgramBenefits />
      <IncubationPrograms />
      <IncubationIncubatees />
      <IncubateesTestimonials />
    </>
  );
};

export default Incubation;
