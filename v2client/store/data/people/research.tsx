import { IPerson } from "../../../utils/Interfaces";

const ResearchPeople: {
  [teamName: string]: {
    people: Array<IPerson>;
    [subTeam: string]: Array<IPerson> | undefined;
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

export { ResearchPeople };
