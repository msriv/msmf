import Campaigns from "../../components/Client/Philanthropy/Campaigns";
import { ContentCard } from "../../components/Common/ContentCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";
import { ImpactStories } from "../../store/data/ImpactStories";

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
          {ImpactStories.map((story, key) => (
            <ContentCard key={key}>
              <div className="w-full px-6">
                <p className="font-semibold text-4xl">{story.name}</p>
                <p>{story.about}</p>
              </div>
              <div className="w-full px-6 flex justify-center space-x-28">
                {story.images?.map((img, key) => (
                  <img
                    key={key}
                    src={img}
                    alt=""
                    className="w-5/12 h-96 object-contain"
                  />
                ))}
              </div>
            </ContentCard>
          ))}
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
