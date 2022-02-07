import PeopleCard, {
  PeopleCardProps,
} from "../../components/Common/PeopleCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";
import { Tab, TabPanel } from "../../components/Common/TabPanel";

const PeopleData: {
  [teamName: string]: {
    people: Array<PeopleCardProps>;
    [subTeam: string]: Array<PeopleCardProps> | undefined;
  };
} = {
  "Current Team": {
    people: [
      {
        name: "Dr. Amritha Suresh",
        image: "/assets/images/People/Dr Amitha Suresh Ph.D- PI-5.JPG",
        position: "Principal Investigator, PhD (Molecular Biology)",
      },
      {
        name: "Dr. Manjula Das",
        image: "/assets/images/People/Manjula Das Ph.D-PI-1.JPG",
        position: "Prinicipal Investigator",
      },
      {
        name: "Dr. Ravi Sirdeshmukh",
        image: "/assets/images/People/Ravi-Sirdeshmukh.png",
        position: "Prinicipal Investigator",
      },
      {
        name: "Dr. Ravi Sirdeshmukh",
        image: "/assets/images/People/Ravi-Sirdeshmukh.png",
        position: "Prinicipal Investigator",
      },
    ],
    "Molecular Immunology": [
      {
        name: "Dr. Amritha Suresh",
        image: "/assets/images/People/Dr Amitha Suresh Ph.D- PI-5.JPG",
        position: "Principal Investigator, PhD (Molecular Biology)",
      },
      {
        name: "Dr. Manjula Das",
        image: "/assets/images/People/Manjula Das Ph.D-PI-1.JPG",
        position: "Prinicipal Investigator",
      },
    ],
    "Integrated Head and Neck Oncology": [
      {
        name: "Dr. Amritha Suresh",
        image: "/assets/images/People/Dr Amitha Suresh Ph.D- PI-5.JPG",
        position: "Principal Investigator, PhD (Molecular Biology)",
      },
      {
        name: "Dr. Manjula Das",
        image: "/assets/images/People/Manjula Das Ph.D-PI-1.JPG",
        position: "Prinicipal Investigator",
      },
    ],
    "Neuro Oncology": [
      {
        name: "Dr. Amritha Suresh",
        image: "/assets/images/People/Dr Amitha Suresh Ph.D- PI-5.JPG",
        position: "Principal Investigator, PhD (Molecular Biology)",
      },
      {
        name: "Dr. Manjula Das",
        image: "/assets/images/People/Manjula Das Ph.D-PI-1.JPG",
        position: "Prinicipal Investigator",
      },
    ],
    "Product Research": [
      {
        name: "Dr. Amritha Suresh",
        image: "/assets/images/People/Dr Amitha Suresh Ph.D- PI-5.JPG",
        position: "Principal Investigator, PhD (Molecular Biology)",
      },
      {
        name: "Dr. Manjula Das",
        image: "/assets/images/People/Manjula Das Ph.D-PI-1.JPG",
        position: "Prinicipal Investigator",
      },
    ],
  },
  Collaborators: { people: [] },
  Alumni: { people: [] },
};

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
        <TabPanel>
          {Object.keys(PeopleData).map((team, key) => (
            <Tab key={key} title={team}>
              {Object.keys(PeopleData[team]).map((subTeam, key) =>
                subTeam === "people" ? (
                  <div className="w-full flex flex-wrap ">
                    {PeopleData[team][subTeam].map((person, key) => (
                      <PeopleCard key={key} {...person} />
                    ))}
                  </div>
                ) : subTeam && subTeam !== "people" ? (
                  <div className="mt-6">
                    <SectionTitle title={<b>{subTeam}</b>} />
                    <div className="w-full flex flex-wrap ">
                      {PeopleData[team][subTeam]?.map((person, key) => (
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