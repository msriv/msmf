import { IPerson } from "../../../utils/Interfaces";

const ADRCPeople: {
  [teamName: string]: {
    people: Array<IPerson>;
    [subTeam: string]: Array<IPerson> | undefined;
  };
} = {
  Management: {
    people: [
      {
        name: "Dr. Paul Salins",
        image: "https://cdn.ms-mf.org/images/People/dr paul photo 3.jpg",
        position: "Managing Director",
      },
      {
        name: "Dr. Sharat Damodar",
        image: "https://cdn.ms-mf.org/images/People/Dr. Sharat Damodar.jpg",
        position: "Advisor, MSMF, Clinical Director, Mazumdar Shaw Medical Centre, NH",
      },
      {
        name: "Dr. Murali Mohan B V",
        image:
          "https://cdn.ms-mf.org/images/People/Dr.Murali Mohan B V_0_1.jpg",
        position: "Advisor, MSMF. Consultant, Pulmonology, Mazumdar Shaw Medical Centre, NH ",
      },
    ],
  },
  Advisors: {
    people: [
      {
        name: "Dr. Rekha P R",
        image: "https://cdn.ms-mf.org/images/People/Dr.Rekha P R.jpg",
        position: "Lab Director, NH",
      },

      {
        name: "Dr. Samarth Shetty",
        image: "https://cdn.ms-mf.org/images/People/Dr Samarth Shetty.JPG",
        position: "Consultant, NH",
      },
      {
        name: "Dr. Komal Prasad",
        image: "https://cdn.ms-mf.org/images/People/Dr. Komal Prasad.JPG",
        position: "Consultant, NH",
      },
      {
        name: "Dr. Rammohan Bhat",
        image:
          "https://cdn.ms-mf.org/images/People/Dr.Ram Mohan Sripad Bhat.jpg",
      },
    ],
  },
  // Directors have been removed and added to other sections
  // Directors: {
  //   people: [

  //   ],
  // },
  Pathologists: {
    people: [
      {
        name: "Dr. Pradeep",
        image:
          "https://cdn.ms-mf.org/images/People/Dr. Pradeep Narayan_Kolkata_.jpg",
        position: "Pathologist",
      },
      {
        name: "Dr. Akhila",
        position: "Pathologist",
      },
    ],
  },
  Scientists: {
    people: [
      {
        name: "Manjunath",
        position: "Scientist",
      },
      {
        name: "Shashi",
        position: "Intern",
      },
      {
        name: "Aishwarya",
        position: "Scientist",
      },
      {
        name: "Kunal Basu",
        position: "Scientist",
      },
      {
        name: "Kiruthiga",
        position: "Scientist",
      },
      {
        name: "Shakshi",
        position: "Quality In Charge",
      },
      {
        name: "Dr. Sujan K Dhar",
        position: "Business Liaison",
      },
    ],
  },
  Administration: {
    people: [
      {
        name: "Dr. Amritha Suresh",
        image: "https://cdn.ms-mf.org/images/People/Amitha-Suresh-1.jpg",
        position: "Operational Head, MSMF",
      },
      {
        name: "Ms. Archana Ann",
        image: "https://cdn.ms-mf.org/images/People/archana ann j.jpeg",
        position: "Lab Manager",
      },
      {
        name: "Ms. Preethu",
        image: "https://cdn.ms-mf.org/images/People/Preethu B U - Admin.JPG",
        position: "Finance Head",
      },
      {
        name: "Dr. Manjula Das",
        image: "https://cdn.ms-mf.org/images/People/Dr.Manjula-Das.jpg",
        position: "Lab Director and Quality Manager",
      },
    ],
  },
  "Service Partners": {
    people: [
      {
        name: "NH",
        position: "Service Partner",
      },
      {
        name: "MSCH",
        position: "Service Partner",
      },
      {
        name: "PCMH",
        position: "Service Partner",
      },
    ],
  },
};

export { ADRCPeople };
