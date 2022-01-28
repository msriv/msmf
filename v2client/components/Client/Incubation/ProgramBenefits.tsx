import { Section, SectionContent, SectionTitle } from "../../Common/Section";
import ImageListItem from "../../Common/ImageListItem";

const ProgramBenefits = () => {
  return (
    <Section>
      <SectionTitle
        title={
          <span>
            Our <b>Program Benefits</b>
          </span>
        }
      />
      <SectionContent>
        <div className="grid gap-14 grid-cols-2">
          <ImageListItem
            title="Clinical Immersion"
            dir="rtl"
            content="Direct experience in the clinical environment in which medical devices are used. Improved understanding of diseases and treatment decisions."
            vector={{
              src: "/assets/images/Incubation/research (3) 1.png",
              alt: "research",
            }}
          />
          <ImageListItem
            title="Design Thinking"
            content="Sharpen the value of your technology through guidance in solving problems from a business and health perspective."
            vector={{
              src: "/assets/images/Incubation/autism 1.png",
              alt: "research",
            }}
          />
          <ImageListItem
            dir="rtl"
            title="Bio Implant Design & Prototyping"
            content="Provide your startup with assistance in designing the technology as well as the trials process"
            vector={{
              src: "/assets/images/Incubation/prototyping 1.png",
              alt: "research",
            }}
          />
          <ImageListItem
            title="Clinical Validation"
            content="Validate your new medical technology at Mazumdar Shaw Medical Foundation and attract investors and customers through our brand recognition"
            vector={{
              src: "/assets/images/Incubation/validation 1.png",
              alt: "research",
            }}
          />
          <ImageListItem
            dir="rtl"
            title="Pharmaceutical Development & Support"
            content="Directly interact with and recieve feedback from clinicians. Access to multi-disciplinary physician lectures and round tables"
            vector={{
              src: "/assets/images/Incubation/stethoscope (2) 1.png",
              alt: "research",
            }}
          />
          <ImageListItem
            title="Genomics"
            content="Access to different areas of the facility for testing technology such as wet labs, flow cytometry, and biomaterial characterization"
            vector={{
              src: "/assets/images/Incubation/genomics 1.png",
              alt: "research",
            }}
          />
        </div>
      </SectionContent>
    </Section>
  );
};

export default ProgramBenefits;
