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
  [teamName: string]: Array<PeopleCardProps>;
} = {
  "Executive Management": [
    {
      name: "Dr. Paul C Salins",
      image: "/assets/images/People/dr paul photo 3.jpg",
      position:
        "Managing Director-MSMF, Medical Director-Mazumdar Shaw Medical Center, Sr Vice President-Narayana Hrudayalaya, Chairman-MSMF TBI",
    },
    {
      name: "Dr. Amritha Suresh",
      image: "/assets/images/People/Dr Amitha Suresh Ph.D- PI-5.JPG",
    },
  ],
  Administrators: [
    {
      name: "Blessy Rosewin",
      position: "Executive, Philanthropy",
    },
    {
      name: "Archana Ann J",
      position: "Manager, MSCOP",
      image: "/assets/images/People/archana ann j.jpeg",
    },
    {
      name: "Preethu B U",
      position: "Manager Finance, MSMF",
    },
    {
      name: "Kanagaraj K",
      position: "Executive, IT",
    },
    {
      name: "Abhilash J",
      position: "Executive, Faculty Maintenance",
    },
  ],
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
              <div className="w-full flex flex-wrap ">
                {PeopleData[team].map((person, key) => (
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
