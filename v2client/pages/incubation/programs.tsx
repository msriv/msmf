import { NextPage } from "next";
import { ContentCard } from "../../components/Common/ContentCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const IncubationPrograms: NextPage = () => {
  return (
    <div style={{ background: "#F8F8F8" }}>
      <Section>
        <SectionTitle
          title={
            <span>
              Our <b>Incubation Programs</b>
            </span>
          }
        />
        <SectionContent>
          <ContentCard>
            <p className=" text-4xl font-semibold">BioNEST</p>
            <p>
              The BioNEST program established in 2019 is aimed to accelerate
              start-ups and leap-frog innovations with a potential to create a
              larger impact in the healthcare space. The BioNEST program brings
              together our network of partner hospitals and prominent
              clinicians, researchers and mentors from diverse domains along
              with Industrial, Venture Capital and other funding partners. In
              addition to multiple strategic partnerships, the accelerator's
              core strengths is its unique hospital based research ecosystem,
              focused on clinical validation and fast-tracking the path to
              commercialisation in an impactful manner.
              <br /> We want the innovations developed and nurtured at this
              incubator to have a significant social impact on the
              underprevilaged and underserved strata of society. There is a need
              for the people at the bottom of the pyramid to have access to
              economical solutions to their ever increasing and complex
              healthcare challenges. Our incubatees at The BioNEST strive to
              create scalable, profitable, and sustainable enterprises which
              will provide high quality and affordable medical care.
            </p>
            <div className="flex justify-center mt-12">
              <button className="msmf__cta-btn">Apply Now</button>
            </div>
          </ContentCard>
          <ContentCard>
            <p className=" text-4xl font-semibold">InCITE</p>
            <p>
              InCITE is a unique early stage incubator offering co-creation
              facilities for biomedical innovations to spur
              technically-disruptive, clinically-impactful and
              commercially-viable technologies. We bring together engineers,
              clinicians, scientists, entrepreneurs, business mentors and
              end-users to help you in your journey towards developing
              life-changing health care technologies. Supported by DST the
              program had already graduated many startups through their early
              stages to production and scale up.
            </p>
            <div className="flex justify-center mt-12">
              <button className="msmf__cta-btn">Apply Now</button>
            </div>
          </ContentCard>
          <ContentCard>
            <p className=" text-4xl font-semibold">
              CIP (Clinical Immersion Program)
            </p>
            <p>
              The Clinical Immersion Program (CIP) is a 6 month program unique
              to the Mazumdar Shaw Medical Center- Technology Business
              Incubator. We understand that innovators and entrepreneurs need to
              understand the complexities and pain points within the healthcare
              system to provide innovative solutions. Ever so often we come
              across startups who have spent several years developing a
              technology or a solution without knowing the true needs or gaps in
              the industry. This program aims to bridge this hiatus through
              mentorship, hands-on training on technology, designing and
              engineering, Intellectual property laws, Business development and
              access to real world scenarios at hospitals and community based
              centers. CIP is targeted towards early stage exploratory
              entrepreneurs, clinicians, researchers, technology enthusiasts who
              are looking to explore the healthcare ecosystem through an
              entrepreneurial lens.
            </p>
            <div className="flex justify-center mt-12">
              <button className="msmf__cta-btn">Apply Now</button>
            </div>
          </ContentCard>
          <ContentCard>
            <p className=" text-4xl font-semibold">PhD Programs</p>
            <p>
              <b>It's never too late to learn.</b> At MSMF we believe our core
              expertise and value chain can be harnessed to help entrepreneurs
              and clinicians realise their life’s ambition of completing a Phd
              program. Often at a very early stage of our lives we are forced to
              take certain career paths which over time can distance us from our
              true ambitions and desires. This is not just limited to
              entrepreneurs or clinicians but across all professions. We offer
              Phd programs currently in association with The Rajiv Gandhi
              University of Health Sciences, Bangalore and Manipal University,
              Manipal to help professionals pursue a Phd with assistance and
              support from MSMF.
            </p>
            <div className="flex justify-center mt-12">
              <button className="msmf__cta-btn">Apply Now</button>
            </div>
          </ContentCard>
        </SectionContent>
      </Section>
    </div>
  );
};

export default IncubationPrograms;
