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
              src: "https://cdn.ms-mf.org/images/Incubation/research (3).png",
              alt: "research",
            }}
          />
          <ImageListItem
            title="Design Thinking"
            content="Sharpen the value of your technology through guidance in solving problems from a business and health perspective."
            vector={{
              src: "https://cdn.ms-mf.org/images/Incubation/autism.png",
              alt: "research",
            }}
          />
          <ImageListItem
            dir="rtl"
            title="Bio Implant Design & Prototyping"
            content="Provide your startup with assistance in designing the technology as well as the trials process"
            vector={{
              src: "https://cdn.ms-mf.org/images/Incubation/prototyping.png",
              alt: "research",
            }}
          />
          <ImageListItem
            title="Clinical Validation"
            content="Validate your new medical technology at Mazumdar Shaw Medical Foundation and attract investors and customers through our brand recognition"
            vector={{
              src: "https://cdn.ms-mf.org/images/Incubation/validation.png",
              alt: "research",
            }}
          />
          <ImageListItem
            dir="rtl"
            title="Pharmaceutical Development & Support"
            content="Directly interact with and recieve feedback from clinicians. Access to multi-disciplinary physician lectures and round tables"
            vector={{
              src: "https://cdn.ms-mf.org/images/Incubation/stethoscope (2).png",
              alt: "research",
            }}
          />
          <ImageListItem
            title="Genomics"
            content="Access to different areas of the facility for testing technology such as wet labs, flow cytometry, and biomaterial characterization"
            vector={{
              src: "https://cdn.ms-mf.org/images/Incubation/genomics.png",
              alt: "research",
            }}
          />
        </div>
      </SectionContent>
    </Section>
  );
};

export default ProgramBenefits;
