import ProgramCard, {
  ProgramCardProps,
} from "../../../components/Client/Research/ProgramCard";
import { ContentCard } from "../../../components/Common/ContentCard";
import { Section, SectionContent } from "../../../components/Common/Section";

const ProductResearchProjects: Array<ProgramCardProps> = [
  {
    projectName: "2SolaCept: Anti-Covid19 Cept protein",
    fundProvider: "Birac",
    sourceProgram: "MI",
    industryPartner: "In Progress",
    members: ["Kunal Biswas", "Pushkarni Suresh"],
  },
  {
    projectName: "Anti-LCN2 Mab in Colorectal Cancer",
    fundProvider: "Birac",
    sourceProgram: "MI",
    industryPartner: "In Progress",
    members: ["Kunal Biswas"],
    collaborators: ["Dr Sorab Dalal"],
  },
  {
    projectName:
      "Dual modality Imaging device for surveillance and detection of oral cancer ",
    fundProvider: "Birac",
    sourceProgram: "Integrated Head and Neck Oncology",
    industryPartner: "In Progress",
    members: ["Sumsum Sunny", "Pramila M", "Sai Lakshmi"],
    collaborators: [
      "NH",
      "University of Arizona",
      "KLE Institute of Dental Sciences",
    ],
  },
  {
    projectName:
      "AI-integrated affordable molecular cytology platform for oral cancer ",
    fundProvider: "DBT Wellcome Trust",
    sourceProgram: "Integrated Head and Neck Oncology",
    industryPartner: "In Progress",
    members: ["Sumsum Sunny", "Pavithra"],
    collaborators: ["NH", "IISc", "KLE Institute of Dental Sciences"],
  },
  {
    projectName: "Detection of IDH1 mutation by ddPCR",
    fundProvider: "DBT Wellcome Trust",
    sourceProgram: "Neuro Oncology",
    industryPartner: "Neo-Dx",
    members: ["Dr. Sujan Dhar", "Gouri", "Kiruthiga"],
    collaborators: ["Dr. Komal Prasad", "Dr. Akhila"],
  },
  {
    projectName: "Detection of double deletion of 1p19q by FISH",
    fundProvider: "DBT Wellcome Trust",
    sourceProgram: "Neuro Oncology",
    industryPartner: "None",
    members: ["Dr. Sujan Dhar", "Gouri", "Kiruthiga"],
    collaborators: ["Dr. Komal Prasad", "Dr. Akhila"],
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
          <p className="text-4xl font-bold uppercase my-3">Product Research</p>
          <p>
            Product Research Program focuses on developing clinically applicable
            deliverables out of the work carried out in the Discovery group. In
            addition to knowledge, translational clinical research yields 4
            types of products (i) Therapeutics (ii) diagnostics (iii) Platforms
            and (iv) Policies/Methods. For each type, specific deliberations are
            required to ascertain the 3S: stability, sustainability and
            scalability of the product before it can be taken to the
            users/patients through industry and/or approving agencies. In this
            newly formed group we concentrate on &lsquo;productizing&rsquo; a
            concept which has already been proven of its application in any of
            the core research groups at MSMF. &lsquo;Productizing&rsquo; chiefly
            involves validation in patient samples and checking the 3S of the
            products.{" "}
          </p>
        </ContentCard>
        <div className=" bg-msmf-dark flex items-center justify-between px-4 w-full">
          <div id="content" className="w-7/12 px-8 py-8">
            <p className="uppercase font-bold text-research">
              Principal Investigator
            </p>
            <p className="text-white font-semibold text-3xl">Smitha P K, PhD</p>
            <p className="text-xl text-white">
              Dr. Smitha PK has been involved in translational research,
              developing various molecular diagnostic and immune theragnostic
              products for past 15 years. She has been trained extensively in
              molecular biology and immunology during her PhD days (Bharathiar
              University) and over one and half decade long stint with the
              biotech Industry. She is an expert in making and characterizing
              monoclonal hybridoma as well as recombinant antibody and proteins.
              Her PhD, though in plant biotechnology, revolved around molecular
              and immuno-assay development utilizing nano-materials. Her product
              research and development capabilities are displayed by her
              publications and 2 patents. Another patent towards a screening
              platform development is on the way. Industry experience in
              leadership roles gives her an edge in forming and running an
              independent Product Research Program in active collaboration with
              the research teams of MSMF. She has active collaborations with
              IISc and other academia. Currently, she is pursuing her passion of
              novel therapeutic development to treat cancer utilizing the immune
              weapons. Diagnostics, that she develops, are by-products of her
              research!
            </p>
          </div>
          <div
            id="image"
            className="w-5/12 px-4 flex justify-center flex-col items-center"
          >
            <img
              src="https://cdn.ms-mf.org/images/People/Smitha PK.jpg"
              alt="Smitha P K"
            />
            <p className="m-0 text-white text-xl">smitha.pk@ms-mf.org</p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.ms-mf.org/images/Research/5_Program_product research.jpg"
            alt="product-research-team"
          />
          <button className="msmf__secondary-btn">Our Team</button>
        </div>
        <hr />
        {ProductResearchProjects.map((project, key) => (
          <ProgramCard key={key} {...project} />
        ))}
      </SectionContent>
    </Section>
  );
};

export default ProductResearch;
