import { Section, SectionTitle, SectionContent } from "../../Common/Section";

const IncubationIntroduction = (): JSX.Element => {
  return (
    <Section>
      <SectionTitle
        title={
          <span>
            About <b>MSMF TBI</b>
          </span>
        }
      />
      <SectionContent>
        <p>
          The Mazumdar Shaw Medical Foundation was started in 2014, with the
          belief that only a will, highly motivated by compassion can direct
          science towards intelligent innovations that convert today’s expensive
          medical discoveries into affordable solutions. To make this possible,
          a strategy was developed to seamlessly incorporate a high-tech
          hospital with translational research facilities, medical outreach &
          compassionate care programs and technology development capabilities,
          into a highly interactive ecosystem.
        </p>
        <p>
          Nine out of Ten startups fail, statistics testifies the hard truth.
          Startup ecosystems like Incubators, accelerators, co–working spaces
          etc should be well equipped to improve the odds of success for the
          startups and the entrepreneurs should be working harder and smarter
          understanding the reality.
        </p>
        <p>
          Over the last decade, The Mazumdar Shaw Medical Foundation (MSMF) &
          Narayana Health (NH) has established an ecosystem to promote
          healthcare innovation and entrepreneurship at its flagship hospital at
          Narayana Health City located in Bangalore. To promote healthcare
          innovation in this ecosystem, The Department of Science and Technology
          – Government of India conferred upon Mazumdar Shaw Medical Foundation
          the status of the “Technology Business Incubator” in 2014. Currently
          the technology business incubator hosts DST’s INCITE and BIRAC’s
          BioNEST programs in a 12,000 sq.ft dedicated space for innovation and
          incubation. The facility is further augmented by the The Mazumdar Shaw
          Medical Foundation, Mazumdar Center for Translational Research and The
          Advanced Diagnostic Research Center. Together they constitute the key
          functionaries of this ecosystem incorporating a unique layer of
          Innovation into the DNA of the organisation.
        </p>
        {/* <div className="flex justify-center mt-12">
          <button className="msmf__cta-btn">Apply Now</button>
        </div> */}
      </SectionContent>
    </Section>
  );
};

export default IncubationIntroduction;
