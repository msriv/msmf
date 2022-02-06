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
                <p className="font-semibold text-4xl">Our Vision</p>
                <p className="">
                  In treating a disease, a good diagnosis is the battle half
                  won. Thus ADRC, Advanced Diagnostic Research Center, has been
                  established to specifically provide niche diagnostic solutions
                  to the patients. Most of the tests are validated and developed
                  in MSMF. The data generated is used in extensive
                  multidisciplinary clinical research to bring out the synergy
                  of the treating physicians, the pathologists and the
                  scientists.{" "}
                </p>
                <p className="font-semibold text-4xl">Certifications</p>
                <ul>
                  <li>DSIR</li>
                  <li>NABL</li>
                </ul>
              </div>
              <div className="w-6/12 px-4">
                <img
                  src="/assets/images/ADRC/about-us-banner.jpeg"
                  alt="About Us"
                  className="rounded"
                />
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
