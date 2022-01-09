import { NextPage } from "next";
import IncubationHero from "../../components/Client/Incubation/Hero";
import IncubationIntroduction from "../../components/Client/Incubation/Introduction";
import IncubationImpact from "../../components/Client/Incubation/Impact";
import "../../styles/Incubation.module.css";
import IncubationProgramBenefits from "../../components/Client/Incubation/ProgramBenefits";

const Incubation: NextPage = (props) => {
  console.log(props);
  return (
    <div>
      <IncubationHero />
      <IncubationIntroduction />
      <IncubationImpact />
      <IncubationProgramBenefits />
    </div>
  );
};

export default Incubation;
