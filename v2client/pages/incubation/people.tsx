import { useState } from "react";
import PeopleCard from "../../components/Common/PeopleCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";
import { Tab, TabPanel } from "../../components/Common/TabPanel";
import {
  IncubationMentors,
  IncubationPeople,
} from "../../store/data/people/incubation";

const People = () => {
  const [teamName, setTeamName] = useState("People");
  const [selectedTeam, setSelectedTeam] = useState(IncubationPeople);

  const handleTeamSelected = (event: any) => {
    const { value } = event.target;
    setTeamName(value);
    if (value === "People") {
      setSelectedTeam(IncubationPeople);
    } else {
      setSelectedTeam(IncubationMentors);
    }
  };

  return (
    <>
    <Section>
    <div>
          <img
            src="https://cdn.ms-mf.org/images/Incubation/TBI GROUP PIC.jpg"
            alt="molecular-immunology-team"
          />
        </div>
    </Section>

    <Section>
      <SectionTitle
        title={
          <span>
            Our <b>Team</b>
          </span>
        }
      />
      <SectionContent>
        <label className="flex flex-1 items-center mb-4">
          <select className=" w-full mt-1" onChange={handleTeamSelected}>
            <option value="People">People</option>
            <option value="Mentors">Mentors</option>
          </select>
        </label>
        <TabPanel id={teamName}>
          {Object.keys(selectedTeam).map((team, key) => (
            <Tab key={key} title={team}>
              {Object.keys(selectedTeam[team]).map((subTeam, key) =>
                subTeam === "people" ? (
                  <div key={key} className="w-full flex flex-wrap ">
                    {selectedTeam[team][subTeam].map((person, key) => (
                      <PeopleCard key={key} {...person} />
                    ))}
                  </div>
                ) : subTeam && subTeam !== "people" ? (
                  <div className="mt-6">
                    <SectionTitle title={<b>{subTeam}</b>} />
                    <div className="w-full flex flex-wrap ">
                      {selectedTeam[team][subTeam]?.map((person, key) => (
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
</>);

};

export default People;
