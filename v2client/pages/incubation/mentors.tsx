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
  "Clinical Mentors": {
    people: [
      {
        name: "Dr. Paul C Salins",
        image: "/assets/images/People/dr paul photo 3.jpg",
        position: "Cranio-Maxillo Facial Surgery",
      },
      {
        name: "Dr. Samarth Shetty",
        image: "/assets/images/People/Dr Samarth Shetty.JPG",
        position: "Cranio-Maxillo Facial Surgery",
      },
      {
        name: "Dr. Rohit Ranade",
        image: "/assets/images/People/DR ROHIT RANADE.jpg",
        position: "Gyneco Oncology and Robotic surgery",
      },
    ],
  },
  "Scientific Mentors": {
    people: [
      {
        name: "Dr. Amritha Suresh",
        image: "/assets/images/People/Dr Amitha Suresh Ph.D- PI-5.JPG",
        position: "Integrated head and neck oncology research program",
      },
      {
        name: "Dr. Manjula Das",
        image: "/assets/images/People/Manjula Das Ph.D-PI-1.JPG",
        position: "Tumor immunology",
      },
      {
        name: "Dr. Nameeta Shah",
        position: "Neuro-Oncology Program",
        image: "/assets/images/People/Dr nameeta.jpg",
      },
    ],
  },
  Engineers: {
    people: [
      {
        name: "Dr. Dhanush Racheveti",
        position: "Assistant Professor, Saveetha Engineering College, Chennai",
      },
      {
        name: "Mr. Balamurugan",
        position: "Medical Research Scientist at Fourth Frontier, Bangalore",
      },
      {
        name: "Mr. Annamalai Chokalingam",
        position:
          "Industrial Veteran in Textile with 40years of experience in production",
      },
      {
        name: "Dr. Kannan",
        position: "Associate Professor, SRM University, Chennai",
      },
    ],
  },
  Business: {
    people: [
      {
        name: "Dr. Paul C Salins",
        image: "/assets/images/People/dr paul photo 3.jpg",
        position:
          "Managing Director-MSMF, Medical Director-Mazumdar Shaw Medical Center, Sr Vice President-Narayana Hrudayalaya, Chairman-MSMF TBI",
      },
      {
        name: "Dr. Samarth Shetty",
        image: "/assets/images/People/Dr Samarth Shetty.JPG",
        position: "Bionest In-Charge",
      },
      {
        name: "Dr. Sherin James",
        image: "/assets/images/People/DR SHERIN JAMES.jpg",
        position: "Senior Program Manager",
      },
    ],
  },
};

const Mentors = () => {
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

export default Mentors;
