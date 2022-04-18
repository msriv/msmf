import { ContentCardNoBorder } from "../components/Common/ContentCardNoBorder";
import { Section, SectionContent } from "../components/Common/Section";

const ContactUs = () => {
  return (
    <Section>
      <SectionContent>
        <ContentCardNoBorder>
          <p className="text-4xl font-semibold">Contact Us - Get in touch</p>
          <div className="flex items-start">
            <img
              src="/assets/images/Common/home.svg"
              className="w-6 h-6 m-0 mr-2"
            />
            <p className="m-0 font-semibold text-lg text-[#6A6A6A]">
              Mazumdar Shaw Medical Foundation
              <br /> A-Block, 8th Floor
              <br /> #258/A, NH Health City
              <br /> Bangalore - 560 099
            </p>
          </div>
          <div className="flex items-center mt-6">
            <img
              src="/assets/images/Common/phone.svg"
              className="w-6 h-6 m-0 mr-2"
            />
            <p className="m-0 font-semibold text-lg text-[#6A6A6A]">
              +91 80 7122 2351, +91 80 2780 3456
            </p>
          </div>
          <div className="flex items-center mt-6">
            <img
              src="/assets/images/Common/mail.svg"
              className="w-6 h-6 m-0 mr-2"
            />
            <a
              href="mailto:msmf@ms-mf.org"
              className="m-0 font-semibold text-lg text-[#6A6A6A]"
            >
              msmf@ms-mf.org
            </a>
          </div>
        </ContentCardNoBorder>
      </SectionContent>
    </Section>
  );
};

export default ContactUs;
