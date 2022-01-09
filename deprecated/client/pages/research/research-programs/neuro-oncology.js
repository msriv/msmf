import AlumniCard from "../../../components/Cards/AlumniCard";
import ContentCard from "../../../components/Cards/ContentCard";
import PersonCard from "../../../components/Cards/PersonCard";
import PublicationCard from "../../../components/Cards/PublicationCard";
import Layout from "../../../components/Layout";
import ProgramSection from "../../../components/ProgramSection";
import { Section, SectionContent } from "../../../components/Section";

const NeuroOncology = () => (
  <Layout>
    <ProgramSection
      programType={"RESEARCH PROGRAMS"}
      title={"NEURO ONCOLOGY PROGRAM"}
      description={`Gliomas, the most common form of brain tumors of the adult CNS, originate from neuroepithelial tissue and are classified morphologically as astrocytic, oligodendroglial, ependymal, and choroid plexus tumors. Glioblastoma multiforme (grade IV astrocytoma; GBM) is one of the most aggressive forms of brain tumors and a primary area of focus for the Neurooncology Group at MSCTR.
Gliomas, originate from the neuro-epithelial tissue and are classified morphologically as astrocytic, oligodendroglial, ependymal and choroid plexus tumors. Glioblastoma multiforme (grade IV astrocytoma; GBM) is one of the most aggressive, invasive, and destructive malignancies and has attracted clinical attention globally. In addition to uncontrolled proliferation and diffuse tissue invasion, neuro-degeneration is another attribute and a hall mark of malignant gliomas, the mechanism of which is poorly understood. Thus, there may be several processes that may be common between gliomas and neuro-degenerative disorders.`}
      noCallToAction
      noImages
    />
    <Section>
      <SectionContent>
        <div className="px-10">
          <p className="text-lg">
            We envision implementation of the two arms in parallel, through a
            multi-disciplinary team effort, involving basic scientists with
            expertise in high throughput technologies, cell biologists,
            clinicians and informaticians. Embedded in these efforts will be the
            mission of mentoring young clinicians and research scientists who
            will lead MSCTR both as independent scientists and as a
            well-coordinated team directed towards improved neuro oncology
            practices. This will ensure continued institutional efforts.
            Gliomas, particularly Glioblastoma, are one of the most targeted
            tumors in clinical oncology research globally. Hence, the center
            will aim for networking with other national and international
            clinical centers in our efforts to formulate pioneering treatment
            models for malignant Glioblastoma.
          </p>
        </div>
      </SectionContent>
    </Section>
    <Section>
      <SectionContent>
        <div className="w-full bg-prussian-blue-500 p-10">
          <div id="type">
            <p className="text-lg font-inter-bold text-christine mb-3 uppercase">
              {"Principal Investigator"}
            </p>
          </div>
          <div className="flex justify-between">
            <div id="about" className="w-6/12 mt-8">
              <p className="text-4xl text-white font-inter-semibold mb-5">
                Manjula Das, PhD
              </p>
              <p className="text-white text-base leading-loose">
                PhD from Indian Institute of Science with training from McGil
                University – Canada and MIT-USA during post doctoral studies
                Manjula has spent long years in the Industry. She is an expert
                in Biotherapeutics especially critical reagent and assay
                development (in vitro and in vivo) for regulatory submission of
                protein drugs. She also has established many companies, the
                latest being a consultancy firm named Beyond Antibody. Manjula
                with 20-years long market experience concentrates on translating
                basic research to products and processes for direct patient care
                in various areas of cancer.
              </p>
            </div>
            <div
              id="image"
              className="flex flex-col justify-center items-center"
            >
              <div
                style={{ width: 424, height: 432 }}
                className="bg-silver-500"
              />
              <p className="text-white font-inter-medium text-lg leading-loose mt-5">
                manjula.das@ms-mf.org
              </p>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
    <Section>
      <SectionContent>
        <div className="w-full bg-silver-100 p-10">
          <div id="type">
            <p className="text-lg font-inter-bold text-christine mb-3 uppercase">
              {"Current Members"}
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <PersonCard
              name={"Smitha P K"}
              position={"Research Assistant"}
              thumbnail={null}
              profile={{
                linkedin: "https://linkedin.com",
                scholar: "https://scholars.google.com",
              }}
            />
            <PersonCard
              name={"Smitha P K"}
              position={"Research Assistant"}
              thumbnail={null}
              profile={{
                linkedin: "https://linkedin.com",
                scholar: "https://scholars.google.com",
              }}
            />
            <PersonCard
              name={"Smitha P K"}
              position={"Research Assistant"}
              thumbnail={null}
              profile={{
                linkedin: "https://linkedin.com",
                scholar: "https://scholars.google.com",
              }}
            />
            <PersonCard
              name={"Smitha P K"}
              position={"Research Assistant"}
              thumbnail={null}
              profile={{
                linkedin: "https://linkedin.com",
                scholar: "https://scholars.google.com",
              }}
            />
          </div>
        </div>
      </SectionContent>
    </Section>
    <Section>
      <SectionContent>
        <div className="w-full bg-silver-100 p-10">
          <div id="type">
            <p className="text-lg font-inter-bold text-christine mb-3 uppercase">
              {"Collaborators"}
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <PersonCard
              name={"Smitha P K"}
              position={"Research Assistant"}
              thumbnail={null}
              profile={{
                linkedin: "https://linkedin.com",
                scholar: "https://scholars.google.com",
              }}
            />
            <PersonCard
              name={"Smitha P K"}
              position={"Research Assistant"}
              thumbnail={null}
              profile={{
                linkedin: "https://linkedin.com",
                scholar: "https://scholars.google.com",
              }}
            />
            <PersonCard
              name={"Smitha P K"}
              position={"Research Assistant"}
              thumbnail={null}
              profile={{
                linkedin: "https://linkedin.com",
                scholar: "https://scholars.google.com",
              }}
            />
            <PersonCard
              name={"Smitha P K"}
              position={"Research Assistant"}
              thumbnail={null}
              profile={{
                linkedin: "https://linkedin.com",
                scholar: "https://scholars.google.com",
              }}
            />
          </div>
        </div>
      </SectionContent>
    </Section>
    <Section>
      <SectionContent>
        <div className="w-full bg-silver-100 p-10">
          <div id="type">
            <p className="text-lg font-inter-bold text-christine mb-3 uppercase">
              {"Alumni"}
            </p>
          </div>
          <div className="space-y-5 divide-y">
            <AlumniCard
              name={"Smitha P K"}
              position={"Research Assistant"}
              thumbnail={null}
              profile={{
                linkedin: "https://linkedin.com",
                scholar: "https://scholars.google.com",
              }}
              about="Over the last two decades there has been a paradigm shift in our perception of cancer therapy. As we know now, neoplasia do not consist only of transformed cells, but contain an abundant"
            />
            <AlumniCard
              name={"Smitha P K"}
              position={"Research Assistant"}
              thumbnail={null}
              profile={{
                linkedin: "https://linkedin.com",
                scholar: "https://scholars.google.com",
              }}
              about="Over the last two decades there has been a paradigm shift in our perception of cancer therapy. As we know now, neoplasia do not consist only of transformed cells, but contain an abundant"
            />
            <AlumniCard
              name={"Smitha P K"}
              position={"Research Assistant"}
              thumbnail={null}
              profile={{
                linkedin: "https://linkedin.com",
                scholar: "https://scholars.google.com",
              }}
              about="Over the last two decades there has been a paradigm shift in our perception of cancer therapy. As we know now, neoplasia do not consist only of transformed cells, but contain an abundant"
            />
          </div>
        </div>
      </SectionContent>
    </Section>
    <Section>
      <SectionContent>
        <div className="w-full">
          <div id="type">
            <p className="text-lg font-inter-bold text-christine mb-3 uppercase">
              {"Publications"}
            </p>
          </div>
          <ContentCard>
            <div className="space-y-5 p-5 divide-y">
              <PublicationCard
                title={
                  "Neutrophils homing into the retina trigger pathology in human patients and in a mouse model of early age-related macular degeneration"
                }
                authors={
                  "Sayan Ghosh, Archana Padmanabhan, Tanuja Vaidya, Alan M. Watson, Imran A. Bhutto, Stacey Hose, Peng Shang, Nadezda Stepicheva, Meysam Yazdankhah, Joseph Weiss, Manjula Das, Santosh Gopikrishna, Aishwarya, Naresh Yadav, Thorsten Berger, Tak W. Mak, Shuli Xia, Jiang Qian, Gerard A. Lutty, Ashwath Jayagopal, J. Samuel Zigler, Jr., Swaminathan Sethu, James T. Handa, Simon C. Watkins, Arkasubhra Ghosh and Debasish Sinha"
                }
                otherDetails={
                  "Nature Communications Biology , (Sep 2019): 2:348 : DOI 10.1038/s42003-019-0588-y"
                }
              />
              <PublicationCard
                title={
                  "Genome Wide Search to Identify Reference Genes candidates for Gene Expression Analysis in Gossypium hirsutum"
                }
                authors={
                  "Smitha P K, Vishnupriyan K , Ananya S.Kar, Anil Kumar M, Christopher Bathula, K.N. Chandrashekara, , Sujan K Dhar, Manjula Das"
                }
                otherDetails={
                  "BMC Plant Biology; (2019) 19:405 https://doi.org/10.1186/s12870-019-1988-3"
                }
              />
            </div>
          </ContentCard>
        </div>
      </SectionContent>
    </Section>
  </Layout>
);

export default NeuroOncology;
