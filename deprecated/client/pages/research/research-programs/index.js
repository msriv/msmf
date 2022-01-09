import Layout from "../../../components/Layout";
import ProgramSection from "../../../components/ProgramSection";

const ResearchPrograms = () => {
  return (
    <Layout>
      <ProgramSection
        programType={"RESEARCH PROGRAMS"}
        title={"TUMOR IMMUNOLOGY"}
        description={
          "Over the last two decades there has been a paradigm shift in our perception of cancer therapy. As we know now, neoplasia do not consist only of transformed cells, but contain an abundant and heterogeneous non-transformed components like stromal, endothelial and immune cells. The host immune system can recognize and sometimes react against (pre-) malignant cells as they transform, proliferate and evolve. The knowledge laid the grounds of anticancer immunosurveillance leading to cancer immunotherapy. Recent intense wave of preclinical and clinical investigation culminated in approval of various immunotherapeutic interventions for use in humans. In 2013, the extraordinary clinical success of immunotherapy has won this new method of therapy the title of “Breakthrough of the Year”. Nonetheless, we have just begun to unravel the therapeutic possibilities offered by anticancer immunotherapy."
        }
        callToAction={"/research/research-programs/tumor-immunology"}
      />
      <ProgramSection
        programType={"RESEARCH PROGRAMS"}
        title={"INTEGRATED HEAD AND NECK ONCOLOGY"}
        description={`Head and neck cancer is the sixth most common cancer around the
            world and the leading form of cancer in the Asian subcontinent. The
            Integrated Head and Neck Oncology Research Program at MSCTR attempts
            to address two grand challenges in head and neck oncology; (a) Can
            we down-stage oral cancer, (b) Could we reverse treatment resistance
            in head and neck cancer. Over two-thirds of the patients with head
            and neck cancer represents advanced stages III/IV, with an overall
            survival rate of less than 20%. It has been demonstrated that while
            the outcome of advanced head and neck cancer in India is about 25%
            below that of developed nations, the survival outcome of early stage
            cancer that require single modality treatment is about 80%, which is
            comparable with that of the developed nations. The primary focus of
            our research group is hence to understand oral carcinogenesis and
            develop affordable strategies for early detection and introduce
            detours in the carcinogenic process. About 50% of all head and neck
            cancers recur after ‘curative intent treatment’. As in majority of
            solid tumours, once the disease recurs or develops distant
            metastasis, there are no curative treatment options. The second
            focus of our research group is to understand mechanisms of treatment
            resistance and to develop effective methods for detecting disease
            relapse and to treat the recurrent and metastatic disease with the
            ultimate goal of ‘molecular pathway’ based adaptive personalized
            therapy for patients with head and neck cancer. In an effort to
            establish an efficient research program and to enable effective
            translation of the scientific discoveries for clinical benefit, the
            research program is integrated with the clinical service of
            Mazumdar-Shaw Medical Center and has initiated collaborations with
            national and international institutions that offer complementary
            expertise.`}
        callToAction={
          "/research/research-programs/integrated-head-and-neck-oncology"
        }
      />
      <ProgramSection
        programType={"RESEARCH PROGRAMS"}
        title={"NEURO ONCOLOGY PROGRAM"}
        description={`Gliomas, the most common form of brain tumors of the adult CNS, originate from neuroepithelial tissue and are classified morphologically as astrocytic, oligodendroglial, ependymal, and choroid plexus tumors. Glioblastoma multiforme (grade IV astrocytoma; GBM) is one of the most aggressive forms of brain tumors and a primary area of focus for the Neurooncology Group at MSCTR.
Gliomas, originate from the neuro-epithelial tissue and are classified morphologically as astrocytic, oligodendroglial, ependymal and choroid plexus tumors. Glioblastoma multiforme (grade IV astrocytoma; GBM) is one of the most aggressive, invasive, and destructive malignancies and has attracted clinical attention globally. In addition to uncontrolled proliferation and diffuse tissue invasion, neuro-degeneration is another attribute and a hall mark of malignant gliomas, the mechanism of which is poorly understood. Thus, there may be several processes that may be common between gliomas and neuro-degenerative disorders.`}
        callToAction={"/research/research-programs/neuro-oncology"}
      />
    </Layout>
  );
};

export default ResearchPrograms;
