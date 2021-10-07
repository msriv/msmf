import { useState } from "react";
import { Paper, Tab } from "@mui/material";
import { a11yProps, ColoredTabs, TabPanel } from "../../../componentsNew/Tabs";
import Layout from "../../../componentsNew/Layout";
import { Section, SectionTitle } from "../../../componentsNew/Section";
import { PhilanthropyTeams } from "../../../utils/People";
import PersonCard from "../../../componentsNew/Cards/PersonCard";
import SwipeableViews from "react-swipeable-views";

const People = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Layout>
      <Section>
        <SectionTitle type="subsection">
          <p>
            Our <span className="font-inter-semibold">Team</span>
          </p>
        </SectionTitle>
        <div className="w-10/12 mx-auto mt-10">
          <Paper elevation={2}>
            <ColoredTabs value={value} handleChange={handleChange}>
              {PhilanthropyTeams.map((team, id) => (
                <Tab key={id} label={team.teamName} {...a11yProps(id)} />
              ))}
            </ColoredTabs>
            <SwipeableViews
              axis={"x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              {PhilanthropyTeams.map((team, id) => (
                <TabPanel
                  key={id}
                  value={value}
                  index={id}
                  className="p-10 flex flex-wrap justify-center"
                >
                  {team.members.map((person, id) => (
                    <PersonCard
                      key={id}
                      name={person.name}
                      position={person.position}
                      thumbnail={person.thumbnail}
                      profile={person.profile}
                      about={person.about}
                    />
                  ))}
                </TabPanel>
              ))}
            </SwipeableViews>
          </Paper>
        </div>
      </Section>
    </Layout>
  );
};

export default People;
