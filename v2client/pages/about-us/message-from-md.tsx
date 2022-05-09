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
          <div className="flex w-full">
            <div className="w-full">
              “The landscape of healthcare is constantly changing, we are moving
              towards a better understanding of the molecular cause of disease,
              genetic basis for susceptibility with the advancement in
              technology. But, we are constantly challenged by the
              micro-organism, highly diverse pathology that are environmentally
              induced and our acts to pollute the nature. There should be a
              compelling need to dissociate healthcare from affluence to ensure
              that the fruits of progress in medicine benefits all who needs it.
              The foundation for medical progress should adhere to compassion
              and research motivated by sensitivity to human suffering.
              Therefore, the medical profession of the future cannot remain as a
              mere specialty but should learn and work with every branch of
              science. The effective physician of the future will also have to
              be a scientist, an engineer and a socio economist. The conviction
              behind the Mazumdar Shaw Medical Foundation is the belief that
              only a will, highly motivated by compassion can direct science
              towards intelligent innovations that convert today’s expensive
              medical discoveries into affordable solutions. To make this
              possible, a strategy was developed to seamlessly incorporate a
              high-tech hospital with translational research facilities, medical
              outreach & compassionate care programs and technology development
              capabilities, into a highly interactive ecosystem. The idea is to
              create a new hospital culture where every health-worker has ready
              access to resources for guided innovation at multiple levels. The
              Mazumdar Shaw Medical Center (MSMC), a unit of Narayana Health,
              with the Mazumdar Shaw Center for Translational Research (MSCTR)
              and Mazumdar Shaw- Technology Business Incubator (TBI) are the
              current pillars of the Mazumdar Shaw Medical Foundation.
              Additional, Advanced Diagnostics Research (ADRC) has been added as
              a new initiative to guide bedside applications and provide niche
              diagnostic solutions to the patients. What makes the practice of
              Medicine so exciting, is not just the scholarship, knowledge or
              skill, but the great mystery that is the human body. A doctor
              quickly learns that man is much more than the sum of parts taught
              in anatomy, or the processes unraveled in physiology but something
              much more, with hidden dimensions for which science has no
              vocabulary. Even when our medicine succeeds, the credit entirely
              must go to our body’s ability to withstand chemical the insult to
              its homeostasis from the use of drugs having less than specific
              action and its miraculous ability to heal despite violent
              disruption of its structural cohesion during surgery. There is
              also our environment which is changing much faster than our bodies
              can evolve and the stress of increasing expectation at every level
              of human performance in compelling unrealistic transformation of
              the way we live and function. For this reason, the Mazumdar Shaw
              Medical Foundation also has a focus on integrative medicine, as
              well as art and culture. Albert Einstein said “After a certain
              high level of technical skill is achieved, science and art tends
              to coalesce in aesthetics, plasticity, and form. The greatest
              scientists are artists as well.” The Mazumdar Shaw Medical
              Foundation is a platform seamlessly connecting and energizing
              multiple stake holders in healthcare towards achieving the
              specific goal of accessible excellence in healthcare. It is my
              view that we are establishing one of the most exciting enterprises
              for creating the future of global healthcare that can truly help
              make the world a happier place.”
            </div>
          </div>
        </ContentCardNoBorder>
      </SectionContent>
    </Section>
  );
};

export default MessageFromMD;
