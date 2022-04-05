import PeopleCard from "../../components/Common/PeopleCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";
import { Tab, TabPanel } from "../../components/Common/TabPanel";
import { PhilanthropyPeople } from "../../store/data/people/philanthropy";

const People = () => {
  return (
    <Section>
      <SectionTitle
        title={
          <span>
            Our <b>Team</b>
          </span>
        }
      />
      <SectionContent>
        <TabPanel id={"PhilanthropyPeople"}>
          {Object.keys(PhilanthropyPeople).map((team, key) => (
            <Tab key={key} title={team}>
              <div className="w-full flex flex-wrap ">
                {PhilanthropyPeople[team].map((person, key) => (
                  <PeopleCard key={key} {...person} />
                ))}
              </div>
            </Tab>
          ))}
        </TabPanel>
      </SectionContent>
    </Section>
  );
};

export default People;
