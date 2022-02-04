import { ContentCard } from "../../components/Common/ContentCard";
import { Section, SectionContent } from "../../components/Common/Section";

const Donate = () => {
  return (
    <Section>
      <SectionContent>
        <ContentCard>
          <p className="font-semibold text-4xl">Contact Us - Get in Touch</p>
          <div className="flex items-start ">
            <span className="material-icons-round">home</span>
            <span className="ml-4 leading-tight font-semibold">
              Mazumdar Shaw Medical Foundation
              <br /> A-Block, 8th Floor
              <br /> #258/A, NH Health City
              <br /> Bangalore - 560 099
            </span>
          </div>
          <div className="flex items-start mt-4 font-semibold">
            <span className="material-icons-round">phone</span>
            <span className="ml-4 leading-tight">
              +91 80 7122 2351, +91 80 2780 3456
            </span>
          </div>
          <div className="flex items-start mt-4 font-semibold">
            <span className="material-icons-round">mail</span>
            <span className="ml-4 leading-tight">msmf@ms-mf.org</span>
          </div>
        </ContentCard>
      </SectionContent>
    </Section>
  );
};

export default Donate;
