import { ReactNode } from "react";
import { ImpactStories } from "../../../store/data/ImpactStories";
import { Section, SectionContent, SectionTitle } from "../../Common/Section";
import ImpactCard from "./ImpactCard";

const campaignList = [
  {
    thumbnail: "https://cdn.ms-mf.org/images/Philanthropy/Rectangle 100.png",
    title: "Support Rohit Patil",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. ",
    amountRaised: 27624330,
    totalAmount: 50000000,
    startDate: new Date("2021-11-01"),
    endDate: new Date("2021-11-30"),
    supporterCount: 10539,
  },
  {
    thumbnail: "https://cdn.ms-mf.org/images/Philanthropy/Rectangle 100.png",
    title: "Support Rohit Patil",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. ",
    amountRaised: 27624330,
    totalAmount: 50000000,
    startDate: new Date("2021-11-01"),
    endDate: new Date("2021-11-30"),
    supporterCount: 10539,
  },
  {
    thumbnail: "https://cdn.ms-mf.org/images/Philanthropy/Rectangle 100.png",
    title: "Support Rohit Patil",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. ",
    amountRaised: 27624330,
    totalAmount: 50000000,
    startDate: new Date("2021-11-01"),
    endDate: new Date("2021-11-30"),
    supporterCount: 10539,
  },
];

interface CampaignsProp {
  title?: ReactNode;
}

const Campaigns = (props: CampaignsProp) => {
  const { title } = props;
  return (
    <Section>
      <SectionTitle
        title={
          title || (
            <span>
              Our <b>Latest Campaigns</b>
            </span>
          )
        }
      />
      <SectionContent>
        <div className="flex justify-between w-full">
          {ImpactStories.map((story, key) => ( key < 3 &&
            <ImpactCard key={key} 
              thumbnail={story.images![0]} 
              title={`Support ${story.name}`}
              about={`${story.about.substring(0, 300)}...`}
            />
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};

export default Campaigns;
