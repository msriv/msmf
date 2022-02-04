import { ContentCard } from "../../components/Common/ContentCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const Academics = () => {
  return (
    <Section>
      <SectionTitle title={<b>Academic Excellence Program</b>} />
      <SectionContent>
        <ContentCard>
          <p className="text-4xl font-bold">PhD Programs</p>
          <p className="text-xl">
            Mazumdar Shaw Medical Foundation (MSMF) offers PhD in Basic and
            Clinical Research to Practicing Clinicians and Master’s Degree
            holders in relevant field. The degree is awarded by Manipal Academy
            of Higher Education (MAHE). The guidelines for application and the
            details of the program and MAHE registration are provided in the
            attached document.
          </p>
          <p className="text-xl">
            For any details or clarifications please contact
            <br /> Dr Manjula Das, PhD Coordinator (link can also be provided)
            <br />
            Email: manjula.msmf@gmail.com
            <br />
            Link to the guideline document attached.{" "}
          </p>
          <button className="msmf__cta-btn">Download</button>
        </ContentCard>
        <ContentCard>
          <p className="text-4xl font-bold">Internship</p>
          <p className="text-xl">
            MSMF offers internships for 3-6 months for the students from the
            clinical field aspiring to attain experience in the research field
            and a long-term internship (6 months to 1 year) for basic science
            students. Students who are required to undergo an internship as a
            part of their academic curriculum will be considered for the
            program. The interns will be selected as per the institutional
            procedure. Interested candidates are requested to apply to the
            respective programs.
          </p>
        </ContentCard>
      </SectionContent>
    </Section>
  );
};

export default Academics;
