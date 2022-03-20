import { IPerson } from "../../../utils/Interfaces";

const ADRCPeople: {
  [teamName: string]: {
    people: Array<IPerson>;
    [subTeam: string]: Array<IPerson> | undefined;
  };
} = {
  Advisors: {
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
  Directors: {
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
  Pathologists: {
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
  Scientists: {
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
  Administration: {
    people: [],
  },
  "Business Collaborators": {
    people: [],
  },
};

export { ADRCPeople };
