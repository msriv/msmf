import ProgramCard, {
  ProgramCardProps,
} from "../../../components/Client/Research/ProgramCard";
import { ContentCard } from "../../../components/Common/ContentCard";
import { Section, SectionContent } from "../../../components/Common/Section";

const NeuroOncologyProjects: Array<ProgramCardProps> = [
  {
    projectName:
      "Novel prognostic gene signature for low and high grade Glioma ",
    fundProvider: "ICMR, Government of India",
    translation:
      "https://www.msctr.org/2019/05/30/recursive-consensus-clustering/",
    publications: "https://www.nature.com/articles/s41598-020-67016-3",
    members: ["Dr. Nameeta Shah"],
    collaborators: ["NH Neuro Team"],
  },
  {
    projectName:
      "Studying migration of glioblastoma cells along white matter tracts using an in vitro 3D model",
    fundProvider: "SERB, Department of Science and Technology",
    translation: "https://github.com/MSCTR/3Dgelma",
    publications: "https://www.biorxiv.org/content/10.1101/2021.03.24.436751v1",
    members: ["Dr. Nameeta Shah"],
    collaborators: ["Aditya Chaubey"],
  },
  {
    projectName:
      "Genome wide, novel  alternatively spliced variants in Glioblastoma and their clinical significance",
    fundProvider: "ICMR, Government of India",
    translation: "https://github.com/MSCTR/Denovo-Proteogenomics-Pipeline",
    publications: "https://www.biorxiv.org/content/10.1101/2021.03.24.436751v1",
    members: ["Dr. Ravi Sirdeshmukh", "Dr. Nameeta Shah"],
  },
  {
    projectName: "GPR56 and TG2  and mesenchymal transition in Glioblastoma",
    fundProvider: "ICMR, Government of India",
    members: ["Dr. Ravi Sirdeshmukh", "Dr. Nameeta Shah"],
  },
  {
    projectName:
      "Immuno-Phenotyping of High-Grade Glioma Infiltrating Immune Cells Reveals Grade Specific Differences in Cells of Myeloid Origin",
    fundProvider: "MSMF, IISc",
    translation: "https://www.msctr.org/2021/06/03/flow-cytometry-data/",
    publications: "https://www.biorxiv.org/content/10.1101/2020.09.26.314542v1",
    members: ["Dr. Nameeta Shah"],
    collaborators: ["Dr. Siddharth Jhunjhunwala"],
  },
];

const ProductResearch = () => {
  return (
    <Section>
      <SectionContent>
        <ContentCard>
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Research Programs
          </p>
          <p className="text-4xl font-bold uppercase my-3">Neuro Oncology</p>
          <p>
            Gliomas, the most common form of brain tumors of the adult CNS,
            originate from neuroepithelial tissue and are classified
            morphologically as astrocytic, oligodendroglial, ependymal, and
            choroid plexus tumors. Glioblastoma multiforme (grade IV
            astrocytoma; GBM) is one of the most aggressive forms of brain
            tumors and a primary area of focus for the Neurooncology Group at
            MSCTR.
            <br />
            <br /> Gliomas, originate from the neuro-epithelial tissue and are
            classified morphologically as astrocytic, oligodendroglial,
            ependymal and choroid plexus tumors. Glioblastoma multiforme (grade
            IV astrocytoma; GBM) is one of the most aggressive, invasive, and
            destructive malignancies and has attracted clinical attention
            globally. In addition to uncontrolled proliferation and diffuse
            tissue invasion, neuro-degeneration is another attribute and a hall
            mark of malignant gliomas, the mechanism of which is poorly
            understood. Thus, there may be several processes that may be common
            between gliomas and neuro-degenerative disorders.
            <br />
            <br />
            The focus of the Neuro-oncology Group at MSCTR will be: a. To
            continue the discovery effort of understanding these tumors and the
            dynamics of associated molecular patterns from a clinical
            perspective. Also to relate the findings to neuro-degenerative
            conditions. b. To develop well defined strategies, using the data
            that is already available, for translation to diagnostic, prognostic
            or therapeutic applications.
            <br />
            <br />
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
        </ContentCard>
        <div className=" bg-msmf-dark flex items-center justify-between px-4 w-full">
          <div id="content" className="w-7/12 px-8 py-8">
            <p className="uppercase font-bold text-research">
              Principal Investigator
            </p>
            <p className="text-white font-semibold text-4xl">
              Dr Ravi Sirdeshmukh
            </p>
            <p className="text-2xl text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &lsquo;Content here,
              content here&rsquo;, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for &lsquo;lorem ipsum&rsquo; will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like) There are many variations
              of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or
              randomised words which don&apos;t look even slightly believable.
            </p>
          </div>
          <div
            id="image"
            className="w-5/12 px-4 flex justify-center flex-col items-center"
          >
            <img
              src="/assets/images/Research/Rectangle 1470-2.png"
              alt="Smitha P K"
            />
            <p className="m-0 text-white text-xl">ravisirdeshmukh@gmail.com</p>
          </div>
        </div>
        {NeuroOncologyProjects.map((project, key) => (
          <ProgramCard key={key} {...project} />
        ))}
      </SectionContent>
    </Section>
  );
};

export default ProductResearch;
