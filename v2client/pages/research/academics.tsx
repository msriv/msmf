import { ContentCard } from "../../components/Common/ContentCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const Academics = () => {
  const downloadFile = () => {
    window.open(
      "https://drive.google.com/file/d/1IlSBexLssqCdjNrpCXOrjYWHFg7KBDOb/view",
      "_blank"
    );
  };

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
            <br /> Dr Manjula Das, PhD Coordinator
            <br />
            Email:{" "}
            <a href="mailto:manjula.msmf@gmail.com">manjula.msmf@gmail.com</a>
          </p>
          <button className="msmf__cta-btn" onClick={downloadFile}>
            Download
          </button>
        </ContentCard>
        <ContentCard>
          <p className="text-4xl font-bold">Internship</p>
          <p className="text-xl">
            MSMF offers internship for 3-6 months for the students from the
            clinical field aspiring to attain experience in the research field
            and a long-term internship (6 months to 1 year) for the basic
            science students. Students who are required to undergo internship as
            a part of their academic curriculum will be considered for the
            program. The interns will be selected as per the institutional
            procedure. Interested candidates are requested to apply to the
            respective programs.
          </p>
          <br />{" "}
          <p className="m-0 mb-2">
            <b>Integrated Head and Neck Oncology:</b>{" "}
            <a href="mailto:amritha.suresh@msmf.org">amritha.suresh@msmf.org</a>
          </p>{" "}
          <p className="m-0 mb-2">
            <b>Molecular Immunology:</b>{" "}
            <a href="mailto:manjula.das@ms-mf.org">manjula.das@ms-mf.org</a>
          </p>
          <p className="m-0 mb-2">
            <b>Neuro-oncology:</b>{" "}
            <a href="mailto:atanu@ms-mf.org">atanu@ms-mf.org</a>
          </p>
          <p className="m-0 mb-2">
            <b>Product Research Program:</b>{" "}
            <a href="mailto:smitha.pk@ms-mf.org">smitha.pk@ms-mf.org</a>
          </p>
          <p className="m-0 mb-2">
            <b>Computational Biology:</b>{" "}
            <a href="mailto:sujan.dhar@ms-mf.org">sujan.dhar@ms-mf.org</a>
          </p>
        </ContentCard>
      </SectionContent>
    </Section>
  );
};

export default Academics;
