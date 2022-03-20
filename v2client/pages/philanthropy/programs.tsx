import { ContentCard } from "../../components/Common/ContentCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const Programs = () => {
  return (
    <Section>
      <SectionTitle
        title={
          <span>
            Our <b>Programs</b>
          </span>
        }
      />
      <SectionContent>
        <ContentCard>
          <p className="font-bold text-[#6A6A6A] m-0 uppercase">Support Card</p>
          <p className="font-semibold text-4xl mt-2 uppercase">
            Activities for Children in the Pediatric Oncology Wing
          </p>
          <img className="w-9/12 mx-auto" src="/assets/images/Philanthropy/5_Programs Activities for child_MSCOP play area 4.jpg" alt="Activities for Children in the Pediatric Oncology Wing" />
          <p className="text-[#535050] text-xl">
            Health care is many a times a luxury that a majority on the country
            cannot afford. MSMF, with the support of the medical practitioners
            identifies patients who need financial and emotional support in
            going initiating and completing treatment. The hospital team along
            with social workers guide patients to avail support from various
            government programs and crowdfunding platforms. However these
            options are often time consuming and it is critical for the
            treatment to start at the earliest. MSMF with the help of our
            generous donors lends a helping hand to those patients in need. We
            reach out to people in an exclusive manner thereby enabling
            healthier and happier lives.
          </p>
        </ContentCard>
        <ContentCard>
          <p className="font-bold text-[#6A6A6A] m-0 uppercase">Support Card</p>
          <p className="font-semibold text-4xl mt-2 uppercase">Drug Discount</p>
          <img className="w-9/12 mx-auto" src="/assets/images/Philanthropy/3_Programs Drug Discount_MSCOP patient medical support.jpg" alt="Drug Discount" />
          <p className="text-[#535050] text-xl">
            Drugs are a crucial part of every treatment. When it comes to
            periodic intake of drugs that last for several months, it creates a
            financial burden on the patients’ families. MSMF has formed an
            oncology drug discount program to support underprivileged patients
            to procure medicines at discounted rates. The program has helped
            numerous patients to continue treatment without stopping mid-way,
            when they reach a financial crisis.
          </p>
          
        </ContentCard>
        <ContentCard>
          <p className="font-bold text-[#6A6A6A] m-0 uppercase">Support Card</p>
          <p className="font-semibold text-4xl mt-2 uppercase">
            Nutritional Support
          </p>
          <img className="w-9/12 mx-auto" src="/assets/images/Philanthropy/2_Programs Nutritional Support_MSCOP nutrition support.jpg" alt="Nutritional Support" />
          <p className="text-[#535050] text-xl">
            Nutrition plays a great role in a person’s daily life and it is
            essential for a healthy living; particularly for patients undergoing
            cancer treatment. Most of the patients who come for treatment are
            from below poverty line and underprivileged families who cannot
            afford a well-balanced nutritional diet as they struggle to make
            ends meet. MSMF supports such patients during their chemotherapy
            sessions by providing them with a healthy balanced diet (bananas,
            almonds and threptin diskettes). We regularly provide support for
            around 800 patients every month and we continue to do so until the
            completion of their treatment.
          </p>
        </ContentCard>
        <ContentCard>
          <p className="font-bold text-[#6A6A6A] m-0 uppercase">Support Card</p>
          <p className="font-semibold text-4xl mt-2 uppercase">
            Support for Medical Care
          </p>
          <img className="w-9/12 mx-auto" src="/assets/images/Philanthropy/4_Supprt MediCare_MSCOP patient meeting.jpg" alt="Nutritional Support" />
          <p className="text-[#535050] text-xl">
            Health care is many a times a luxury that a majority on the country
            cannot afford. MSMF, with the support of the medical practitioners
            identifies patients who need financial and emotional support in
            going initiating and completing treatment. The hospital team along
            with social workers guide patients to avail support from various
            government programs and crowdfunding platforms. However these
            options are often time consuming and it is critical for the
            treatment to start at the earliest. MSMF with the help of our
            generous donors lends a helping hand to those patients in need. We
            reach out to people in an exclusive manner thereby enabling
            healthier and happier lives.
          </p>
        </ContentCard>
        <div className="flex justify-center mt-12">
          <button className="msmf__cta-btn">Support Us</button>
        </div>
      </SectionContent>
    </Section>
  );
};

export default Programs;
