import Campaigns from "../../components/Client/Philanthropy/Campaigns";
import { ContentCard } from "../../components/Common/ContentCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const Impact = () => {
  return (
    <>
      <Section>
        <SectionTitle
          title={
            <span>
              Our <b>Impact</b>
            </span>
          }
        />
        <SectionContent>
          <ContentCard>
            <div className="w-full flex justify-between">
              <div className="w-7/12 px-6">
                <p className="font-semibold text-4xl">Pratheeksha VP</p>
                <p>
                  “When I see a white piece of paper, I feel I’ve got to draw.
                  And drawing, for me, is the beginning of everything” -
                  Ellsworth Kelly <br />
                  <br /> ‘I love to draw’ says Pratheeksha; a 12-year-old girl
                  who always loves to read books and draw. She tells us that it
                  keeps her happy and engaged in spite of her ongoing treatment
                  and a long recovery period ahead of her. Pratheeksha is
                  diagnosed with left distal femur osteosarcoma (a type of bone
                  cancer) which required 4 cycles of chemotherapy, surgery
                  followed by another 6 cycles of chemotherapy. She has received
                  4 cycles of chemotherapy and recently underwent surgery.
                  Currently, she is receiving her 4th cycle of chemotherapy.
                  MSMF sponsored her surgery and is continuing to support her
                  treatment by sponsoring her medicines and tests. Pratheeksha
                  is a single child and her father is a tailor by profession and
                  her mother is a housewife. The family hails from the Kodanga
                  region of Karnataka. “My daughter is my everything. I can’t
                  imagine what my daughter had to go through all these months.
                  By God’s grace, MSMF came forward to help my daughter’s
                  surgery which was a success. My daughter is now recovering
                  well and getting her regular follow-up with the last few
                  chemotherapies. We can’t wait to get home and live our lives
                  again. MSMF support was a timely help which saved my
                  daughter’s life and I’ll forever be grateful and thankful for
                  their help”.
                </p>
              </div>
              <div className="w-5/12 px-6 flex flex-col items-center">
                <img
                  src="/assets/images/Philanthropy/Rectangle 1498.png"
                  alt=""
                />
                <img
                  src="/assets/images/Philanthropy/Rectangle 1499.png"
                  alt=""
                />
              </div>
            </div>
          </ContentCard>
          <ContentCard>
            <div className="w-full flex justify-between">
              <div className="w-7/12 px-6">
                <p className="font-semibold text-4xl">Vinol John Saldanha</p>
                <p>
                  “My son was first diagnosed with Pre B Cell ALL in 2019. We
                  were all sad to hear his condition. We spent a lot of money
                  and got him treated. He was recovering well, when we came for
                  a follow up and found that he got relapsed again. We felt like
                  our whole world came crashing down. Our only son has to go
                  through this again. We were running low on funds as he had a
                  lot of complications due to the treatments and did not know
                  how to afford for both his regular treatments and others. With
                  the help of the doctors, we received funds from MSMF for
                  Vinol’s BMT and tests. MSMF was a God sent angel to help us at
                  the time of our most desperate need. Now we are back in our
                  home town in Udupi and my son is recovering well. He is
                  currently studying in 7th grade”. Vinol John Saldanha is a 13
                  year old boy from Udupi. He was first diagnosed with Pre B
                  Cell Acute lymphoblastic leukemia in December, 2019 and got
                  treated for the same. He got relapsed in February 2021 with
                  the same condition. Chemotherapy and BMT was the treatment
                  suggested by the doctors. The family had a lot of financial
                  problems to pay for the complete treatment. Hence, MSMF
                  sponsored partially for his BMT and Chemo port removal,
                  medicines and tests. Vinol is an only child and his father is
                  a driver by profession and mother is a housewife.
                </p>
              </div>
              <div className="w-5/12 px-6 flex flex-col items-center">
                <img
                  src="/assets/images/Philanthropy/Rectangle 1500.png"
                  alt=""
                />
                <img
                  src="/assets/images/Philanthropy/Rectangle 1501.png"
                  alt=""
                />
              </div>
            </div>
          </ContentCard>
          <div className="flex justify-center mt-12">
            <button className="msmf__cta-btn">Support Us</button>
          </div>
        </SectionContent>
      </Section>
      <Campaigns />
    </>
  );
};

export default Impact;
