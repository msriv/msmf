import People from "../../components/Client/ADRC/People";
import { ContentCard } from "../../components/Common/ContentCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const AboutUs = () => {
  return (
    <div>
      <Section>
        <SectionTitle title={<b>About Us</b>} />
        <SectionContent>
          <ContentCard>
            <div className="w-full flex justify-between">
              <div className="w-6/12 px-4">
                
                <p className="font-semibold text-4xl">Our Mission</p>
                <p className="">
                The Advanced Diagnostic Research Center (ADRC) strives to 
                provide the best possible diagnostic solutions to patients 
                with the assumption that a good diagnosis is itself half treatment.
                The extensive data generated is utilized in extensive 
                multidisciplinary clinical research to bring out the synergy 
                among physicians, pathologists and scientists with an intent
                to offer solutions to the challenges of today with a readiness 
                to meet the struggles of tomorrow with a bright and unique blend 
                of suitable treatment. {" "}
                </p>
  
              </div>
              <div className="w-6/12 px-4">
                <img
                  src="https://cdn.ms-mf.org/images/ADRC/about-us-banner.jpeg"
                  alt="About Us"
                  className="rounded"
                />
              </div>
            </div>
          </ContentCard>
        </SectionContent>
      </Section>
      <Section>
        <SectionContent>
          <ContentCard>
            <div className="w-full flex justify-between">
              <div className="w-12/12 px-4">
                
               
                <p className="font-semibold text-4xl">About Us</p>
                <p className="">
                Advanced Diagnostic Research Centre (ADRC) is a unit of Mazumdar Shaw Medical Foundation established towards translation of research output to improvement of patient care through advanced and affordable molecular tests. Scientists at ADRC  in collaboration with clinicians at the partnering Institutes,  Narayana Health and Mazumdar Shaw Medical Center strive to provide the best possible diagnostic solutions to patients with the assumption that a good diagnosis is itself half treatment. The extensive data generated is utilized in extensive multidisciplinary clinical research to bring out the synergy among physicians, pathologists and scientists with an intent to offer solutions to the challenges of today with a readiness to meet the struggles of tomorrow with a bright and unique blend of suitable treatment. 
Current focus area of ADRC include Brain Tumor, Organ transplants and Covid-19 and will be further expanded to other disease areas in near future. ADRC works in a B2B model in partnership with referring centres and clinicians. Patients requiring the services of ADRC will need to be referred by a doctor.
We are in the process of getting NABL accreditation.
 {" "}
                </p>
              </div>
            </div>
          </ContentCard>
        </SectionContent>
      </Section>
      
      <Section>
        <People />
      </Section>
    </div>
  );
};

export default AboutUs;
