import { useRouter } from "next/router";
import ProgramCard, {
  ProgramCardProps,
} from "../../../components/Client/Research/ProgramCard";
import { ContentCard } from "../../../components/Common/ContentCard";
import { Section, SectionContent } from "../../../components/Common/Section";

const IntegratedHeadAndNeckOncologyProjects: Array<ProgramCardProps> = [
  {
    projectName:
      "Development of Comprehensive Pre-Cancer Genome/Transcriptome Atlas (CPCGA) of oral cavity",
    aboutProject:
      "Early detection and appropriate management of pre-cancer lesions of the oral cavity is mandatory for down staging oral cancer and for improving survival. However, lack of accurate point-of care diagnostic standards has been accentuated by the lack of understanding of the genomic/transcriptomic landscape that govern the oral carcinogenic process. Current proposal is a significant attempt towards molecular characterization of premalignant and early-stage lesions through integrated exome/RNA sequencing to investigate potential markers of cause and effect. This study would be novel due to the inclusion of patients encompassing the Southern and North Eastern regions of the country in an effort to generate Comprehensive Pre-Cancer Genome Atlas (CPCGA) of oral cavity and thereby generating a catalogue of candidate biomarkers that can specify dysplasia and malignant transformation.",
    members: ["Vaishnav Vasudevan", "Uma Mohan"],
    collaborators: [
      "Department of Head and Neck Oncology, NH",
      "CCHRC, Assam",
      "Medgnome India",
    ],
  },
  {
    projectName: "Biomarkers for Nodal Metastasis in head and neck cancer",
    aboutProject: "Nodal metastasis is one of the most significant prognostic factors in oral squamous cell carcinoma; the survival rates reduce to 26-38% in patients with nodal metastasis as compared to 80% in early-stage patients. The prediction of nodal metastasis is hence extremely significant in appropriate treatment management of the patients. Additionally, about 30-40% patients with clinically negative nodes are reported to have occult metastasis. Currently available imaging techniques fail to detect the presence of nodal metastasis or predict the potential to develop the same accurately. Hence, identification and validation of molecular predictors, which correlate with nodal metastasis, is essential to enable accurate prognosis at an early stage.  The proposal aims at identifying markers for detection of nodal metastasis. Biomarker identification will be carried out by proteomic profiling of primary tumours and matching lymph nodes to identify novel markers. Subsequent validation of the markers is proposed in patient-derived cell line models and in vivo models. ",
    members: ["Bonney L James", "Madhu"],
    collaborators: [
      "Department of Head and Neck Oncology, NH", "Department of Pathology,  NH", "Institute of Bioinformatics"
    ],
  },
  {
    projectName:
      "Low cost oral mobile cancer screening for low resource setting (In collaboration with NH)",
    aboutProject: "Globally India accounts highest number of Oral Cancer cases with 23% of all cancer-related deaths in the Indian subcontinent. Disease burden is despite the existence of feasible and cost-effective primary and secondary prevention methods and hence Oral Cancer control program is one of the main national research priorities. We will develop a low-cost, portable, easy to use mobile system for oral cancer screening in low resource settings. The device consists of an intra-oral imaging probe that will be snapped onto the smart phone to form an imaging system when the healthcare worker uses. The aim of this research is to empower the health care workers in rural India to identify oral & pharyngeal lesions with a mobile phone. The device acts as “Point of Care” diagnosis for early detection of Oral Cancer and approach creates an opportunity to connect specialists to rural population, facilitates timely referrals and follow up. ",

    members: ["Sumsum Sunny", "Pramila M", "Sai Lakshmi"],
    collaborators: ["Department of Head and Neck oncology, NH", "University of Arizona",  "KLE institute of Dental Sciences"],
  },
  {
    projectName:
      "Curcumin and Metformin for prevention second primary tumors of aero-digestive tract in patients with history of head and neck squamous cell carcinoma ",
    aboutProject: "Implementation of multidisciplinary treatment has improved the loco-regional control rate of patients with head and neck squamous cell carcinoma (HNSCC). However, this has not been reflected in the improvement of overall survival rate of these patients. Development of second primary tumor (SPT) after successful control of the index head and neck cancer is one of the principal reasons for the low survival rate. The second primary tumors can arise anywhere in the aero-digestive tract. SPTs have been reported to occur at a rate of 3 to 4% per year in patients who were previously treated for early stages of cancer . This project will attempt to address this critical issue through a combination of two chemopreventive drugs-Curcumin and Metformin, in patients who completed treatment for head and neck squamous cell carcinoma.  The successful control of the incidence of SPT in HNSCC patients will be a step towards improving their overall survival. These agents are inexpensive and have a long track record of clinical use with excellent safety profile. The secondary objectives further attempt to evaluate the effect of this combination on recurrence rates, regression of oral premalignant lesions and biological basis of this intervention. Therefore, if found beneficial, these agents could also be used as chemoprevention for oral pre-malignant lesions in a high-risk population. ",

    members: ["Sruthi  Nambiar", "Aswini TM"],
    collaborators: ["HNCOG, 10 centres across India"],
  },
  {
    projectName:
      "PARPCytometry-A quantitative and affordable diagnostic system for head and neck cancer diagnostics",
    aboutProject: "India exhibits one of the lowest oral cancer five-year survival rates of 30-39%, attributed to the fact that oral cancer is often diagnosed and treated in its advanced stages, despite easy accessibility of the oral cavity. Therefore, a quick, non-invasive and effective method is needed in the field. Based on previous research and literature exploration, we plan to use optical molecular imaging of fluorescent-tagged molecular markers to target biomarkers specific to carcinogenesis. PARP1 overexpression is believed to be due to the increased DNA damage occurring in genetically unstable cancer cells, rather than the activation of specific oncogenic pathways. Furthermore, the density of nuclei is typically higher in malignant tumors than in most normal tissues. The PARPi-FL in vivo imaging signal therefore reflects both the higher expression levels of PARP1 per nucleus as well as the higher nuclear density in malignant tumors. Thus, PARPi-FL could be a potential marker for oral cancer screening.  Malignant transformation is known to be associated with changes in cell surface carbohydrate expression due to aberrant glycosylation. Lectins are known for their carbohydrate binding specificities; initial studies have shown that lectins bind to abnormal glycosyl residues (sialic acid) and can distinguish cancers of the breast, cervix and Barrett’s esophagus. Previous studies have demonstrated that a fluorophore conjugated lectin can distinguish between pathologically normal and diseased tissue ex vivo and in vivo.  Studies have identified lectins with differential binding in oral epithelial dysplasia/neoplasia; Wheat germ agglutinin (WGA), Jack fruit lectin (JFL) [9], Peanut agglutinin PNA), Galectin-1, Ulexeuropaeus agglutinin I (UEA-I), and Concanavalin A (Con A) , being some of them. Our studies in oral cancer have indicated SNA1 as a significant marker in distinguishing high-risk oral potentially malignant lesions from low-risk lesions. This study proposes to evaluate the two markers, Parpi-FL and SNA1 in flow cytometer-based distinction of high-risk lesions in an effort to develop a Point-of-care assay system.",

    members: ["Sumsum Sunny", "Aditi Hariharan"],
    collaborators: ["CCRC, Kochi", "MSKCC NYU"],
  },
  {
    projectName: "Cancer Stem cells in  chemoprevention",
    aboutProject: "Early detection and chemoprevention are the primary approaches that can enable improving the treatment outcome and survival rates in oral cancer. This necessitates accurate detection of susceptible lesions for appropriate treatment management and efficient chemoprevention strategies. The concept of a two-step process of cancer development in the oral mucosa, i.e., through the initial development of precursor lesions such as leukoplakia and erythroplakia, is well-established . The stepwise histological progression that lead to the development of these lesions has been documented to a certain extent, nevertheless, multiple challenges are still associated with the detection of lesions susceptible to malignant progression. Identification of specific biomarkers that correlate with progression may be relevant in this regard. In addition, chemoprevention is challenging due to the issues of resistance to the drugs administered and a relapse into progression once the drug is removed . This might be due to the presence of resistant cells that escape the effects of the drug and thereby lead to a relapse. Exploring the CSCs with attributes of tumorigenesis and drug resistance, and their niche which contribute towards maintenance of these properties may prove beneficial in this regard. ",

    members: ["Gangotri Siddappa"],
    collaborators: [
      "KLE Institute of Dental Sciences",
      "Department of Head and Neck Oncology, NH",
    ],
  },
  {
    projectName: "Cancer Stem cells in reversal of resistance to chemotherapy",
    aboutProject: " Cancer stem cells (CSCs), with enhanced tumorigenicity and intrinsic resistance to drugs, are implicated in carcinogenesis and treatment failure in many cancers [1,2]. The inherent or acquired chemotherapy resistance and tumor relapse observed in patients is attributed primarily to the drug resistant property of the CSCs present in these tumors [3-5]. Current chemotherapeutic regimen that target the actively dividing cells, although produce immediate response, have not been successful in arresting the rates of treatment failure/relapse in most solid tumors, including head and neck squamous cell carcinomas (HNSCC) [6]. Strategies that can potentially target CSCs, along with actively dividing cells, may lower disease relapse. The objective of this study was to delineate CSCs in acquired drug resistance using HNSCC-specific drug resistant cell line models and to explore possible anti-CSC approache",

    members: ["Safeena Kulsum"],
    collaborators: [
      "Department of Head and Neck Oncology, NH"
    ],
  },
  {
    projectName:
      "Molecular prognosticators and novel targets in chemo-resistant Head and Neck Cancer",
    aboutProject: "Approaches that can enable customized disease management according to the molecular profile of the tumours, referred to as ‘Personalized therapeutics’ is the need of the hour. One of the major challenges in head and neck squamous cell carcinoma (HNSCC) is to address the issue of drug resistance and associated morbidity in the patients. Chemotherapy in HNSCC patients is currently administered on a `one-treatment-fits-all’ basis. Pathway based treatment, agnostic to tumor type, has recently been under investigation in other tumor types and is a step towards developing `personalized therapy’. Studies using this approach i.e. adapting treatment to specific gene mutations in tumors, have recently been shown to improve response in non-small cell lung cancer. Despite improved understanding of tumour biology and availability of increasing number of targeted bio-modulators in HNSCC, there has been no major attempt to direct therapy based on individual tumour biologic profile. This proposal attempts to develop a gene signature panel towards resistance/response in head and neck cancer. It also will help to identify newer pathways involved in patients who have a favorable molecular status thereby enabling re-purposing drugs currently used for other cancers.",
    members: ["Ram Bhupal Reddy"],
    collaborators: [
      "Department of Head and Neck Oncology, NH",
      "Strand Life Sciences",
      "Syngene India Pvt Ltd",
    ],
  },
  {
    projectName:
      "Lectin cytometry- a smart and economical diagnostic tool for Thyroid cancer.",
    aboutProject: "Thyroid malignancies constitute one of the most common endocrine cancers worldwide with papillary and follicular cancers accounting for more than 90%.  The age-adjusted incidence rate in India shows an increasing trend from 6.9 to 13.3/100,000 population during the last decade and overall incidence increased in US by 3%  with incidence rates in other countries  (Italy: 13.5, Austria: 12.4, Lithuania: 15.5). The increasing burden of the disease is thus evident from the trends across the world and is likely related to increased detection of thyroid nodules by multiple imaging modalities. The standard of care detection assay for thyroid nodules is Ultrasound guided Fine Needle Aspiration Cytology (USG-FNAC) with the Bethesda reporting system. The accuracy is high in Categories II (classified as benign) and V/VI (malignant). However, categories III/IV are termed indeterminate and may need to undergo diagnostic hemi-thyroidectomies to obtain a definite histological diagnosis.  The primary challenge is that the indeterminate category of nodules comprise 30-45% of nodules those who undergo US-FNAC testing. Diagnostic thyroid surgery in these indeterminate nodules carries the risk of significant complications including vocal cord palsy and hypocalcaemia affecting the patient’s quality of life. Diagnostic hemi-thyroidectomies are an over-treatment for benign nodules and under-treatment for malignant nodules needing revision second surgery and putting the patient at a higher risk of complications. Currently available molecular marker testing used in the west are not widely available/used in India. Given these limitations in thyroid nodule assessment, an adjunct that can improve the efficacy of FNAC-based diagnosis is the need of the hour. This study aims to address this clinical need. The project hence proposes to leverage the aberrant glycosylation profile in thyroid malignancies along with the established mutational profile and this dual modality-FNAC based diagnostic assay to address the challenge of inefficient/incomplete diagnosis of thyroid nodules.",
    members: ["Sumsum Sunny", "Uma Mohan", "Sowyma C Nandu"],
    collaborators: [
      "Department of Head and Neck Oncology, NH",
      "Department of Endocrinology, NH",
      "Department of Pathology, NH",
    ],
  },
];

const IntegratedHeadAndNeckOncology = () => {
  const router = useRouter();
  const openTeam = () => {
    router.push("/research/people#integrated-head-and-neck-oncology");
  };
  return (
    <Section>
      <SectionContent>
        <ContentCard>
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Research Programs
          </p>
          <p className="text-4xl font-bold uppercase my-3">
            Integrated Head and Neck Oncology
          </p>
          <p>
            Head and neck cancer is the sixth most common cancer around the
            world and the leading form of cancer in the Asian subcontinent. The
            Integrated Head and Neck Oncology Research Program at MSCTR attempts
            to address two grand challenges in head and neck oncology:{" "}
            <ol type="a">
              <li>Can we down-stage oral cancer?</li>
              <li>
                Could we reverse treatment resistance in head and neck cancer?
              </li>
            </ol>
            <br />
            Over two-thirds of the patients with head and neck cancer represents
            advanced stages III/IV, with an overall survival rate of less than
            20%. It has been demonstrated that while the outcome of advanced
            head and neck cancer in India is about 25% below that of developed
            nations, the survival outcome of early stage cancer that require
            single modality treatment is about 80%, which is comparable with
            that of the developed nations. The primary focus of our research
            group is hence to understand oral carcinogenesis and develop
            affordable strategies for early detection and introduce detours in
            the carcinogenic process.About 50% of all head and neck cancers
            recur after &lsquo;curative intent treatment&rsquo;. As in majority
            of solid tumours, once the disease recurs or develops distant
            metastasis, there are no curative treatment options. The second
            focus of our research group is to understand mechanisms of treatment
            resistance and to develop effective methods for detecting disease
            relapse and to treat the recurrent and metastatic disease with the
            ultimate goal of &lsquo;molecular pathway&rsquo; based adaptive
            personalized therapy for patients with head and neck cancer. In an
            effort to establish an efficient research program and to enable
            effective translation of the scientific discoveries for clinical
            benefit, the research program is integrated with the Department of
            Head and Neck Surgery, Mazumdar-Shaw Medical Center and has
            initiated collaborations with national and international
            institutions that offer complementary expertise. <br />
            <br />
            The program adopts two major approaches to address the clinical
            challenges{" "}
            <ol type="a">
              <li>
                A systems biology approach: exploring the whole genome,
                transcriptome, methylome and proteome as well as the status of
                targeted markers in tissues, and body fluids, such as saliva and
                blood
              </li>
              <li>
                A &lsquo;cancer stem cell&rsquo; perspective: exploring the role
                of CSCs in the process of tumorigenesis, field cancerization,
                drug resistance and metastasis
              </li>
            </ol>
            The major ongoing research programs of the group are:{" "}
            <ol type="a">
              <li>
                Smart-phone based outreach program for screening and early
                detection; Imaging and molecular cytology based methods for
                point of care screening
              </li>
              <li>
                Salivary biomarkers for the early detection of oral cancer
              </li>
              <li>
                Integrated ómics approach to predict treatment outcome
                prediction in oral potentially malignant lesions,
                laryngo-pharyngeal cancers
              </li>
              <li>
                Cancer Stem Cells (CSC) in field cancerization and tumorigenesis
                of oral cancer
              </li>
              <li>
                Role of CSCs in drug resistance with resistant cell lines as a
                model
              </li>
              <li>
                Development of 3D systems that mimic the TME in HNSCC as models
                to predict treatment outcome
              </li>
              <li>
                Markers of nodal metastasis and PoC assays for intra-operative
                detection of nodal metastasis
              </li>
            </ol>
          </p>
        </ContentCard>
        <div className=" bg-msmf-dark flex items-center justify-between px-4 w-full">
          <div id="content" className="w-7/12 px-8 py-8">
            <p className="uppercase font-bold text-research">
              Principal Investigator
            </p>
            <p className="text-white font-semibold text-3xl">
              Amritha Suresh, Principal Investigator, PhD (Molecular Biology)
            </p>
            <p className="text-xl text-white">
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
            </p>
          </div>
          <div
            id="image"
            className="w-5/12 px-4 flex justify-center flex-col items-center"
          >
            <img
              src="https://cdn.ms-mf.org/images/People/Amitha-Suresh-1.jpg"
              alt="Dr. Amritha Suresh"
            />
            <p className="m-0 text-white text-xl">amritha.suresh@msmf.org</p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.ms-mf.org/images/Research/3_Program_Head _ Neck group photo.jpg"
            alt="Head-And-Neck-Program-Team"
          />
          <button onClick={openTeam} className="msmf__secondary-btn">
            Our Team
          </button>
        </div>
        <hr />
        <ContentCard>
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Adjunct Research Scientists
          </p>
          <p className=" font-semibold text-2xl">
            1. Moni A Kuriakose, MD, FRCS
          </p>
          <p className="text-xl ">
            Dr. Kuriakose is Consultant, Head and Neck Oncology Program,
            Mazumdar Shaw Cancer Center, Narayana Health, Bangalore and Adjunct
            Faculty at MSMF. He is currently, Medical Director, Karkinos Health,
            Kerala Chapter. He is also a professor and the director of head and
            neck oncology translational research program, Roswell Park Cancer
            Institute, Buffalo. Previously, he has served as Director, Head and
            Neck Oncology Translational Research program, New York School of
            Medicine.
          </p>
          <p className=" font-semibold text-2xl">2. Praveen Birur</p>
          <p className="text-xl ">
            Dr Birur is the Professor and Head of the Department in Oral
            Medicine and Radiology, K.L.E Society’s Institute of Dental
            Sciences, Bangalore. He is also a senior consultant in Biocon
            Foundation for oral cancer screening in rural India and presently
            leads oral cancer programs with the help of health workers in rural
            India.
          </p>
        </ContentCard>
        {IntegratedHeadAndNeckOncologyProjects.map((project, key) => (
          <ProgramCard key={key} {...project} />
        ))}
        <ContentCard>
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
                  Development of Comprehensive Pre-Cancer Genome/Transcriptome
                  Atlas (CPCGA) of oral cavity
                </td>
                <td className="text-center">ICMR</td>
                <td className="text-center">3 years</td>
              </tr>
              <tr>
                <td>Biomarkers for Nodal Metastasis in head and neck cancer</td>
                <td className="text-center">DHR</td>
                <td className="text-center">3 years</td>
              </tr>
              <tr>
                <td>
                  Low cost oral mobile cancer screening for low resource setting
                  (In collaboration with NH)
                </td>
                <td className="text-center">NIH</td>
                <td className="text-center">5 years</td>
              </tr>
              <tr>
                <td>
                  Curcumin and Metformin for prevention second primary tumors of
                  aero-digestive tract in patients with history of head and neck
                  squamous cell carcinoma (In collaboration with NH)
                </td>
                <td className="text-center">NCG</td>
                <td className="text-center">5 years</td>
              </tr>
              <tr>
                <td>
                  PARPCytometry-A quantitative and affordable diagnostic system
                  for head and neck cancer diagnostics
                </td>
                <td className="text-center">GCE-BIRAC</td>
                <td className="text-center">3 years</td>
              </tr>
              <tr>
                <td>
                  Lectin cytometry- a smart and economical diagnostic tool for
                  Thyroid cancer (IN collaboration with NH)
                </td>
                <td className="text-center">ESI</td>
                <td className="text-center">2 years</td>
              </tr>
            </tbody>
          </table>
        </ContentCard>
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
                  CURCUMIN AND METFORMIN IN PREVENTION OF HEAD AND NECK CANCER
                </td>
                <td className="text-center">201641025447</td>
                <td className="text-center">26TH JULY 2016</td>
              </tr>
              <tr>
                <td>
                  SALIVARY PROTEIN BIOMARKERS FOR THE DIAGNOSIS AND PROGNOSIS OF
                  HEAD AND NECK CANCERS [INDIAN, PCT FILED; USPTO in Process]
                </td>
                <td className="text-center">201741007724</td>
                <td className="text-center">5TH MARCH 2017</td>
              </tr>
              <tr>
                <td>
                  ANTI-CXCR4 INHIBITOR IN REVERSING RESISTANCE TO
                  CHEMOPREVENTION AND CHEMOTHERAPY
                </td>
                <td className="text-center">201741017203</td>
                <td className="text-center">16TH MAY 2017</td>
              </tr>
              <tr>
                <td>IN-VITRO CELL LINE MODEL FOR ORAL CARCINOMA</td>
                <td className="text-center">201741020077</td>
                <td className="text-center">8TH JUNE 2017</td>
              </tr>
              <tr>
                <td>
                  MOLECULAR MARKER BASED ORAL CYTOLOGY FOR DETECTION OF
                  POTENTIALLY MALIGNANT AND MALIGNANT ORAL LESIONS
                </td>
                <td className="text-center">201841034544</td>
                <td className="text-center">13TH SEPTEMBER 2018</td>
              </tr>
            </tbody>
          </table>
        </ContentCard>
        <ContentCard>
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Publications
          </p>
          <p className="text-2xl font-bold uppercase">2021</p>
          <ol>
            <li>
              <p className="font-bold mb-0">
                Mobile-based oral cancer classification for point-of-care
                screening
              </p>
              <p className="mt-0">
                Song B, Sunny S, Li S, Gurushanth K, Mendonca P, Mukhia N,
                Patrick S, Gurudath S, Raghavan S, Imchen T, Leivon S, Kolur T,
                Shetty V, Bushan V, Ramesh R, Lima N, Pillai V, Wilder-Smith P,
                Sigamani A, Suresh A, Kuriakose M, Birur P, Liang R. J Biomed
                Opt. 2021 Jun;26(6):065003. doi: 10.1117/1.JBO.26.6.065003.
                PMID: 34164967; PMCID: PMC8220969.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                Validation of a Point-of-Care Optical Coherence Tomography
                Device with Machine Learning Algorithm for Detection of Oral
                Potentially Malignant and Malignant Lesions. Cancers (Basel)
              </p>
              <p className="mt-0">
                James BL, Sunny SP, Heidari AE, Ramanjinappa RD, Lam T, Tran AV,
                Kankanala S, Sil S, Tiwari V, Patrick S, Pillai V, Shetty V,
                Hedne N, Shah D, Shah N, Chen ZP, Kandasarma U, Raghavan SA,
                Gurudath S, Nagaraj PB, Wilder-Smith P, Suresh A, Kuriakose MA.
                2021 Jul 17;13(14):3583. doi: 10.3390/cancers13143583. PMID:
                34298796; PMCID: PMC8304149.
              </p>
            </li>
          </ol>
          <p className="text-2xl font-bold uppercase">2020</p>
          <ol>
            <li>
              <p className="font-bold mb-0">
                Validation of the use of a fluorescent PARP1 inhibitor for the
                detection of oral, oropharyngeal and oesophageal epithelial
                cancers
              </p>
              <p className="mt-0">
                Kossatz S, Pirovano G, Demétrio De Souza França P, Strome AL,
                Sunny SP, Zanoni DK, Mauguen A, Carney B, Brand C, Shah V,
                Ramanajinappa RD, Hedne N, Birur P, Sihag S, Ghossein RA, Gönen
                M, Strome M, Suresh A, Molena D, Ganly I, Kuriakose MA, Patel
                SG, Reiner T. Nat Biomed Eng. 2020 Mar;4(3):272-285. doi:
                10.1038/s41551-020-0526-9. Epub 2020 Mar 12. PubMed PMID:
                32165735; PubMed Central PMCID: PMC7136849.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                Salivary proteins from dysplastic leukoplakia and oral squamous
                cell carcinoma and their potential for early detection
              </p>
              <p className="mt-0">
                Sivadasan P, Gupta MK, Sathe G, Sudheendra HV, Sunny SP, Renu D,
                Hari PS, Gowda H, Suresh A, Kuriakose MA, Sirdeshmukh R. J
                Proteomics. 2020 Feb 10;212:103574. doi:
                10.1016/j.jprot.2019.103574. Epub 2019 Nov 7. PubMed PMID:
                31706945.
              </p>
            </li>
          </ol>
          <p className="text-2xl font-bold uppercase">2019</p>
          <ol>
            <li>
              <p className="font-bold mb-0">
                A smart tele-cytology point-of-care platform for oral cancer
                screening
              </p>
              <p className="mt-0">
                Sunny S, Baby A, James BL, Balaji D, N V A, Rana MH, Gurpur P,
                Skandarajah A, D&apos;Ambrosio M, Ramanjinappa RD, Mohan SP,
                Raghavan N, Kandasarma U, N S, Raghavan S, Hedne N, Koch F,
                Fletcher DA, Selvam S, Kollegal M, N PB, Ladic L, Suresh A,
                Pandya HJ, Kuriakose MA. PLoS One. 2019;14(11):e0224885. doi:
                10.1371/journal.pone.0224885. eCollection 2019. PubMed PMID:
                31730638; PubMed Central PMCID: PMC6857853.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                Small form factor, flexible, dual-modality handheld probe for
                smartphone-based, point-of-care oral and oropharyngeal cancer
                screening
              </p>
              <p className="mt-0">
                Uthoff RD, Song B, Sunny S, Patrick S, Suresh A, Kolur T,
                Gurushanth K, Wooten K, Gupta V, Platek ME, Singh AK,
                Wilder-Smith P, Kuriakose MA, Birur P, Liang R. J Biomed Opt.
                2019 Oct;24(10):1-8. doi: 10.1117/1.JBO.24.10.106003. PubMed
                PMID: 31642247; PubMed Central PMCID: PMC6826203.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                Evaluation of a Lectin-Based Imaging System for the Chairside
                Detection of Oral Dysplasia and Malignancy
              </p>
              <p className="mt-0">
                Johnson A, Baeten J, Patel K, Killian M, Sunny S, Suresh A, Uma
                K, Birur P, Kuriakose M, Kademani D. J Oral Maxillofac Surg.
                2019 Sep;77(9):1941-1951. doi: 10.1016/j.joms.2019.03.012. Epub
                2019 Mar 26. PubMed PMID: 31004587.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                Molecular prognosticators in clinically and pathologically
                distinct cohorts of head and neck squamous cell carcinoma-A
                meta-analysis approach
              </p>
              <p className="mt-0">
                Reddy RB, Khora SS, Suresh A. PLoS One. 2019;14(7):e0218989.
                doi: 10.1371/journal.pone.0218989. eCollection 2019. PubMed
                PMID: 31310629; PubMed Central PMCID: PMC6634788.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                Cancer stem cells and fibroblast niche cross talk in an in-vitro
                oral dysplasia model.
              </p>
              <p className="mt-0">
                Kulsum S, Raju N, Raghavan N, Ramanjanappa RDR, Sharma A, Mehta
                A, Kuriakose MA, Suresh A. Mol Carcinog. 2019 May;58(5):820-831.
                doi: 10.1002/mc.22974. Epub 2019 Jan 31. PubMed PMID: 30644602.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                Intra-operative point-of-procedure delineation of oral cancer
                margins using optical coherence tomography
              </p>
              <p className="mt-0">
                Sunny SP, Agarwal S, James BL, Heidari E, Muralidharan A, Yadav
                V, Pillai V, Shetty V, Chen Z, Hedne N, Wilder-Smith P, Suresh
                A, Kuriakose MA. Oral Oncol. 2019 May;92:12-19. doi:
                10.1016/j.oraloncology.2019.03.006. Epub 2019 Mar 15. PubMed
                PMID: 31010617; PubMed Central PMCID: PMC6954689.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                Cancer Stem Cell based molecular predictors of tumor recurrence
                in Oral squamous cell carcinoma
              </p>
              <p className="mt-0">
                Mohanta S, Sekhar Khora S, Suresh A. Arch Oral Biol. 2019
                Mar;99:92-106. doi: 10.1016/j.archoralbio.2019.01.002. Epub 2019
                Jan 4. PubMed PMID: 30641296.
              </p>
            </li>
          </ol>
          <p className="text-2xl font-bold uppercase">2018</p>
          <ol>
            <li>
              <p className="font-bold mb-0">
                Point-of-care, smartphone-based, dual-modality, dual-view, oral
                cancer screening device with neural network classification for
                low-resource communities
              </p>
              <p className="mt-0">
                Uthoff RD, Song B, Sunny S, Patrick S, Suresh A, Kolur T,
                Keerthi G, Spires O, Anbarani A, Wilder-Smith P, Kuriakose MA,
                Birur P, Liang R. PLoS One. 2018;13(12):e0207493. doi:
                10.1371/journal.pone.0207493. eCollection 2018. PubMed PMID:
                30517120; PubMed Central PMCID: PMC6281283.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                Automatic classification of dual-modalilty, smartphone-based
                oral dysplasia and malignancy images using deep learning
              </p>
              <p className="mt-0">
                Song B, Sunny S, Uthoff RD, Patrick S, Suresh A, Kolur T,
                Keerthi G, Anbarani A, Wilder-Smith P, Kuriakose MA, Birur P,
                Rodriguez JJ, Liang R Biomed Opt Express. 2018 Nov
                1;9(11):5318-5329. doi: 10.1364/BOE.9.005318. eCollection 2018
                Nov 1. PubMed PMID: 30460130; PubMed Central PMCID: PMC6238918.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                Detection of High-Risk Human Papillomavirus in Oral Cavity
                Squamous Cell Carcinoma Using Multiple Analytes and Their Role
                in Patient Survival
              </p>
              <p className="mt-0">
                Palve V, Bagwan J, Krishnan NM, Pareek M, Chandola U, Suresh A,
                Siddappa G, James BL, Kekatpure V, Kuriakose MA, Panda B. J Glob
                Oncol. 2018 Nov;4:1-33. doi: 10.1200/JGO.18.00058. PubMed PMID:
                30398949; PubMed Central PMCID: PMC7010445.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                A Novel Mobile Health Approach to Early Diagnosis of Oral Cancer
              </p>
              <p className="mt-0">
                Birur NP, Patrick S, Bajaj S, Raghavan S, Suresh A, Sunny SP,
                Chigurupati R, Wilder-Smith P, Gurushanth K, Gurudath S, Rao P,
                Kuriakose MA. J Contemp Dent Pract. 2018 Sep 1;19(9):1122-1128.
                PubMed PMID: 30287715; PubMed Central PMCID: PMC6455929.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                A minimal set of internal control genes for gene expression
                studies in head and neck squamous cell carcinoma
              </p>
              <p className="mt-0">
                Palve V, Pareek M, Krishnan NM, Siddappa G, Suresh A, Kuriakose
                MA, Panda B. PeerJ. 2018;6:e5207. doi: 10.7717/peerj.5207.
                eCollection 2018. PubMed PMID: 30128175; PubMed Central PMCID:
                PMC6097490.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                Proteome analysis reveals that de novo regenerated mucosa over
                fibula flap-reconstructed mandibles resembles mature keratinized
                oral mucosa
              </p>
              <p className="mt-0">
                Kumar VV, James BL, Ruß M, Mikkat S, Suresh A, Kämmerer PW,
                Glocker MO Oral Oncol. 2018 Mar;78:207-215. doi:
                10.1016/j.oraloncology.2018.01.017. Epub 2018 Feb 20. PubMed
                PMID: 29496052.
              </p>
            </li>
            <li>
              <p className="font-bold mb-0">
                Chairside molecular imaging of aberrant glycosylation in
                subjects with suspicious oral lesions using fluorescently
                labeled wheat germ agglutinin
              </p>
              <p className="mt-0">
                Baeten J, Johnson A, Sunny S, Suresh A, Birur P, Uma K, Kademani
                D. Head Neck. 2018 Feb;40(2):292-301. doi: 10.1002/hed.24943.
                Epub 2017 Sep 30. PubMed PMID: 28963821.
              </p>
            </li>
          </ol>
        </ContentCard>
      </SectionContent>
    </Section>
  );
};

export default IntegratedHeadAndNeckOncology;
