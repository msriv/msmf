import Carousel from "../../components/Carousel";
import ButtonCTA from "../../components/ButtonCTA";
import Button from "../../design-system/Button";
import {
  Section,
  SectionTitle,
  SectionContent,
} from "../../components/Section";
import Layout from "../../components/Layout";
import TestsCard from "../../components/Cards/TestsCard";
import ContentCard from "../../components/Cards/ContentCard";

const Diagnostics = () => {
  const imageList = [
    "/assets/images/Philanthropy/Banner.png",
    "/assets/images/Philanthropy/Banner2.png",
    "/assets/images/Diagnostics/national-cancer-institute-jeT_DE3esSI-unsplash.jpg",
  ];

  return (
    <Layout>
      <div
        id="landing-carousel"
        style={{ height: "90vh" }}
        className="w-11/12 mx-auto relative"
      >
        <Carousel autoScroll imageList={imageList} />
        <div className="absolute top-32 left-32">
          <div className="space-y-4">
            <p className="text-5xl font-rubik-medium py-2 px-6 bg-mountain-meadow w-max text-white">
              {" "}
              Excellence in Scientific Discovery{" "}
            </p>
            <p className="text-5xl font-rubik-medium py-2 px-6 bg-mountain-meadow w-max text-white">
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
          Our <b>Tests</b>
        </SectionTitle>
        <SectionContent>
          <div className="flex flex-col items-center">
            <div className="flex space-x-5 justify-center">
              <TestsCard
                icon={""}
                title={"Tumor Immunology"}
                description={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. "
                }
              />
              <TestsCard
                icon={""}
                title={"Tumor Immunology"}
                description={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. "
                }
              />
              <TestsCard
                icon={""}
                title={"Tumor Immunology"}
                description={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. "
                }
              />
            </div>
            <div className="mt-14">
              <Button type="button">Learn More</Button>
            </div>
          </div>
        </SectionContent>
      </Section>
      <Section>
        <div className=" w-full bg-silver-100 flex justify-between items-center p-16 overflow-hidden">
          <div id="content" className="flex flex-col space-y-10 w-5/12">
            <ContentCard>
              <p className="text-3xl font-roboto-bold mb-2">Contact us.</p>
              <p className="text-lg text-shark-400 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry. Lorem Ipsum has
                been the industry.{" "}
              </p>
            </ContentCard>
            <ContentCard>
              <p className="text-3xl font-roboto-bold mb-2">
                Collaborate with us.
              </p>
              <p className="text-lg text-shark-400 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry. Lorem Ipsum has
                been the industry.{" "}
              </p>
            </ContentCard>
            <ContentCard>
              <p className="text-3xl font-roboto-bold mb-2">
                Explore career with us.
              </p>
              <p className="text-lg text-shark-400 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry. Lorem Ipsum has
                been the industry.{" "}
              </p>
            </ContentCard>
          </div>
          <div id="image" className="flex bg-silver-800 w-6/12">
            <img
              style={{ height: 670 }}
              className="align-top w-full object-cover"
              src="/assets/images/Diagnostics/national-cancer-institute-2fyeLhUeYpg-unsplash.jpg"
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Diagnostics;
