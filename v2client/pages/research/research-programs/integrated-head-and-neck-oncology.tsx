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
      "Inregrated molecular Atlas for OPMD, Markers for malignant transformation, targets for chemoprevention.",
    fundProvider: "MSMF",
    members: ["Vaishnav Vasudevan", "Uma Mohan"],
    collaborators: [
      "Department of Head and Neck Oncology, NH",
      "CCHRC, Assam",
      "Medgnome India",
    ],
  },
  {
    projectName: "Biomarkers for Nodal Metastasis in head and neck cancer",
    aboutProject: "Biomarkers for nodal metastasis detection",
    fundProvider: "DHR",
    members: ["Sumsum Sunny", "Pramila M", "Sai Lakshmi"],
    collaborators: [
      "Department of Head and Neck Oncology, NH",
      "University of Arizona",
      "KLE institute of Dental Sciences",
    ],
  },
  {
    projectName:
      "Curcumin and Metformin for prevention second primary tumors of aero-digestive tract in patients with history of head and neck squamous cell carcinoma ",
    aboutProject: "Drug combination for SPT prevention",
    fundProvider: "NCG (Collaboration with NH)",
    members: ["Sumsum Sunny", "Pramila M", "Sai Lakshmi"],
    collaborators: ["HNCOG, 10 centres across India"],
  },
  {
    projectName:
      "PARPCytometry-A quantitative and affordable diagnostic system for head and neck cancer diagnostics",
    aboutProject: "Molecular cytology based early detection assay",
    fundProvider: "BIRAC",
    members: ["Sumsum Sunny", "Aditi Hariharan"],
    collaborators: ["CCRC", "Kochi", "MSKCC NYU"],
  },
  {
    projectName: "Cancer Stem cells in  chemoprevention",
    aboutProject: "Novel markers for progression and chemoprevention",
    fundProvider: "SERB",
    members: ["Gangotri Siddappa"],
    collaborators: [
      "KLE Institute of Dental Sciences",
      "Department of Head and Neck Oncology, NH",
    ],
  },
  {
    projectName:
      "Molecular prognosticators and novel targets in chemo-resistant Head and Neck Cancer",
    aboutProject: "Novel markers for outcome prediction",
    fundProvider: "ICMR",
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
    aboutProject: "Molecular cytology as adjunct for FNAC",
    fundProvider: "ESI",
    members: ["Sumsum Sunny", "Uma Mohan", "Sowyma C Nandu"],
    collaborators: [
      "Department of Head and Neck Oncology, NH",
      "Department of Endocrinology, NH",
      "Department of Pathology, NH",
    ],
  },
  {
    projectName: "Development of 3D model for prediction of treatment outcome",
    aboutProject: "3D model fot drug testing/treatment outcome prediction",
    fundProvider: "MSMF",
    members: ["Pavan"],
    collaborators: ["Department of Head and Neck Oncology, NH"],
  },
  {
    projectName: "Development of salivary biomarker based PoC assay",
    aboutProject: "PoC assay for screening/detection",
    fundProvider: "MSMF",
    collaborators: [
      "Department of Head and Neck Oncology, NH",
      "Product Research Program, MSMF",
    ],
  },
];

const IntegratedHeadAndNeckOncology = () => {
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
            recur after &lsquo;curative intent treatment&rsquo;. As in majority of solid
            tumours, once the disease recurs or develops distant metastasis,
            there are no curative treatment options. The second focus of our
            research group is to understand mechanisms of treatment resistance
            and to develop effective methods for detecting disease relapse and
            to treat the recurrent and metastatic disease with the ultimate goal
            of &lsquo;molecular pathway&rsquo; based adaptive personalized therapy for
            patients with head and neck cancer. In an effort to establish an
            efficient research program and to enable effective translation of
            the scientific discoveries for clinical benefit, the research
            program is integrated with the Department of Head and Neck Surgery,
            Mazumdar-Shaw Medical Center and has initiated collaborations with
            national and international institutions that offer complementary
            expertise. <br />
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
                A &lsquo;cancer stem cell&rsquo; perspective: exploring the role of CSCs in
                the process of tumorigenesis, field cancerization, drug
                resistance and metastasis
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
            <p className="text-white font-semibold text-4xl">
              Amritha Suresh, Principal Investigator, PhD (Molecular Biology)
            </p>
            <p className="text-2xl text-white">
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
              src="/assets/images/Research/Rectangle 1470.png"
              alt="Manjula Das"
            />
            <p className="m-0 text-white text-xl">manjula.das@ms-mf.org</p>
          </div>
        </div>
        {IntegratedHeadAndNeckOncologyProjects.map((project, key) => (
          <ProgramCard key={key} {...project} />
        ))}
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
                Skandarajah A, D&apos;Ambrosio M, Ramanjinappa RD, Mohan SP, Raghavan
                N, Kandasarma U, N S, Raghavan S, Hedne N, Koch F, Fletcher DA,
                Selvam S, Kollegal M, N PB, Ladic L, Suresh A, Pandya HJ,
                Kuriakose MA. PLoS One. 2019;14(11):e0224885. doi:
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
