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
  "Governing Council": {
    people: [
      {
        name: "Dr. Kiran Mazumdar Shaw",
        image: "/assets/images/People/Dr. KMS.jpeg",
        position:
          "Chairman & Managing Director Of Biocon Limited, Chairperson - MSMF",
      },
      {
        name: "Dr. Devi Prasad Shetty",
        image: "/assets/images/People/Dr. Devi Shetty.jpeg",
        position: "Chairman - Narayana Health",
      },
      {
        name: "Dr. Paul C Salins",
        image: "/assets/images/People/dr paul photo 3.jpg",
        position:
          "Managing Director-MSMF, Medical Director-Mazumdar Shaw Medical Center, Sr Vice President-Narayana Hrudayalaya, Chairman-MSMF TBI",
      },
    ],
  },
  "Investment Committee": {
    people: [
      {
        name: "Dr. Paul C Salins",
        image: "/assets/images/People/dr paul photo 3.jpg",
        position:
          "Managing Director-MSMF, Medical Director-Mazumdar Shaw Medical Center, Sr Vice President-Narayana Hrudayalaya, Chairman-MSMF TBI",
      },
      {
        name: "Murali Krishnan",
        position: "President, Finance – Biocon",
        image: "/assets/images/People/MurliKrishnan_KMT.jpg",
      },
      {
        name: "Paul Basil",
        position: "Co-Founder & Partner - Menterra",
        image: "/assets/images/People/Paul Basil.jpg",
      },
      {
        name: "Naganand Doraswamy",
        position: "Managing Director - Ideaspring Capital",
        image: "/assets/images/People/Naganand Doraswamy.jpg",
      },
      {
        name: "Prashant Chopra",
        position: "Advisor - UCSF Innovation Ventures",
        image: "/assets/images/People/Prashant Chopra.jpg",
      },
    ],
  },
  "Scientific Committee": {
    people: [
      {
        name: "Dr. Paul C Salins",
        image: "/assets/images/People/dr paul photo 3.jpg",
        position:
          "Managing Director-MSMF, Medical Director-Mazumdar Shaw Medical Center, Sr Vice President-Narayana Hrudayalaya, Chairman-MSMF TBI",
      },
      {
        name: "Dr. B.V. Murali Mohan",
        image: "/assets/images/People/Dr.Murali Mohan B V_0_1.jpg",
      },
      {
        name: "Dr. Pradeep Narayan",
        image: "/assets/images/People/Dr. Pradeep Narayan_Kolkata_.jpg",
      },
      {
        name: "Dr. Amritha Suresh",
        image: "/assets/images/People/Dr Amitha Suresh Ph.D- PI-5.JPG",
      },
      {
        name: "Dr. Manjula Das",
        image: "/assets/images/People/Manjula Das Ph.D-PI-1.JPG",
      },
    ],
  },
  "Management Team": {
    people: [
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
      {
        name: "Salai Jeyaseelan",
        position: "Chief Engineer",
      },
      {
        name: "Preethu B U",
      },
    ],
  },
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
