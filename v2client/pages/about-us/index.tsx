import People from "../../components/Client/Home/People";
import { ContentCardNoBorder } from "../../components/Common/ContentCardNoBorder";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const AboutUs = () => {
  return (
    <>
      <Section>
        <SectionTitle
          title={
            <p>
              <b>About Us</b>
            </p>
          }
        />
        <SectionContent>
          <div id="our-mission-and-vision">
            <div id="our-mission">
              <ContentCardNoBorder>
                <div className="w-full flex space-x-10">
                  <p className="w-6/12">
                    To facilitate research that will contribute to early
                    detection and treatment of various human diseases in a
                    translational manner that is derived from knowledge gained
                    through cellular, molecular, biochemical and genetic
                    approaches. To reach out to people in an exclusive manner
                    thereby enabling healthier and happier lives all around.
                    This is facilitated using a two prong approach, both
                    treatment and financial support to the sick and needy.
                  </p>
                  <img src="" alt="About Us Photo" className="w-5/12" />
                </div>
              </ContentCardNoBorder>
            </div>
            <div id="our-vision">
              <ContentCardNoBorder>
                <div className="w-full flex space-x-10">
                  <img src="" alt="Vision Photo" className="w-5/12" />
                  <p className="w-6/12">
                    Our vision is to develop a robust ecosystem where we are ready to anticipate the
demands of today and answer tomorrow&#39;s challenges in the medical spectrum with a
unique blend of a new paradigm shift in the way diagnostic solutions are offered in close
collaboration among researchers, pathologists, scientists, physicians and patients.
                  </p>
                </div>
              </ContentCardNoBorder>
            </div>
          </div>
        </SectionContent>
      </Section>
          <People />
    </>
  );
};

export default AboutUs;
