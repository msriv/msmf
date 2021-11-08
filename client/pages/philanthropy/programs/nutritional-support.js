import Layout from "../../../components/Layout";
import ProgramSection from "../../../components/ProgramSection";

const Index = () => (
  <Layout>
    <ProgramSection
      programType={"SUPPORT PROGRAM"}
      title={"NUTRITIONAL SUPPORT"}
      description={
        "Nutrition plays a great role in a person’s daily life and it is essential for a healthy living; particularly for patients undergoing cancer treatment. Most of the patients who come for treatment are from below poverty line and underprivileged families who cannot afford a well-balanced nutritional diet as they struggle to make ends meet. MSMF supports such patients during their chemotherapy sessions by providing them with a healthy balanced diet (bananas, almonds and threptin diskettes). We regularly provide support for around 800 patients every month and we continue to do so until the completion of their treatment."
      }
      noCallToAction
    />
  </Layout>
);

export default Index;
