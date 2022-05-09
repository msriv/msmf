import { useRouter } from "next/router";
import ProgramCard, {
  ProgramCardProps,
} from "../../../components/Client/Research/ProgramCard";
import { ContentCard } from "../../../components/Common/ContentCard";
import { Section, SectionContent } from "../../../components/Common/Section";

const ComputationalBiologyProjects: Array<ProgramCardProps> = [
  {
    projectName:
      "Proteogenomic Integration for discovery of differntial biomarkers in Glioblastoma ",
    aboutProject:
      "Glioblastoma is an aggressive form of brain cancer with median survival less than 18 months. In this project we are analyzing transcriptomics and proteomics data generated from a set of glioblastoma and lower-grade glioma patients using a combination of de novo assembly and alignment-based pipelines to arrive at novel peptides differentally expressed in glioblastoma and other related clinical phenotypes. ",
    members: ["Dr Ravi Sirdeshmukh"],
    collaborators: [
      "Dr Abhishek Kumar, Institute of Bioinformatics",
    ],
  },
  {
    projectName: "AI-enabled computational model for IDH1 mutation detection from H&E-stained glioma histopathology images",
    aboutProject: "Mutations in the IDH gene are known to indicate better prognosis for patients suffering from lower-grade glioma. Current pathology practice of detecting the mutation using immunohistochemistry can only detect the canonical mutations. In this project, we aim to develop a artificial neural network based computational model that can detect both canonical and non-canonical mutations from histopathology images that are generated as part of standard of care.",
    collaborators: [
      "Dr Akhila L, Pathology, NH"
    ],
  },
  {
    projectName:
      "Determination of COVID-19 severity indicators from systematic analysis of public data",
    aboutProject: "Through successive waves of COVID-19, it is now well-established that around 5-10% of infected patients progress to severe form of disease and other factors like age and pre-existing illnesses increases the chance of severity. In this study, we have analyzed a plethora of publicly available data to establish a set of cytokine markers like IL-6 and IL-10 that be used as prognostic indicator. We also showed that inflammation and hypercoagulopathy are the pre-dominant risk factors of severity for SARS-CoV-2 infected patients suffering from diabetes.",
    members: ["Vishnupriyan K", "Kartik SachDeva", "Dr Manjula Das"],
    collaborators: ["Dr Shart Daomdar, Clinical Director, Mazumdar Shaw Medical Center"],
    publications: (
      <ol>
        <li>
          <p className="font-bold mb-0">
              IL-6 and IL-10 as predictors of disease severity in COVID 19 patients: Results from Meta-analysis and Regression
            </p>
            <p className="mt-0">
              Sujan K Dhar, Vishnupriyan K, Sharat Damodar, Shashi Gujar and Manjula Das, Heliyon (2021), 7(2):e06155
            </p>
        </li>
        <li>
          <p className="font-bold mb-0">
              Inflammation and hypercoagulopathy are predominant risk factors of severity in COVID-19 patients with Diabetes Mellitus: Summary of a Meta-analysis
            </p>
            <p className="mt-0">
              Sujan K Dhar, Kartik Sachdeva and Manjula Das, Diabetes & Metabolic Syndrome: Clinical Research & Reviews (2021), 15(2): 639-641
            </p>
        </li>
      </ol>
    )
  },
];

const ComputationBiology = () => {
  const router = useRouter();
  const openTeam = () => {
    router.push("/research/people#computation-biology");
  };
  return (
    <Section>
      <SectionContent>
        <ContentCard>
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Research Programs
          </p>
          <p className="text-4xl font-bold uppercase my-3">
            Computation Biology
          </p>
          
        </ContentCard>
        <div className=" bg-msmf-dark flex items-center justify-between px-4 w-full">
          <div id="content" className="w-7/12 px-8 py-8">
            <p className="uppercase font-bold text-research">
              Principal Investigator
            </p>
            <p className="text-white font-semibold text-3xl">
              Dr Sujan K  Dhar, Principal Investigator, Ph D, Experience in Biotech Industry for 20 years
            </p>
            {/* <p className="text-xl text-white">
              Dr. Amritha Suresh is a Principal Scientist of the Integrated Head
              and Neck Oncology Program, at Mazumdar Shaw Center for
              Translational Research (MSCTR), Narayana Health, Bangalore. She is
              also a faculty of the Roswell Park-Mazumdar Shaw Medical
              Foundation Collaborative Research program. Dr. Suresh completed
              her doctoral program from Center for Cellular and Molecular
              Biology (JNU) and served as a Research Associate at Head and Neck
              Institute, Amrita Institute of Medical Sciences and Research
              Center, Kochi during which period she was involved in setting up
              the research facility and the establishment of a Head and Neck
              tissue repository at the center.
            </p> */}
          </div>
          <div
            id="image"
            className="w-5/12 px-4 flex justify-center flex-col items-center"
          >
            <img
              src="https://cdn.ms-mf.org/images/People/Sujan K Dhar.jpg"
              alt="Dr. Sujan K Dhar"
            />
            <p className="m-0 text-white text-xl">https://www.linkedin.com/in/sujan-dhar-5783235</p>
          </div>
        </div>
        <div>
          {/* <img
            src="https://cdn.ms-mf.org/images/Research/3_Program_Head _ Neck group photo.jpg"
            alt="Head-And-Neck-Program-Team"
          /> */}
          <button onClick={openTeam} className="msmf__secondary-btn mt-4">
            Our Team
          </button>
        </div>
        <hr />
        {ComputationalBiologyProjects.map((project, key) => (
          <ProgramCard key={key} {...project} />
        ))}
        
        <ContentCard>
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Patents
          </p>
          <table className="table-fixed">
            <thead>
              <tr className="w-full">
                <th className="w-6/12">Patent Title</th>
                <th className="w-3/12 text-center">File Number</th>
                <th className="w-3/12 text-center">Filed Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Tumor microenvironment platform comprising oral carcinoma for predicting drug sensitivity, drug resistance and disease progression
                </td>
                <td className="text-center">202141048345/TEMP/E-1/54650/2021-CHE</td>
                <td className="text-center">23RD OCTOBER 2021</td>
              </tr>
              <tr>
                <td>
                  Compositions and methods for treating coronavirus infection with different level of disease severity
                </td>
                <td className="text-center">202041036866</td>
                <td className="text-center">27TH AUGUST 2020</td>
              </tr>
              <tr>
                <td>
                  Antibodies against Lipocalin-2 and uses thereof
                </td>
                <td className="text-center">202021000274</td>
                <td className="text-center">03RD JANUARY 2019</td>
              </tr>
            </tbody>
          </table>
        </ContentCard>

      </SectionContent>
    </Section>
  );
};

export default ComputationBiology;
