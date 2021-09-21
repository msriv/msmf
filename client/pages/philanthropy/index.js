import Carousel from "../../componentsNew/Carousel";
import ButtonCTA from "../../componentsNew/ButtonCTA";
import Button from "../../design-system/Button";
import {
  Section,
  SectionTitle,
  SectionContent,
} from "../../componentsNew/Section";
import PhilanthropyCard from "../../componentsNew/Cards/PhilanthropyCard";
import CampaignCard from "../../componentsNew/Cards/CampaignCard";
import ImpactCard from "../../componentsNew/Cards/ImpactCard";
import LandingCTA from "../../componentsNew/LandingCTA";
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
            <p className="text-5xl font-rubik-medium py-2 px-6 bg-guardsman-red w-max text-white">
              {" "}
              Join the battle,{" "}
            </p>
            <p className="text-5xl font-rubik-medium py-2 px-6 bg-guardsman-red w-max text-white">
              {" "}
              Because Cancer cannot be fought alone{" "}
            </p>
          </div>
          <div className="my-8">
            <ButtonCTA>Donate</ButtonCTA>
          </div>
        </div>
      </div>
      <Section>
        <SectionTitle type="subSection">
          Our <b>Programs</b>
        </SectionTitle>
        <SectionContent>
          <div className="flex flex-col items-center">
            <div className="flex space-x-5 justify-center">
              <PhilanthropyCard
                title="Nutritional Support"
                image={
                  "http://api.ms-mf.org/assets/ja-ma--gOUx23DNks-unsplash.jpg"
                }
              />
              <PhilanthropyCard
                title="Drug Discount"
                image={
                  "http://api.ms-mf.org/assets/myriam-zilles-KltoLK6Mk-g-unsplash.jpg"
                }
              />
              <PhilanthropyCard
                title="Support for Medical Care"
                image={
                  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                }
              />
              <PhilanthropyCard
                title="Ecosystem For Children - Pediatric Oncology Wing"
                image={
                  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
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
        <SectionTitle type="subSection">
          Our <b>Latest Campaigns</b>
        </SectionTitle>
        <SectionContent>
          <div className="flex flex-col items-center">
            <div className="flex space-x-10 justify-center">
              <CampaignCard
                {...{
                  image:
                    "http://api.ms-mf.org/assets/The%20impact%20banner.JPG",
                  title: "Support Rohit Patil",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. ",
                  goal: 50000000,
                  achieved: 27624330,
                  daysLeft: 23,
                  supporters: 10539,
                }}
              />
              <CampaignCard
                {...{
                  image:
                    "https://drive.google.com/uc?id=1iQtUPVXsH_6RgxTaFQFSDRgaVWeDxo7h",
                  title: "Support Rajesh",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. ",
                  goal: 50000000,
                  achieved: 37624330,
                  daysLeft: 23,
                  supporters: 10539,
                }}
              />
              <CampaignCard
                {...{
                  image:
                    "https://drive.google.com/uc?id=16-nq4n1hgRZ3o32BCu8Ls-SoF5FBK6rN",
                  title: "Support Suraj Shetty",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. ",
                  goal: 50000000,
                  achieved: 48624330,
                  daysLeft: 23,
                  supporters: 10539,
                }}
              />
            </div>
          </div>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle type="subSection">
          Our <b>Impact Stories</b>
        </SectionTitle>
        <SectionContent className="shadow-lg">
          <div className="flex flex-col items-center">
            <div className="flex space-x-10 justify-center">
              <ImpactCard
                image="http://api.ms-mf.org/assets/_MG_0305.JPG"
                title="Name of the story"
                description="Description of the story."
              />
              <ImpactCard
                image="http://api.ms-mf.org/assets/none.JPG"
                title="Name of the story"
                description="Description of the story."
              />
              <ImpactCard
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                title="Name of the story"
                description="Description of the story. Description of the story. Description of the story. Description of the story."
              />
            </div>
            <div className="mt-14">
              <Button type="button">Support Us</Button>
            </div>
          </div>
        </SectionContent>
      </Section>
      <LandingCTA
        image={
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        }
        heading={"You can help Us."}
        content={
          "Every person can contribute to a cause that they strongly believe in. We are committed to giving you the best experience possible and believe that our relationship is one of trust and mutual understanding."
        }
      />
    </Layout>
  );
};

export default Index;
