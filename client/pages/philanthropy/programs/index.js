import Layout from "../../../componentsNew/Layout";
import ProgramSection from "../../../componentsNew/ProgramSection";
import Button from "../../../design-system/Button";

const PhilanthropyPrograms = () => {
  return (
    <Layout>
      <ProgramSection
        programType={"SUPPORT PROGRAM"}
        title={"NUTRITIONAL SUPPORT"}
        description={
          "Nutrition plays a great role in a person’s daily life and it is essential for a healthy living; particularly for patients undergoing cancer treatment. Most of the patients who come for treatment are from below poverty line and underprivileged families who cannot afford a well-balanced nutritional diet as they struggle to make ends meet. MSMF supports such patients during their chemotherapy sessions by providing them with a healthy balanced diet (bananas, almonds and threptin diskettes). We regularly provide support for around 800 patients every month and we continue to do so until the completion of their treatment."
        }
        callToActionComponent={
          <div className="mt-16 self-center">
            <Button type="button" onClick={() => {}}>
              Support Us
            </Button>
          </div>
        }
      />
      <ProgramSection
        programType={"SUPPORT PROGRAM"}
        title={"DRUG DISCOUNT"}
        description={
          "Drugs are a crucial part of every treatment. When it comes to periodic intake of drugs that last for several months, it creates a financial burden on the patients’ families.  MSMF has formed an oncology drug discount program to support underprivileged patients to procure medicines at discounted rates. The program has helped numerous patients to continue treatment without stopping mid-way, when they reach a financial crisis."
        }
        callToActionComponent={
          <div className="mt-16 self-center">
            <Button type="button" onClick={() => {}}>
              Support Us
            </Button>
          </div>
        }
      />
      <ProgramSection
        programType={"SUPPORT PROGRAM"}
        title={"SUPPORT FOR MEDICAL CARE"}
        description={
          "Health care is many a times a luxury that a majority on the country cannot afford. MSMF, with the support of the medical practitioners identifies patients who need financial and emotional support in going initiating and completing treatment. The hospital team along with social workers guide patients to avail support from various government programs and crowdfunding platforms. However these options are often time consuming and it is critical for the treatment to start at the earliest. MSMF with the help of our generous donors lends a helping hand to those patients in need. We reach out to people in an exclusive manner thereby enabling healthier and happier lives."
        }
        callToActionComponent={
          <div className="mt-16 self-center">
            <Button type="button" onClick={() => {}}>
              Support Us
            </Button>
          </div>
        }
      />
      <ProgramSection
        programType={"SUPPORT PROGRAM"}
        title={"ACTIVITIES FOR CHILDREN IN THE PEDIATRIC ONCOLOGY WING"}
        description={
          "Health care is many a times a luxury that a majority on the country cannot afford. MSMF, with the support of the medical practitioners identifies patients who need financial and emotional support in going initiating and completing treatment. The hospital team along with social workers guide patients to avail support from various government programs and crowdfunding platforms. However these options are often time consuming and it is critical for the treatment to start at the earliest. MSMF with the help of our generous donors lends a helping hand to those patients in need. We reach out to people in an exclusive manner thereby enabling healthier and happier lives."
        }
        callToActionComponent={
          <div className="mt-16 self-center">
            <Button type="button" onClick={() => {}}>
              Support Us
            </Button>
          </div>
        }
      />
    </Layout>
  );
};

export default PhilanthropyPrograms;
