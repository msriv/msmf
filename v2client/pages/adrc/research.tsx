import { ContentCard } from "../../components/Common/ContentCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const researchProjects = [
  {
    diseaseArea: "HNSCC",
    projectTitle: "Early detection of Oral Malignancies",
    members: ["Dr. Sumsum Sunny", "Dr. Amritha Suresh"],
    publication: "NA",
  },
  {
    diseaseArea: "COVID",
    projectTitle: "Rise and Fall of the third wave",
    members: ["Dr. Sujan Dhar", "Kunal Basu"],
    publication: "In Process",
  },
  {
    diseaseArea: "Brain Tumor",
    projectTitle: "Multiplexed detection of IDH mutations",
    members: ["Kiruthiga", "Gouri"],
    publication: "NA",
  },
];

const Research = () => {
  return (
    <Section>
      <SectionTitle
        title={
          <span>
            Our <b>Research</b>
          </span>
        }
      />
      <SectionContent>
        {researchProjects.map((project, key) => (
          <ContentCard key={key}>
            <p className="font-bold text-[#6A6A6A] m-0">
              Disease Area: {project.diseaseArea}
            </p>
            <p className="font-semibold text-4xl mt-0">
              {project.projectTitle}
            </p>
            <p className="font-bold uppercase text-[#6A6A6A] m-0">Members: </p>
            {project.members.map((member, key) => (
              <p className="text-[#535050] m-0" key={key}>
                {member}
              </p>
            ))}
            <p className="mb-0 font-bold text-[#6A6A6A] uppercase">
              Publication:{" "}
            </p>
            <p className="m-0">{project.publication}</p>
          </ContentCard>
        ))}
      </SectionContent>
    </Section>
  );
};
export default Research;
