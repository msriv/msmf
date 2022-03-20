import { ADRCPeople } from "../../../store/data/people/adrc";
import { IPerson } from "../../../utils/Interfaces";
import PeopleCard from "../../Common/PeopleCard";
import { Section, SectionContent, SectionTitle } from "../../Common/Section";
import { Tab, TabPanel } from "../../Common/TabPanel";

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
        <TabPanel cols={3}>
          {Object.keys(ADRCPeople).map((team, key) => (
            <Tab key={key} title={team}>
              {Object.keys(ADRCPeople[team]).map((subTeam, key) =>
                subTeam === "people" ? (
                  <div className="w-full flex flex-wrap ">
                    {ADRCPeople[team][subTeam].map((person, key) => (
                      <PeopleCard key={key} {...person} />
                    ))}
                  </div>
                ) : subTeam && subTeam !== "people" ? (
                  <div className="mt-6">
                    <SectionTitle title={<b>{subTeam}</b>} />
                    <div className="w-full flex flex-wrap ">
                      {ADRCPeople[team][subTeam]?.map((person, key) => (
                        <PeopleCard key={key} {...person} />
                      ))}
                    </div>
                  </div>
                ) : null
              )}
            </Tab>
          ))}
        </TabPanel>
      </SectionContent>
    </Section>
  );
};

export default People;
