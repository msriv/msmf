import { ReactNode } from "react";
import { ImpactStories } from "../../../store/data/ImpactStories";
import { Section, SectionContent, SectionTitle } from "../../Common/Section";
import ImpactCard from "./ImpactCard";

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
          {ImpactStories.map(
            (story, key) =>
              key < 3 && (
                <ImpactCard
                  key={key}
                  thumbnail={story.images![0]}
                  name={story.name}
                  title={`Support ${story.name}`}
                  about={`${story.about.substring(0, 300)}...`}
                />
              )
          )}
        </div>
      </SectionContent>
    </Section>
  );
};

export default Campaigns;
