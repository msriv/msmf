import { IPerson } from "../../../utils/Interfaces";

const PhilanthropyPeople: {
  [teamName: string]: Array<IPerson>;
} = {
  "Executive Management": [
    {
      name: "Dr. Paul C Salins",
      image: "https://cdn.ms-mf.org/images/People/dr paul photo 3.jpg",
      position:
        "Managing Director-MSMF, Medical Director-Mazumdar Shaw Medical Center, Sr Vice President-Narayana Hrudayalaya, Chairman-MSMF TBI",
    },
  ],
  Administrators: [
    {
      name: "Blessy Rosewin",
      position: "Executive, Philanthropy",
      image:
        "https://cdn.ms-mf.org/images/People/Blessy - Executive Philanthropist.jpg",
    },
    {
      name: "Archana Ann J",
      position: "Manager, MSCOP",
      image: "https://cdn.ms-mf.org/images/People/archana ann j.jpeg",
    },
  ],
};

export { PhilanthropyPeople };
