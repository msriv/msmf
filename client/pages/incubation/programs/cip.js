import Layout from "../../../components/Layout";
import ProgramSection from "../../../components/ProgramSection";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../../components/Section";
import Button from "../../../design-system/Button";

const CIP = () => (
  <Layout>
    <ProgramSection
      title={"CIP: CLINICAL IMMERSION PROGRAM"}
      description={`A Hot-Desking service to explore and introspect the healthcare ecosystem by interacting with our Doctors, Scientists, Researchers, Bio-Medical team, startups, manufacturers as well as regulatory advice.

This unique ecosystem that is prevalent at the Mazumdar Shaw Medical Foundation can be the breeding ground for healthcare startup ideas. The CIP : Clinical Immersion Program is tailor made understanding the needs of early stage exploratory entrepreneurs, clinicians, researchers, technology enthusiasts who want to understand the healthcare ecosystem`}
      noCallToAction
      noImages
    />
    <Section>
      <SectionTitle type="subsection">
        <p className="font-inter-semibold">Program Details</p>
      </SectionTitle>
      <SectionContent>
        <div className="flex flex-wrap justify-evenly">
          <div
            style={{ width: 301, height: 185 }}
            className="bg-silver-400 m-4"
          ></div>
          <div
            style={{ width: 301, height: 185 }}
            className="bg-silver-400 m-4"
          ></div>
          <div
            style={{ width: 301, height: 185 }}
            className="bg-silver-400 m-4"
          ></div>
          <div
            style={{ width: 301, height: 185 }}
            className="bg-silver-400 m-4"
          ></div>
          <div
            style={{ width: 301, height: 185 }}
            className="bg-silver-400 m-4"
          ></div>
          <div
            style={{ width: 301, height: 185 }}
            className="bg-silver-400 m-4"
          ></div>
        </div>
      </SectionContent>
    </Section>
    <div className="flex mt-16 justify-center">
      <Button type="button" onClick={() => {}}>
        Apply Now
      </Button>
    </div>
  </Layout>
);

export default CIP;
