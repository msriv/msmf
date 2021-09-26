import Layout from "../../../componentsNew/Layout";
import ProgramSection from "../../../componentsNew/ProgramSection";
import { Section, SectionContent } from "../../../componentsNew/Section";
import Button from "../../../design-system/Button";

const HackThePaper = () => (
  <Layout>
    <ProgramSection
      title={"HACK THE PAPER"}
      description={
        "A movement to change the conversation around science - scientific discoveries when made open source and easy to understand has led to remarkable moments in mankind’s history. Bill Clinton gave the green light to the U.S. military to stop intentionally scrambling satellite signals, thus paving the way for civilians to use GPS with the same accuracy as the military had long enjoyed. All of the consumer internement underway to make various elements of scientific research more open and collaborative in order to disrupt and impact mankind. May 7, witnessed history being penned as thirteen researchers from Mazumdar Shaw Medical Foundation chose to “Hack the Paper”."
      }
      noCallToAction
      noImages
    />
    <Section>
      <SectionContent>
        <div>
          <ul className="list-disc list-inside text-lg text-shark-400">
            <li>
              Bonney Lee James : Importance of intra operative detection of
              lymph node metastasis in head and neck squamous cell carcinoma
            </li>
            <li>
              Dr SumSum Sunny: Detection of pre-oral cancer using mobile phones
              and Oncogrid platform
            </li>
            <li>Mohit Srivastava: Dendritic cell-based cancer immunotherapy</li>
            <li>Syeda Lubna: Use of macrophage as immunotherapy</li>
            <li>
              C. A. Divya: Insulin and its 2 forms of receptors play a very
              important role in human body to take towards either diabetes or
              cancer
            </li>
            <li>
              Dr. Ritu Raj:Nanotechnology for diagnostic and targeted drug
              systems for cancer patients
            </li>
            <li>
              Sreejeta Mondal:Sensitivity of a novel small molecule developed
              against Bcl2 (an anti-apoptotic gene) in several haematological
              cancers
            </li>
            <li>
              Ram Bupal Reddy:Cancer treatment, need for personalised treatment
            </li>
            <li>
              Swathi Purighalla:Investigation into communicable disease outbreak
              of Salmonella Typhi
            </li>
            <li>
              Dr. Anuradha Arya:Developing culture system to enable precision
              medicine in breast cancer
            </li>
            <li>Raksha Ganesh:Role of hypoxia in Glioblastoma</li>
            <li>Pranali YS:Classification of data and finding bio-markers</li>
          </ul>
          <p className="mt-5 text-lg text-shark-400">
            The winners were Swati Purighalla and Dr Sumsum Sunny, who will now
            become ambassadors of the showcasing their science to the
            non-science world in a language that makes it amenable for multiple
            user groups shall engage. This will hopefully set-off a movement to
            transform the nature of science collaboration to lead to innovations
            that impact patient care across India and the world. MSMF
            collaborated with Siemens Healthineers and Garage5B , an early stage
            healthcare investment fund for this for this event.
          </p>
        </div>
      </SectionContent>
    </Section>

    <Section>
      <div className="flex justify-center">
        <Button type="button" onClick={() => {}}>
          Apply Now
        </Button>
      </div>
    </Section>
  </Layout>
);

export default HackThePaper;
