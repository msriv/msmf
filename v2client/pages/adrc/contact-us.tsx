import { ContentCard } from "../../components/Common/ContentCard";
import { Section, SectionContent } from "../../components/Common/Section";

const ContactUs = () => {
  return (
    <Section>
      <SectionContent>
        <ContentCard>
          <p className=" font-semibold text-4xl">General Query - Contact Us</p>
          <p className="m-0 font-bold text-[#6A6A6A]">
            Dr. Manjula Das - manjula.msmf@gmail.com
          </p>
          <p className="m-0 font-bold text-[#6A6A6A]">
            Dr. Sujan Dhar - sujan.dhar@ms-mf.org
          </p>
        </ContentCard>
      </SectionContent>
    </Section>
  );
};

export default ContactUs;
