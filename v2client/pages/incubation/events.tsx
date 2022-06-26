import { ContentCard } from "../../components/Common/ContentCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const GalleryData = [
  {
    topic:
      " Adichunchunagiri Medical college research group visit to discuss on Research Collaborations. Dr Narasaraju & team.    ",
    date: "December 14, 2021 ",
    image:
      "https://cdn.ms-mf.org/images/Incubation/events/Adichunchunagiri visit.jpg",
  },
  {
    topic: "",
    date: "",
    image:
      "https://cdn.ms-mf.org/images/Incubation/events/Dr Suresh Nair Visit.jpg",
  },
  {
    topic:
      "Signing of MoU between Dr. Paul Salins & Dr. Vikram Khurana (Chairman TBDC) ",
    date: "",
    image: "https://cdn.ms-mf.org/images/Incubation/events/MoU SIGN.jpeg",
  },
  {
    topic: "NEC GLOBAL JAPAN TEAM visit to TBI ",
    date: "MAY 6th 2022.",
    image:
      "https://cdn.ms-mf.org/images/Incubation/events/NEC Global Japan team.jpeg",
  },
  {
    topic:
      "atDose Japanese company visit With Dr. Hidenori Nakamura, Dr. Abhijit, Dr Gopalakrishna Pai. Discussion on the novel product for micro-dosing and intratumoral application    ",
    date: "13th May 2022.",
    image: "https://cdn.ms-mf.org/images/Incubation/events/atDose.jpg",
  },
  {
    topic:
      "NEC GLOBAL JAPAN discussion on Artificial intelligence in Health care ",
    date: "",
    image:
      "https://cdn.ms-mf.org/images/Incubation/events/NES global dicsussion on collaboration.jpeg",
  },
  {
    topic: "NH Dr Rupert visit on ",
    date: "14th June 2022",
    image:
      "https://cdn.ms-mf.org/images/Incubation/events/NH Dr. Rupert visit.jpeg",
  },
  {
    topic:
      "NH Neuro team visit – Dr Suresh Nair Dean, Professor & Chairman of Neurosurgery at SCTIMST",
    date: "May 20th 2022",
    image:
      "https://cdn.ms-mf.org/images/Incubation/events/NH Neuro team visit.jpg",
  },
  {
    topic:
      "Dr. Paul showing the facilities to Jonas Brunschwig, CEO | Consul General, SWISSNEX ",
    date: "",
    image:
      "https://cdn.ms-mf.org/images/Incubation/events/Swissnex CEO Vsiting our  facilities.jpeg",
  },
  {
    topic: "SWISSNEX TEAM VISIT ",
    date: "4th APRIL 2022.",
    image:
      "https://cdn.ms-mf.org/images/Incubation/events/Swissnex team Visit.jpeg",
  },
  {
    topic:
      "Dr Vibhor Bhansal, Dr Vikram Khuarana, Miss Neha, Dr Swapna, Dr Paul and Dr Samarth with Biocon CEO Kiran Mazumdar Shaw ",
    date: "",
    image: "https://cdn.ms-mf.org/images/Incubation/events/TBDC - BIOCON.jpeg",
  },
  {
    topic:
      "TBDC (TORONTO BUSINESS DEVELOPMENT CENTRE) team visit on 31st March 2022 ",
    date: "",
    image: "https://cdn.ms-mf.org/images/Incubation/events/TBDC.jpeg",
  },
];
const MentoringEventsData = [
  {
    name: "Dr. Arjun Alva ",
    position: " ",
    topic: "",
    date: "April 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: "Dr. Rohit Ranade - Dr. Subhash Narayanan ",
    position: "Founder & CEO -Sascan Meditech Pvt Ltd ",
    topic: "MSMF contributed greatly to our journey through clinical trials.",
    date: "May 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: " Dr. Nidhi Tandon -  Manishaa Soin ",
    position: "Founder, CanceRX",
    topic: "",
    date: "June 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: "Dr. Vivek Shetty - Dr. Sivakumar Muthusamy ",
    position: "Founder, Ariviya",
    topic: "",
    date: "July 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: "Dr. Diwakar Goutham- Mangesh Belwalkar ",
    position: "",
    topic: "",
    date: "Aug 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: "Dr. Shibu Pillai and Dr. Radhika Manohar- Ankita Kumar ",
    position: "Founder, Ariviya",
    topic: "",
    date: "Sept 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: "Dr. Ravichandra - Vaidyanathan A",
    position: "Founder  Personal Air Quality Systems Pvt Ltd",
    topic: "",
    date: "Oct 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: "Dr. Murali Mohan - Subodh Gupta",
    position: "",
    topic: "",
    date: "Nov 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: "Dr. Anil Kumar Sapare - Rahul",
    position: "MD Docturnal",
    topic: "",
    date: "Dec 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: "Dr. Nitin Nair - Dr. Sivakumar Muthusamy",
    position: "Founder, Ariviya",
    topic: "",
    date: "Jan 2022",
    image: "https://cdn.ms-mf.org/images/Incubation/January 2022.png",
  },
  {
    name: "Dr. Harish Mallapura - Dr Deepak",
    position: "Sawant Lab",
    topic: "",
    date: "Feb 2022",
    image: "https://cdn.ms-mf.org/images/Incubation/Feb 2022 .jpg",
  },
  {
    name: "Dr Srikant Venkatkrishnan",
    position: "",
    topic: "",
    date: "March 2022",
    image: "https://cdn.ms-mf.org/images/Incubation/March .jpg",
  },
];

const WebinarsEventsData = [
  {
    name: "",
    position: " ",
    topic:
      "Opportunities in MedTech Space: Frontline healthcare, safe surgery & pediatric cancer",
    date: "2nd April 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: "Dr Suresh Nair",
    position: "",
    topic: "Concept to product: Demystifying product development",
    date: "28th May 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: "Mr. Diwakar Kaushik",
    position: " ",
    topic: "Goal setting and OKR (Objectives and Key Results) for startups ",
    date: "30th September 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: "Dr. Gautam Wankhede",
    position: "MyLab Discovery Solutions",
    topic: "",
    date: "26th November 2021",
    image: "https://cdn.ms-mf.org/images/Incubation/msmf_logo1.jpg",
  },
  {
    name: "Mahuva Shetty & Ankit Anand",
    position: "",
    topic: "IPR in HealthTech startup - Shall we care or not?",
    date: "5th March 2022",
    image: "https://cdn.ms-mf.org/images/Incubation/IPR in health Tech.jpg",
  },
];
const Events = () => {
  return (
    <>
      <div className="text-[38px] font-helvetica text-center mt-10">
        <b>Events</b>
      </div>
      <Section>
        <SectionTitle
          title={
            <span>
              <b>Gallery/ Visits </b>
            </span>
          }
        />
        {/* <div className="w-4/12 my-0 p-3 mx-auto bg-research flex"> */}
        <SectionContent>
          <div className=" mt-8 flex flex-wrap w-full justify-evenly ">
            {GalleryData.map((project, key) => (
              <div key={key} className="w-4/12 p-4 items-center">
                <ContentCard className="shadow-md rounded bg-white p-10 h-full">
                  {/* image for news */}
                  <img className="place-self-center m-0" src={project.image} />
                  {/* Title for news */}
                  <p className="font-semibold text-2xl text-left mt-5">
                    {" "}
                    {project.topic}
                  </p>
                  <p className="font-bold uppercase text-[#6A6A6A] m-0">
                    {project.date}
                  </p>
                  {/* {project.members.map((member, key) => (
                  <p className="text-[#535050] m-0" key={key}>
                    {member}
                  </p>
                ))} */}
                  {/* text */}
                  {/* <p className="mb-0 font-bold text-[#6A6A6A] uppercase">{" "}</p>
                <p className="m-0">{project.text}</p> */}
                </ContentCard>
              </div>
            ))}
          </div>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle
          title={
            <span>
              <b>Mentoring Clinic</b>
            </span>
          }
        />
        {/* <div className="w-4/12 my-0 p-3 mx-auto bg-research flex"> */}
        <SectionContent>
          <div className=" mt-8 flex flex-wrap w-full justify-evenly ">
            {MentoringEventsData.map((project, key) => (
              <div key={key} className="w-4/12 p-4 items-center">
                <ContentCard className="shadow-md rounded bg-white p-10 h-full">
                  {/* image for news */}
                  <img className="place-self-center m-0" src={project.image} />
                  {/* Title for news */}
                  <p className="font-3xl uppercase text-black m-0">
                    {project.topic}
                  </p>
                  <p className="font-semibold text-2xl text-left mt-5">
                    {" "}
                    {project.name}
                  </p>
                  <p className="font-3xl uppercase text-[#6A6A6A] m-0">
                    {project.position}
                  </p>
                  <p className="font-bold uppercase text-[#6A6A6A] m-0">
                    {project.date}
                  </p>
                  {/* {project.members.map((member, key) => (
                  <p className="text-[#535050] m-0" key={key}>
                    {member}
                  </p>
                ))} */}
                  {/* text */}
                  {/* <p className="mb-0 font-bold text-[#6A6A6A] uppercase">{" "}</p>
                <p className="m-0">{project.text}</p> */}
                </ContentCard>
              </div>
            ))}
          </div>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle
          title={
            <span>
              <b>Webinars</b>
            </span>
          }
        />
        {/* <div className="w-4/12 my-0 p-3 mx-auto bg-research flex"> */}
        <SectionContent>
          <div className=" mt-8 flex flex-wrap w-full justify-evenly ">
            {WebinarsEventsData.map((project, key) => (
              <div key={key} className="w-4/12 p-4 items-center">
                <ContentCard className="shadow-md rounded bg-white p-10 h-full">
                  {/* image for news */}
                  <img className="place-self-center m-0" src={project.image} />
                  {/* Title for news */}
                  <p className="font-semibold text-2xl text-left mt-5">
                    {" "}
                    {project.name}
                  </p>
                  <p className="font-3xl uppercase text-[#6A6A6A] m-0">
                    {project.position}
                  </p>
                  <p className="font-bold uppercase text-[#6A6A6A] m-0">
                    {project.date}
                  </p>
                  {/* {project.members.map((member, key) => (
                  <p className="text-[#535050] m-0" key={key}>
                    {member}
                  </p>
                ))} */}
                  {/* text */}
                  {/* <p className="mb-0 font-bold text-[#6A6A6A] uppercase">{" "}</p>
                <p className="m-0">{project.text}</p> */}
                </ContentCard>
              </div>
            ))}
          </div>
        </SectionContent>
      </Section>
    </>
  );
};
export default Events;
