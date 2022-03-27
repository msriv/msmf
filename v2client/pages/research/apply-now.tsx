import PositionCard from "../../components/Client/Research/PositionCard";
import { Section, SectionContent } from "../../components/Common/Section";

const ApplyNow = () => {
  return (
    <Section>
      <SectionContent>
        <p className="text-4xl font-bold text-center">Positions Open</p>
        <div className="my-8 p-10 rounded shadow-lg bg-white">
          <p className="text-4xl font-bold m-0">
            Technology Business Incubator
          </p>
          <div className="flex  justify-start space-x-40 mt-12">
            <PositionCard
              title="Program Manager"
              content={<a href="#">Apply Now</a>}
              vector={{
                src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
                alt: "position",
              }}
            />
            <PositionCard
              title="Project Manager"
              content={<a href="#">Apply Now</a>}
              vector={{
                src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
                alt: "position",
              }}
            />
          </div>
        </div>
        <div className="my-8 p-10 rounded shadow-lg bg-white">
          <p className="text-4xl font-bold m-0">
            Mazumdar Shaw Center for Translational Research
          </p>
          <div className="flex justify-start space-x-40 mt-12">
            <PositionCard
              title="Research Scientist"
              content={<a href="#">Apply Now</a>}
              vector={{
                src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
                alt: "position",
              }}
            />
            <PositionCard
              title="Research Assistant"
              content={<a href="#">Apply Now</a>}
              vector={{
                src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
                alt: "position",
              }}
            />
          </div>
          <div className="bg-white shadow rounded py-2 px-8 my-6 w-6/12">
            <p className="text-2xl leading-tighter flex items-center m-2">
              <span className="material-icons-round text-5xl mr-6 text-msmf-base">
                person
              </span>
              Dr. Manjula Das
            </p>
            <p className="text-2xl leading-tighter flex items-center m-2">
              <span className="material-icons-round text-5xl mr-6 text-msmf-base">
                mail
              </span>
              manjula.das@ms-mf.org
            </p>
          </div>
          <p className="text-4xl font-bold mt-6">
            Integrated Neck and Head Oncology
          </p>

          <PositionCard
            title="Research Associate/Post-Doctoral Fellow"
            content={
              <span className="w-10/12">
                PhD with 0-2 years of experience with a consistently good
                academic record. Candidate expected to have expertise in
                molecular, cell biology. Preferred expertise in high throughput
                omics analysis and prior work in the field of oncology research.
                The candidate will be encouraged to apply for proposals for
                independent fellowships as well as project funding.
              </span>
            }
            vector={{
              src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
              alt: "position",
            }}
          />
          <div className="bg-white shadow rounded py-2 px-8 my-6 w-6/12">
            <p className="text-2xl leading-tighter flex items-center m-2">
              <span className="material-icons-round text-5xl mr-6 text-msmf-base">
                person
              </span>
              Dr. Amritha Suresh
            </p>
            <p className="text-2xl leading-tighter flex items-center m-2">
              <span className="material-icons-round text-5xl mr-6 text-msmf-base">
                mail
              </span>
              amritha.suresh@ms-mf.org
            </p>
          </div>
          <p className="text-4xl font-bold mt-6">Neuro-Oncology Program</p>
          <PositionCard
            title="Junior Research Fellow"
            content={
              <>
                <p>DST SERB grant (FILE NO. CRG/2018/002523)</p>
                <p>
                  <b>Qualification:</b> Master’s degree in any branches of
                  Biology with 1-2 years of experience in handling Mammalian
                  cell culture.
                </p>
                <ol type="a">
                  <li>
                    Scholars who are selected through National Eligibility tests
                    – CSIR-UGC net including lectureship and GATE.
                  </li>
                  <li>
                    The selection process through National level examinations
                    conducted by central government departments and their
                    agencies and institutions such as DST, DBT, DAE, DOS, DRDO,
                    MHRD, ICAR, ICMR, IIT, IISc, IISER etc.
                  </li>
                </ol>
                <p>
                  <b>Job Requirements:</b> Primary culture, Mammalian cell
                  culture <br />
                  <b>Number of Positions:</b> 1
                </p>
              </>
            }
            vector={{
              src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
              alt: "position",
            }}
          />
          <PositionCard
            title="Senior Research Fellow"
            content={
              <>
                <p>ICMR grant (ISRM/12(51)/2019 2019-3177)</p>
                <p>
                  <b>Qualification:</b> Master’s degree in any branches of
                  Biology with 2 years of research experience.
                </p>
                <ol type="a">
                  <li>
                    Scholars who are selected through National Eligibility tests
                    – CSIR-UGC net including lectureship and GATE
                  </li>
                  <li>
                    The selection process through National level examinations
                    conducted by central government departments and their
                    agencies and institutions such as DST, DBT, DAE, DOS, DRDO,
                    MHRD, ICAR, ICMR, IIT, IISc, IISER etc.
                  </li>
                </ol>
                <p>
                  <b>Job Requirements:</b> Molecular Techniques for handling RNA
                  <br />
                  <b>Number of Positions:</b> 1
                </p>
              </>
            }
            vector={{
              src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
              alt: "position",
            }}
          />
          <PositionCard
            title="Research Associate"
            content={
              <>
                <p>ICMR grant (ISRM/12(54)/2019 2019-3236)</p>
                <p>
                  <b>Qualification:</b> Master’s degree in any branches of
                  Biology, bioinformatics with 2 years of research experience.
                </p>
                <ol type="a">
                  <li>
                    Scholars who are selected through National Eligibility tests
                    – CSIR-UGC net including lectureship and GATE
                  </li>
                  <li>
                    The selection process through National level examinations
                    conducted by central government departments and their
                    agencies and institutions such as DST, DBT, DAE, DOS, DRDO,
                    MHRD, ICAR, ICMR, IIT, IISc, IISER etc.
                  </li>
                </ol>
                <p>
                  <b>Job Requirements:</b> Molecular Techniques for handling RNA
                  and protien, proteomics, omic data analysis
                  <br />
                  <b>Number of Positions:</b> 1
                </p>
              </>
            }
            vector={{
              src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
              alt: "position",
            }}
          />
          <PositionCard
            title="Research Associate"
            content={"Molecular biology and cell culture expertise"}
            vector={{
              src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
              alt: "position",
            }}
          />
          <PositionCard
            title="SRF"
            content={"Bioinformatics/Machine learning/Image Analysis"}
            vector={{
              src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
              alt: "position",
            }}
          />
          <PositionCard
            title="SRF"
            content={"Molecular biology, miRNA"}
            vector={{
              src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
              alt: "position",
            }}
          />
          <PositionCard
            title="PhD Student"
            content={"with NET qualification or ICMR fellowship"}
            vector={{
              src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
              alt: "position",
            }}
          />
          <PositionCard
            title="Student Internship"
            content={"six months bioinformatics project"}
            vector={{
              src: "https://cdn.ms-mf.org/images/Research/badge 4.png",
              alt: "position",
            }}
          />
          <div className="bg-white shadow rounded py-2 px-8 my-6 w-6/12">
            <p className="text-2xl leading-tighter flex items-center m-2">
              <span className="material-icons-round text-5xl mr-6 text-msmf-base">
                person
              </span>
              Dr. Ravi Sirdeshmukh
            </p>
            <p className="text-2xl leading-tighter flex items-center m-2">
              <span className="material-icons-round text-5xl mr-6 text-msmf-base">
                mail
              </span>
              ravisirdeshmukh@gmail.com
            </p>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default ApplyNow;
