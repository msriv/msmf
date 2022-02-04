import { Section, SectionContent, SectionTitle } from "../../Common/Section";
import StoryCard from "./StoryCards";

const SupportStories = () => {
  return (
    <Section>
      <SectionTitle
        title={
          <span>
            Our <b>Impact Stories</b>
          </span>
        }
      />
      <SectionContent>
        <div className="flex justify-between w-full">
          <StoryCard
            thumbnail="/assets/images/Philanthropy/Rectangle 101.png"
            title="Lorem Ipsum is simply dummy"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <StoryCard
            thumbnail="/assets/images/Philanthropy/Rectangle 101.png"
            title="Lorem Ipsum is simply dummy"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <StoryCard
            thumbnail="/assets/images/Philanthropy/Rectangle 101.png"
            title="Lorem Ipsum is simply dummy"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </div>
        <div className="flex justify-center mt-12">
          <button className="msmf__cta-btn">Support Us</button>
        </div>
      </SectionContent>
    </Section>
  );
};

export default SupportStories;
