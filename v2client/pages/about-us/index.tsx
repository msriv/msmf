import People from "../../components/Client/Home/People";
import { ContentCardNoBorder } from "../../components/Common/ContentCardNoBorder";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

// Vision and Mission Updated

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
                  <div className="w-6/12">
                    <div className="text-[38px] font-helvetica text-left py-4">
                      Our <b>Mission</b>
                    </div>
                    <p className="text-[20px] ">
                      Facilitate research that transcends
                      inter-disciplinary boundaries towards addressing
                      challenges in treatment of various human diseases in a
                      translational manner. • Reach out to people in an
                      exclusive manner thereby enabling healthier and happier
                      lives all around. This is facilitated using a two prong
                      approach, both treatment and financial support to the sick
                      and needy.
                    </p>
                  </div>

                  <img
                    src={
                      "https://cdn.ms-mf.org/images/Homepage/Mission-About us.jpg"
                    }
                    alt="About Us Photo"
                    className="w-5/12 h-[420px] object-cover rounded-[8px]"
                  />
                </div>
              </ContentCardNoBorder>
            </div>
            <div id="our-vision">
              <ContentCardNoBorder>
                <div className="w-full flex space-x-10">
                  <img
                    src={"https://cdn.ms-mf.org/images/Homepage/Vision.jpg"}
                    alt="Vision Photo"
                    className="w-5/12 h-[420px] object-cover rounded-[8px]"
                  />
                  <div className="w-6/12">
                    <div className="text-[38px] font-helvetica text-left py-4">
                      Our <b>Vision</b>
                    </div>
                    <p className="text-[20px] ">
                      Our vision is to develop a robust ecosystem where we are
                      ready to anticipate the demands of today and answer
                      tomorrows challenges in the medical spectrum with a unique
                      blend of a new paradigm shift in the way diagnostic
                      solutions are offered in close collaboration among
                      researchers, pathologists, scientists, physicians and
                      patients.
                    </p>
                  </div>
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
