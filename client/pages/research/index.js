import Carousel from "../../componentsNew/Carousel";
import ButtonCTA from "../../componentsNew/ButtonCTA";
import Button from "../../design-system/Button";
import {
  Section,
  SectionTitle,
  SectionContent,
} from "../../componentsNew/Section";
import LandingCTA from "../../componentsNew/LandingCTA";
import ResearchProgramCard from "../../componentsNew/Cards/ResearchProgramCard";
import Layout from "../../componentsNew/Layout";

const Index = () => {
  const imageList = [
    "/assets/images/Philanthropy/Banner.png",
    "/assets/images/Philanthropy/Banner2.png",
  ];

  return (
    <Layout>
      <div id="landing-carousel" className="w-11/12 mx-auto relative">
        <Carousel autoScroll imageList={imageList} />
        <div className="absolute top-32 left-32">
          <div className="space-y-4">
            <p className="text-5xl font-rubik-medium py-2 px-6 bg-christine w-max text-white">
              {" "}
              Excellence in Scientific Discovery{" "}
            </p>
            <p className="text-5xl font-rubik-medium py-2 px-6 bg-christine w-max text-white">
              {" "}
              bench-to-bedside research{" "}
            </p>
          </div>
          <div className="my-8">
            <ButtonCTA>Learn More</ButtonCTA>
          </div>
        </div>
      </div>
      <Section>
        <SectionTitle type="section">
          Our <b>Research Programs</b>
        </SectionTitle>
        <SectionContent>
          <div className="flex flex-col items-center">
            <div className="flex space-x-5 justify-center">
              <ResearchProgramCard
                image={"http://api.ms-mf.org/assets/research/tumor.jfif"}
                title={"Tumor Immunology"}
                description={
                  "In 2013, the extraordinary clinical success of immunotherapy has won this new method of therapy the title of “Breakthrough of the Year”. Nonetheless, we have just begun to unravel the therapeutic possibilities offered by anticancer immunotherapy."
                }
              />
              <ResearchProgramCard
                image={"http://api.ms-mf.org/assets/research/download.jfif"}
                title={"Integrated Head and Oncology"}
                description={
                  "To establish an efficient research program and to enable translation of the scientific discoveries for clinical benefit, the research program is integrated with the clinical service of Mazumdar-Shaw Medical Center."
                }
              />
              <ResearchProgramCard
                image={"http://api.ms-mf.org/assets/research/download.jfif"}
                title={"Neuro - Oncology Program"}
                description={
                  "The implementation of the two arms in parallel, through a multi-disciplinary team effort, involving basic scientists with expertise in high throughput technologies, cell biologists, clinicians and informaticians"
                }
              />
            </div>
            <div className="mt-14">
              <Button type="button">Learn More</Button>
            </div>
          </div>
        </SectionContent>
      </Section>
      <LandingCTA
        image={
          "http://api.ms-mf.org/assets/research/science-in-hd-oz1NzV2xWXU-unsplash-min.jpg"
        }
        heading={"Join our Team to make an Impact."}
        content={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
      />
    </Layout>
  );
};

export default Index;
