import { ContentCardNoBorder } from "../../components/Common/ContentCardNoBorder";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const MessageFromMD = () => {
  return (
    <Section>
      <SectionTitle
        title={
          <p>
            <b>Message from our Managing Director</b>
          </p>
        }
      />
      <SectionContent>
        <ContentCardNoBorder>
          <div className="flex w-full justify-between">
            <div className="w-7/12 px-4">
              <div className="w-full">
                <div className="text-2xl mt-10">
                  <b>Dr. Paul Salins</b>
                </div>
                <p>
                  Mazumdar Shaw Medical Foundation (MSMF) is established to
                  provide philanthropic support, medical outreach and
                  translational research. Our goal is to make advanced
                  healthcare accessible and cutting-edge Medical Science
                  applications affordable. MSMF with Narayana Health has
                  established a unique hospital-based ecosystem for bringing our
                  shared vision to fruition.
                </p>
              </div>
            </div>
            <div className="w-5/12 px-4">
              <img
                src="https://cdn.ms-mf.org/images/People/dr paul photo 3.jpg"
                alt="About Us"
                className="rounded"
              />
            </div>
          </div>
          <div className="px-4">
            <p>
              Medical science has had the jurisdiction almost entirely for
              healthcare until now and has made remarkable progress possible.
              However, there is increasing recognition that the
              physician-clinic-hospital centric healthcare must now make way for
              a broader Personal-Community- Physician- Hospital model of
              technology led healthcare. This shift mandates an approach that
              creates a culture of shared ideation between engineering and
              medical sciences. The expertise from disease biology encompassing
              genomic and molecular research, big data analysis, clinical
              research etc must be now seamlessly integrated through advanced
              technology to socioeconomic factors to provide novel solutions of
              future healthcare.
            </p>
            <p>
              With this in mind MSMF has created an ecosystem for guided
              innovation at multiple levels. Mazumdar Shaw Centre for
              Translational Research (MSCTR), Mazumdar Shaw Technology Business
              Incubator (MSMF-TBI) and the Mazumdar Shaw Cancer Outreach program
              (MSCOP) with Narayana Health-Mazumdar Shaw Medical Centre (MSMC)
              constitutes an eclectic scientific network that provides an
              optimal setting for novel ideation, entrepreneurship and fast
              track bench-side discoveries to bedside applications and smart
              solutions.
            </p>
            <p>
              Healthcare and the practise of medicine in recent times demands
              more than addressing the physiological and/anatomical anomalies.
              The knowledgebase that includes the underlying molecular basis of
              disease conditions and its customization according to the genetic
              framework of each individual, can be leveraged to develop
              mandatory adjuncts that can enable precision medicine. Application
              of advanced technologies for big data analysis, both molecular and
              clinicopathological, is now a fast-advancing approach that can
              intelligently optimize existing information to obtain accurate
              diagnostics/prognostics. Finally, innovation is the primary
              strategy that can enable the translation of research findings to
              healthcare solutions. Fostering entrepreneurship in a healthcare
              set up will ensure a synergism with the clinicians fastening the
              process of deriving smart solutions. Given that medicine, today
              demands a comprehensive understanding of all the various
              stakeholders, the Mazumdar Shaw Medical Foundation has a focus on
              integrative medicine that includes developing the knowledgebase,
              and encouraging innovation for its optimal application towards
              value addition in healthcare.
            </p>
            <p className="italic">
              It is my view that we are embarking on one of the most exciting
              enterprises where clinicians, scientists and entrepreneurs can
              work under one roof for addressing healthcare issues by bringing
              in new tools and strategies in the fast-changing scenario of
              clinical practice.
            </p>
          </div>
        </ContentCardNoBorder>
      </SectionContent>
    </Section>
  );
};

export default MessageFromMD;
