import { MainTeam } from "../../../store/data/people/main"
import { IPerson } from "../../../utils/Interfaces"
import PeopleCard from "../../Common/PeopleCard"
import { Section, SectionContent, SectionTitle } from "../../Common/Section"
import { Tab, TabPanel } from "../../Common/TabPanel"

const People = () => {
  return (<Section>
      <SectionTitle
        title={
          <span>
            Our <b>Team</b>
          </span>
        }
      />
      <SectionContent>
        <TabPanel id={"PhilanthropyPeople"}>
          {Object.keys(MainTeam).map((team, key) => (
            <Tab key={key} title={team}>
              <div className="w-full flex flex-wrap ">
                {MainTeam[team]['people'].map((person, key) => (
                  <PeopleCard key={key} {...person} />
                ))}
              </div>
            </Tab>
          ))}
        </TabPanel>
      </SectionContent>
    </Section>)
}

export default People