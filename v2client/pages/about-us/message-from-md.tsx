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
            <div className="w-3/12"></div>
            <div className="w-9/12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              vel sapiente, nobis repudiandae itaque quisquam distinctio
              corrupti dicta dolores eligendi reprehenderit? Eius cumque harum
              vitae, quaerat placeat voluptas sapiente culpa. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Tempora vel sapiente,
              nobis repudiandae itaque quisquam distinctio corrupti dicta
              dolores eligendi reprehenderit? Eius cumque harum vitae, quaerat
              placeat voluptas sapiente culpa. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Tempora vel sapiente, nobis
              repudiandae itaque quisquam distinctio corrupti dicta dolores
              eligendi reprehenderit? Eius cumque harum vitae, quaerat placeat
              voluptas sapiente culpa.
            </div>
          </div>
        </ContentCardNoBorder>
      </SectionContent>
    </Section>
  );
};

export default MessageFromMD;
