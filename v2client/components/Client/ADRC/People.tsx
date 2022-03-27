import { useState } from "react";
import { ADRCPeople } from "../../../store/data/people/adrc";
import { IPerson } from "../../../utils/Interfaces";
import PeopleCard from "../../Common/PeopleCard";
import { Section, SectionContent, SectionTitle } from "../../Common/Section";
import { Tab, TabPanel } from "../../Common/TabPanel";

const People = () => {

  const [selectedTeam, setSelectedTeam] = useState("No Team Selected");

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
        <label className="flex flex-1 items-center mb-4">
          <span className="text-gray-700 mr-2">Team</span>
          <select className=" w-full mt-1" onChange={(event) => setSelectedTeam(event.target.value)}>
            <option value="No Team Selected">No Team Selected</option>
            {Object.keys(ADRCPeople).map((team, key) => (
              <option key={key} value={team}>{team}</option>
            ))}
          </select>
        </label>
        {ADRCPeople[selectedTeam] && Object.keys(ADRCPeople[selectedTeam]).map((subTeam, key) =>
          subTeam === "people" ? (
            <div className="w-full flex flex-wrap ">
              {ADRCPeople[selectedTeam][subTeam].map((person, key) => (
                <PeopleCard key={key} {...person} />
              ))}
            </div>
          ) : subTeam && subTeam !== "people" ? (
            <div className="mt-6">
              <SectionTitle title={<b>{subTeam}</b>} />
              <div className="w-full flex flex-wrap ">
                {ADRCPeople[selectedTeam][subTeam]?.map((person, key) => (
                  <PeopleCard key={key} {...person} />
                ))}
              </div>
            </div>
          ) : null
        )}
      </SectionContent>
    </Section>
  );
};

export default People;
