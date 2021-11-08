import Layout from "../../../components/Layout";
import ProgramSection from "../../../components/ProgramSection";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../../components/Section";
import Button from "../../../design-system/Button";
import { BASE_API_URL } from "../../../lib/constants";
import Image from "next/image";
import { Grid } from "@mui/material";

const Bionest = () => (
  <Layout>
    <ProgramSection
      title={"BIONEST"}
      description={
        <span>
          Over the decade MSMF & Narayana Health has put in several forms of
          infrastructure to promote healthcare innovation and entrepreneurship.
          The Narayana Health City located in Bommasandra, Bangalore houses the
          Mazumdar Shaw Medical Foundation and the Translational Research wing
          each formed to serve translational research unit in healthcare. In
          this infrastructure to promote healthcare innovation in 2014 the
          Department of Science and Technology – Government of India conferred
          upon Mazumdar Shaw Medical Foundation the status of the Technology
          Business Incubator too. All of these milestones have created a unique
          innovation layer to the DNA of the organisation. The BIONEST proposal
          is a move to bring all the initiatives under one umbrella and
          leap-frog to form and create a larger impact potential in the entire
          ecosystem in healthcare technology.
          <br /> From Villgro standpoint, the goal of nurturing impact driven
          enterprises begun in 2001 and since then has formed multiple
          initiatives to promote the same. Villgro has worked enormously
          specifically to look at healthcare impact for the bottom of the
          pyramid and how to identify and nurture technologies that also address
          the BoP section of the society. Under the research hospital framework
          of BIONEST, both the institutions wish to combine their strengths and
          form a unique infrastructure meant to focus on the clinical validation
          and fast-tracking the path to commercialisation in the impact sector.
          The innovations developed and nurtured at this incubator can have a
          significant social impact on the marginalized communities in India.
          The people at the bottom of the pyramid require access to economical
          solutions to address their increasing and complex healthcare
          challenges. The incubatees of Bionest strive to create scalable,
          profitable, and sustainable enterprises which will provide high
          quality and low-cost medical care.
        </span>
      }
      noCallToAction
      noImages
    >
      <Section>
        <SectionTitle type="main">
          Our <span className="font-inter-semibold">Programs</span>
        </SectionTitle>
        <div className="flex justify-between mt-10">
          <div>
            <Image
              src={`${BASE_API_URL}/assets/incubation/Birac_logo-p27rfaqiz6hjbqiifb22r9n5mzhxb0m9bdbdv2rspq.png`}
              alt="birac"
              width={219}
              height={157}
            />
          </div>
          <div>
            <Image
              src={`${BASE_API_URL}/assets/incubation/villgro_logo.png`}
              alt="birac"
              width={219}
              height={225}
            />
          </div>
          <div>
            <Image
              src={`${BASE_API_URL}/assets/incubation/Narayana Health City Logo 1.png`}
              alt="birac"
              width={351}
              height={155}
            />
          </div>
        </div>
      </Section>
    </ProgramSection>
    <div className="flex mt-16 justify-center">
      <Button type="button" onClick={() => {}}>
        Apply Now
      </Button>
    </div>
  </Layout>
);

export default Bionest;
