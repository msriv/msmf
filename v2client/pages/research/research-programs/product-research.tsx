import { useRouter } from "next/router";
import ProgramCard, {
  ProgramCardProps,
} from "../../../components/Client/Research/ProgramCard";
import { ContentCard } from "../../../components/Common/ContentCard";
import { Section, SectionContent } from "../../../components/Common/Section";

const ProductResearchProjects: Array<ProgramCardProps> = [
  {
    projectName: "2SolaCept: Anti-Covid19 Cept protein",
    fundProvider: "BIRAC",
    sourceProgram: "MI",
    industryPartner: "In Process",
    members: ["Kunal Biswas", "Pushkarni Suresh"],
  },
  {
    projectName: "Anti-LCN2 Mab in Colorectal Cancer",
    sourceProgram: "MI",
    industryPartner: "In Process",
    members: ["Kunal Biswas"],
    collaborators: ["Dr Sorab Dalal"],
  },
  {
    projectName:
      "Dual modality Imaging device for surveillance and detection of oral cancer ",
    fundProvider: "NIH",
    sourceProgram: "Integrated Head and Neck Oncology",
    industryPartner: "In Process",
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
    industryPartner: "In Process",
    members: ["Sumsum Sunny", "Pavithra"],
    collaborators: ["NH", "IISc", "KLE Institute of Dental Sciences"],
  },
  {
    projectName: "Detection of IDH1 mutation by ddPCR",
    sourceProgram: "Neuro Oncology",
    industryPartner: "Neo-Dx",
    members: ["Dr. Sujan Dhar", "Gouri", "Kiruthiga"],
    collaborators: ["Dr. Komal Prasad", "Dr. Akhila"],
  },
  {
    projectName: "Detection of double deletion of 1p19q by FISH",
    sourceProgram: "Neuro Oncology",
    industryPartner: "None",
    members: ["Dr. Sujan Dhar", "Gouri", "Kiruthiga"],
    collaborators: ["Dr. Komal Prasad", "Dr. Akhila"],
  },
];

const ProductResearch = () => {
  const router = useRouter();
  const openTeam = () => {
    router.push("/research/people#product-research");
  };
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
        <div
          id="principal-investigator"
          className=" bg-msmf-dark flex items-center justify-between px-4 w-full"
        >
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
          <button onClick={openTeam} className="msmf__secondary-btn">
            Our Team
          </button>
        </div>
        <hr />
        <div id="projects">
          {ProductResearchProjects.map((project, key) => (
            <ProgramCard key={key} {...project} />
          ))}
        </div>
        <ContentCard id="funds">
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Funds
          </p>
          <table className="table-fixed">
            <thead>
              <tr className="w-full">
                <th className="w-6/12">Title of Fund</th>
                <th className="w-3/12 text-center">Granting Agency</th>
                <th className="w-3/12 text-center">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Exploring Novel BCL2-specific Inhibitors against Leukemia and
                  Lymphoma
                </td>
                <td className="text-center">DBT</td>
                <td className="text-center">April 2018 to March 2021</td>
              </tr>
              <tr>
                <td>
                  Biodesign Bioengineering Initiative Phase II (Towards
                  Deciphering the Interaction between Diabetes and Cancer)
                </td>
                <td className="text-center">DBT</td>
                <td className="text-center">April 2018 to March 2021</td>
              </tr>
              <tr>
                <td>
                  Development Of A Microfluidics Based Point-Of-Care Device For
                  Intra-Operative Detection Of Metastatic Lymph Nodes In Oral
                  Cancer
                </td>
                <td className="text-center">DST</td>
                <td className="text-center">August 2019 to July 2022</td>
              </tr>
              <tr>
                <td>
                  Validation of a RT-PCR kit for the detection of Coronavirus in
                  saliva samples
                </td>
                <td className="text-center">NeoDx</td>
                <td className="text-center">November 2020 to January 2021</td>
              </tr>
              <tr>
                <td>
                  SolAce: Novel Therapeutics against Coronavirus infection
                </td>
                <td className="text-center">BIRAC</td>
                <td className="text-center">October 2020 to May 2021</td>
              </tr>
              <tr>
                <td>
                  Deciphering the tumor immune heterogeneity of Head and Neck
                  Squamous Cell Carcinoma (HNSCC) in Indian patient population:
                  A pilot Study
                </td>
                <td className="text-center">BMS</td>
                <td className="text-center">August 2016 to July 2018</td>
              </tr>
            </tbody>
          </table>
        </ContentCard>
        <ContentCard id="patents">
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Patents
          </p>
          <table className="table-fixed">
            <thead>
              <tr className="w-full">
                <th className="w-6/12">Patent Title</th>
                <th className="w-2/12 text-center">Innovators</th>
                <th className="w-2/12 text-center">File Number</th>
                <th className="w-2/12 text-center">Filed Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Compositions and methods for treating coronavirus infection
                  with different level of disease severity <br />
                  <em>[Manjula Das]</em>
                </td>
                <td className="text-center">MSMF</td>
                <td className="text-center">202041036866</td>
                <td className="text-center">27TH AUGUST 2020</td>
              </tr>
              <tr>
                <td>
                  Antibodies against Lipocalin-2 and uses thereof <br />
                  <em>
                    [Sorab N. Dalal, Manjula Das, Sujan K Dhar, Smitha P K,
                    Nazia Chaudhary, Nehanjali Dwivedi, Sanjay Gupta, Sanket
                    Shah, Bhagya Shree. Rahul Thorat and Nileema Khapare]
                  </em>
                </td>
                <td className="text-center">
                  MSMF, ACTREC, BA (Assigned to MSMF)
                </td>
                <td className="text-center">202021000274</td>
                <td className="text-center">3RD JANUARY 2020</td>
              </tr>
            </tbody>
          </table>
        </ContentCard>
      </SectionContent>
    </Section>
  );
};

export default ProductResearch;
