import { useState } from "react";
import { Paper, Tab } from "@material-ui/core";
import { a11yProps, ColoredTabs, TabPanel } from "../../../componentsNew/Tabs";
import Layout from "../../../componentsNew/Layout";
import { Section } from "../../../componentsNew/Section";
import { Teams } from "./People";
import PersonCard from "../../../componentsNew/Cards/PersonCard";

const People = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Section>
        <div className="relative mt-56">
          <div
            style={{ height: "38vh", zIndex: -1 }}
            className="absolute w-full bg-silver-500 -top-40"
          ></div>
          <div className="absolute w-10/12 -top-28 left-20">
            <p className="uppercase font-inter-semibold text-4xl">Our Team</p>
          </div>
          <div className="w-10/12 mx-auto">
            <Paper elevation={2}>
              <ColoredTabs value={value} handleChange={handleChange}>
                {Teams.map((team, id) => (
                  <Tab key={id} label={team.teamName} {...a11yProps(id)} />
                ))}
              </ColoredTabs>
              {Teams.map((team, id) => (
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
                    />
                  ))}
                </TabPanel>
              ))}
            </Paper>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default People;
