import { NextPage } from "next";
import Process from "../../components/Client/Incubation/GetIncubated/Process";
import RegistrationForm from "../../components/Client/Incubation/GetIncubated/RegistrationForm";
import Requirements from "../../components/Client/Incubation/GetIncubated/Requirements";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const GetIncubated: NextPage = () => {
  return (
    <Section>
      <SectionTitle
        title={
          <span>
            Get <b>Incubated</b>
          </span>
        }
      />
      <SectionContent>
        <div className="rounded bg-white shadow-md p-8">
          <p className="font-bold text-4xl text-center">Apply for Incubation</p>
          <p className="text-xl text-center">
            TBI Incubates early-stage Med-tech devices, which provides
            healthcare solutions to the poor. We handhold start-ups that are
            have built a minimum viable product that has early traction and a
            committed team working full time on creating an impactful solution
            for the poor
          </p>
          <p className="font-bold text-4xl text-center">What we look for?</p>
          <Requirements />
          <p className="font-bold text-4xl text-center">The Process</p>
          <Process />
          <p className="font-bold text-4xl text-center">Registration Form</p>
          <RegistrationForm />
        </div>
      </SectionContent>
    </Section>
  );
};

export default GetIncubated;
