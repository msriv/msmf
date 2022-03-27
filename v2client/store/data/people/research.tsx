import { IPerson } from "../../../utils/Interfaces";

const ResearchPeople: {
  [teamName: string]: {
    people?: Array<IPerson>;
    [subTeam: string]: Array<IPerson> | undefined;
  };
} = {
  "Current Team": {
    "Molecular Immunology": [
      {
        name: "Nehanjali Dwivedi",
        image: "https://cdn.ms-mf.org/images/People/Nehanjali Dwivedi.jpg",
        position: "SRF",
        linkedInProfile: "www.linkedin.com/in/nehanjali-dwivedi-83bb18132",
      },
      {
        name: "Kunal Biswas",
        image: "https://cdn.ms-mf.org/images/People/Kunal biswas.jpg",
        position: "JRF",
        linkedInProfile: "https://www.linkedin.com/in/kunal-biswas-865726153/",
      },
      {
        name: "Pushkarni Suresh",
        image: "https://cdn.ms-mf.org/images/People/Pushkarni Suresh.jpg",
        position: "JRF",
        linkedInProfile: "https://linkedin.com/in/pushkarni-suresh",
      },
      {
        name: "Dr Sujan Dhar",
        position: "Research Scientist",
      },
      {
        name: "Gouri Raj",
        image: "https://cdn.ms-mf.org/images/People/Gouri raj.jpg",
        position: "JRF",
        linkedInProfile: "https://www.linkedin.com/in/gouri-raj-26304a1b4",
      },
      {
        name: "Nidhi Shukla",
        image: "https://cdn.ms-mf.org/images/People/Nidhi Shukla.jpg",
        position: "JRF",
        linkedInProfile: "https://www.linkedin.com/in/nidhi-shukla-5april96",
      },
    ],
    "Integrated Head and Neck Oncology": [
      {
        name: "Dr. Pramila Mendonca",
        image: "https://cdn.ms-mf.org/images/People/Pramila M.jpg",
        position: "Consultant",
        linkedInProfile:
          "https://www.linkedin.com/in/pramila-mendonca-649b02bb",
      },
      {
        name: "Dr. Safeena Kulsum",
        image: "https://cdn.ms-mf.org/images/People/safeena_.jpg",
        position: "Post-Doctoral Fellow",
        linkedInProfile:
          "https://www.linkedin.com/in/dr-safeena-kulsum-88693319",
      },
      {
        name: "Dr. Sumsum Sunny",
        image: "https://cdn.ms-mf.org/images/People/Dr-Sumsum-Sunny.jpg",
        position: "Consultant/PhD Student",
        linkedInProfile: "https://www.linkedin.com/in/sumsum-p-sunny-8928511b",
      },
      {
        name: "Dr. Sruthi Nambiar",
        image: "https://cdn.ms-mf.org/images/People/Sruthi Nambiar.jpg",
        position: "Program Manager",
        linkedInProfile: "https://www.linkedin.com/in/sruthi-nambiar-b439659a",
      },
      {
        name: "Dr. Uma Mohan",
        image: "https://cdn.ms-mf.org/images/People/Uma Mohan.jpg",
        position: "Consultant",
        linkedInProfile: "https://www.linkedin.com/in/dr-uma-mohan-9a162116b",
      },
      {
        name: "Mr. Ram B Reddy",
        image: "https://cdn.ms-mf.org/images/People/Rambhupal-Reddy.jpg",
        position: "Senior Research Fellow/PhD Student",
        linkedInProfile: "https://www.linkedin.com/in/ram-bhupal-reddy-m-v",
      },
      {
        name: "Ms. Gangotri S",
        image: "https://cdn.ms-mf.org/images/People/Gangotri-Siddappa.jpg",
        position: "Senior Research Fellow/PhD Student",
        linkedInProfile: "https://www.linkedin.com/in/gangotri-siddappa",
      },
      {
        name: "Ms. Bonney L James",
        image: "https://cdn.ms-mf.org/images/People/Bonney-James.jpg",
        position: "Senior Research Fellow/PhD Student",
        linkedInProfile:
          "https://www.linkedin.com/in/bonney-lee-james-173a1a212",
      },
      {
        name: "Ms. Madhumathi",
        image: "https://cdn.ms-mf.org/images/People/Madhumathi.jpg",
        position: "Senior Research Fellow",
        linkedInProfile: "https://www.linkedin.com/in/madhumathi-hk",
      },
      {
        name: "Ms. Aswini T M",
        image: "https://cdn.ms-mf.org/images/People/Aswini T.jpg",
        position: "Trial Coordinator",
        linkedInProfile: "https://www.linkedin.com/in/aswini-murali-3695b31b4",
      },
      {
        name: "Ms. Sowmya C",
        image: "https://cdn.ms-mf.org/images/People/Sowmya C.jpg",
        position: "Research Technician",
        linkedInProfile: "https://www.linkedin.com/in/sowmya-c-008411213",
      },
      {
        name: "Ms. Sai Lakshmi",
        position: "Research Technician",
        linkedInProfile: "https://www.linkedin.com/in/sai-lakshmi-08a410213",
      },
      {
        name: "Ms. Uma M",
        position: "Lab Technician",
        linkedInProfile: "https://www.linkedin.com/in/uma-a-0a2836163",
      },
      {
        name: "Mr. Srinivas",
        image: "https://cdn.ms-mf.org/images/People/Srinivas.jpg",
        position: "Lab Technician",
      },
      {
        name: "Ms. Aditi Hariharan",
        image: "https://cdn.ms-mf.org/images/People/Aditi Hariharan.JPG",
        position: "Research Assistant",
        linkedInProfile:
          "https://www.linkedin.com/in/aditi-hariharan-587a581b0",
      },
      {
        name: "Mr. Vaishnav Vasudevan",
        image:
          "https://cdn.ms-mf.org/images/People/VaishnavIMG_8340-300x200.jpg",
        position: "Senior Research Fellow",
        linkedInProfile: "https://www.linkedin.com/in/vaishnav-vasudevan",
      },
    ],
    "Neuro Oncology": [
      {
        name: "Dr. Atanu Ghorai",
        image: "https://cdn.ms-mf.org/images/People/Atanu1.jpg",
        position: "Research Scientist",
      },
      {
        name: "Dr. Sujan Dhar",
        image: "https://cdn.ms-mf.org/images/People/Sujan K Dhar.jpg",
        position: "Research Scientist",
        linkedInProfile: "https://www.linkedin.com/in/sujan-dhar-5783235",
      },
      {
        name: "Pavan Hallur",
        image: "https://cdn.ms-mf.org/images/People/Pavan-Hallur.jpg",
        position: "Senior Research Fellow",
        linkedInProfile: "https://www.linkedin.com/in/pavan-hallur-4a137052",
      },
      {
        name: "Gouri Raj",
        image: "https://cdn.ms-mf.org/images/People/Gouri-233x300.jpg",
        position: "Junior Research Fellow",
        linkedInProfile: "https://www.linkedin.com/in/gouri-raj-26304a1b4",
      },
      {
        name: "Raksha Ganesh",
        image: "https://cdn.ms-mf.org/images/People/Raksha-Ganesh.jpg",
        position: "Senior Research Fellow",
        linkedInProfile: "https://www.linkedin.com/in/raksha-ganesh-27643415",
      },
    ],
    "Product Research": [
      {
        name: "Kunal Biswas",
        image: "https://cdn.ms-mf.org/images/People/Kunal biswas.jpg",
        position: "JRF",
        linkedInProfile: "https://www.linkedin.com/in/kunal-biswas-865726153/",
      },
      {
        name: "Dr. Pramila Mendonca",
        image: "https://cdn.ms-mf.org/images/People/Pramila M.jpg",
        position: "Consultant",
        linkedInProfile:
          "https://www.linkedin.com/in/pramila-mendonca-649b02bb",
      },
      {
        name: "Dr. Sumsum Sunny",
        image: "https://cdn.ms-mf.org/images/People/Dr-Sumsum-Sunny.jpg",
        position: "Consultant/PhD Student",
        linkedInProfile: "https://www.linkedin.com/in/sumsum-p-sunny-8928511b",
      },
      {
        name: "Ms. Sai Lakshmi",
        position: "Research Technician",
        linkedInProfile: "https://www.linkedin.com/in/sai-lakshmi-08a410213",
      },
      {
        name: "Ms. Pavithra",
        position: "Intern",
      },
      {
        name: "Dr. Sujan Dhar",
        image: "https://cdn.ms-mf.org/images/People/Sujan K Dhar.jpg",
        position: "Research Scientist",
      },
      {
        name: "Gouri",
        image: "https://cdn.ms-mf.org/images/People/Gouri-233x300.jpg",
        position: "JRF",
      },
      {
        name: "Kiruthiga",
        image: "https://cdn.ms-mf.org/images/People/Manjula Das Ph.D-PI-1.JPG",
        position: "Trainee",
      },
    ],
  },
  Collaborators: {
    "Molecular Immunology": [
      {
        name: "Dr. Sorab Dalal",
      },
      {
        name: "Dr. Satheesh Raghavan",
      },
      {
        name: "Dr. Sharat Damodar",
        image: "https://cdn.ms-mf.org/images/People/Dr._Sharat_Damodar_0_0.jpg",
      },
      {
        name: "Dr. Rammohan Bhat",
        image:
          "https://cdn.ms-mf.org/images/People/Dr.Ram Mohan Sripad Bhat.jpg",
      },
      {
        name: "Dr. Shashi Gujar",
      },
      {
        name: "Dr. Sujan Dhar",
        image: "https://cdn.ms-mf.org/images/People/Sujan K Dhar.jpg",
      },
    ],
    "Integrated Head and Neck Oncology": [
      {
        name: "Dr. Vijay Pillai",
        image: "https://cdn.ms-mf.org/images/People/Dr. Vijay Pillai.jpg",
        position: "Consultant, Head, Department of Head and Neck Surgery, NH",
      },
      {
        name: "Dr. Vivek Shetty",
        image: "https://cdn.ms-mf.org/images/People/DR VIVEK SHETTY.jpg",
        position: "Senior Consultant, Department of Head and Neck Surgery, NH",
      },
      {
        name: "Dr. Vidya Bhushan",
        position: "Consultant, Department of Head and Neck Surgery, NH",
      },
      {
        name: "Dr. Subramanian Kannan",
        image: "https://cdn.ms-mf.org/images/People/Dr. Subramanian Kannan.jpg",
        position: "Consultant , Head, Department of Endocrinology, NH",
      },
      {
        name: "Dr. Rekha R",
        image: "https://cdn.ms-mf.org/images/People/Dr.Rekha P R.jpg",
        position: "Head, Department of Pathology, NH",
      },
      {
        name: "Dr. Shaestha Naeem",
        position: "Consultant, Department of Pathology, NH",
      },
      {
        name: "Dr. Vidya",
        position: "Consultant, Department of Pathology, NH",
      },
      {
        name: "Dr. Hardik Pandya",
        position:
          "Assistant Professor in the Department of Electronic Systems Engineering, Division of EECS, IISc Bangalore",
      },
      {
        name: "Dr. Rajeev Kumar",
        position: "Cachar Cancer Hospital and Research Centre, Silchar, Assam",
      },
      {
        name: "Dr. Ravi Kannan",
        position:
          "Director, Cachar Cancer Hospital and Research Centre, Silchar, Assam",
      },
      {
        name: "Dr. Coral Miriam Magdalene",
        position: "Principal Scientist, Medgenome Labs Ltd",
      },
      {
        name: "Dr. Praveen Birur",
        position: "KLE Institute of Dental Sciences, Bangalore",
      },
      {
        name: "Dr. Balaji Ramachandran",
        position: "Syngene India Pvt Ltd",
      },
      {
        name: "Dr. Wesley Hicks",
        position:
          "Chairman, Department of Head & Neck/Plastic & Reconstructive Surgery, Roswell Park Comprehensive Cancer Centre",
      },
      {
        name: "Dr. Ronguangg Liang",
        position:
          "Professor, College of Optical Sciences, The University of Arizona",
      },
      {
        name: "Dr. Petra Wilder Smith",
        position:
          "Director of Dentistry, Beckman Laser Institute & Medical Clinic Professor, School of Medicine, UCI",
      },
      {
        name: "Dr. Christian Riley",
        position: "CSO, Co-Founder, Summit Biomedical Imaging, NY",
      },
      {
        name: "Dr. Thomas Reiner",
        position:
          "Associate Member and Laboratory Head, Memorial Sloan Kettering Cancer Center, NY",
      },
    ],
    "Product Research": [
      {
        name: "Dr. Ronguangg Liang",
        position:
          "Professor, College of Optical Sciences, The University of Arizona",
      },
      {
        name: "Dr. Praveen Birur",
        position: "KLE Institute of Dental Sciences, Bangalore",
      },
      {
        name: "Dr. Hardik Pandya",
        position:
          "Assistant Professor in the Department of Electronic Systems Engineering, Division of EECS, IISc Bangalore",
      },
      {
        name: "Dr. Christian Riley",
        position: "CSO, Co-Founder, Summit Biomedical Imaging, NY",
      },
      {
        name: "Dr. Prabhakar Kulkarni",
        position: "CEO, Neo-Dx, Hosur Road, Nabgalore, India",
      },
      {
        name: "Dr. Komal Prasad",
        image: "https://cdn.ms-mf.org/images/People/DR KOMAL PARASAD.jpg",
        position:
          "Consultant, Neuro Oncology, NH, Narayana Health City, Bommasandra, Bangalore-100",
      },
      {
        name: "Dr. Akhila",
        position:
          "Consultant, Pathology, NH, Narayana Health City, Bommasandra, Bangalore-99",
      },
    ],
  },
  Alumni: {
    "Molecular Immunology": [
      {
        name: "Divya CA",
        position: "SRF",
        image: "https://cdn.ms-mf.org/images/People/divya-300x200.jpg",
      },
      {
        name: "Vishnupriyan",
        position: "JRF",
      },
      {
        name: "Christopher Bathula",
        image: "https://cdn.ms-mf.org/images/People/christopher-234x300.jpg",
        position: "JRF",
      },
      {
        name: "Sreejeta Mandel",
        image: "https://cdn.ms-mf.org/images/People/Sreejeta-300x200.jpg",
        position: "JRF",
      },
      {
        name: "Sowmya",
        position: "JRF",
        image: "https://cdn.ms-mf.org/images/People/Sowmya C.jpg",
      },
      {
        name: "Smitha P K",
        position: "SRF",
        image: "https://cdn.ms-mf.org/images/People/Smitha PK.jpg",
      },
      {
        name: "Neha Damodar",
        position: "Trainee",
      },
      {
        name: "Lubna Syeda",
        image: "https://cdn.ms-mf.org/images/People/Lubna.jpg",
      },
      {
        name: "Kartik Sachdeva",
        position: "JRF",
      },
    ],
    "Integrated Head and Neck Oncology": [
      {
        name: "Dr. Sindhu V G",
        position:
          "Senior Scientist, Farcast Biosciences India, Bangalore, India",
        linkedInProfile: "https://www.linkedin.com/in/sindhu-govindan-918159aa",
      },
      {
        name: "Dr. Priya S",
        image: "https://cdn.ms-mf.org/images/People/Priya Sivadas -5.JPG",
        linkedInProfile: "https://www.linkedin.com/in/priya-sivadas-5884473b",
      },
      {
        name: "Dr. Simple Mohanta",
        image: "https://cdn.ms-mf.org/images/People/simple.jpg",
        linkedInProfile: "https://www.linkedin.com/in/simple-mohanta-450aa0167",
      },
      {
        name: "Ms. Priyanka Palit",
        position:
          "Science facilitator, Primary and Middle School, Mainadevi Bajaj International School, Mumbai, India",
        linkedInProfile: "https://www.linkedin.com/in/priyanka-palit-27768b103",
      },
      {
        name: "Dr. Roshan D'Cruz",
        position:
          "Resident Doctor, Vanderbilt University Medical Center, Tennessee, USA",
        linkedInProfile: "https://www.linkedin.com/in/roshan-d-cruz-10a730b9",
      },
      {
        name: "Mr. Sudheendra H V",
        image: "https://cdn.ms-mf.org/images/People/HV-Sudheendra.jpg",
        position:
          "Senior Associate Scientist, Syngene International Limited, Bangalore, India",
        linkedInProfile: "https://www.linkedin.com/in/hvsudheendra",
      },
      {
        name: "Mr. Ravindra D R",
        image: "https://cdn.ms-mf.org/images/People/Ravindra DR -5.JPG",
        position: "Lab Assistant, Biocon Research Limited, Bangalore, India",
        linkedInProfile: "https://www.linkedin.com/in/ravindra-dr-56599765",
      },
      {
        name: "Dr. Subin T Surendran",
        position:
          "Research Technologist, Department of Head and Neck Surgery, Roswell Park Comprehensive Cancer Center, Buffalo, New York, USA",
      },
      {
        name: "Ms. Amrutha Sherly Mohan",
        position:
          "Research Technologist, Department of Cancer Prevention and Control, Roswell Park Comprehensive Cancer Center, Buffalo, New York, USA",
      },
      {
        name: "Dr. Sujatha Darsi",
        position:
          "Junior Research Fellow, Department of Biochemistry, Dayanand Sagar University, Bangalore, India",
        linkedInProfile: "https://www.linkedin.com/in/sujatha-darsi-3894ab117",
      },
      {
        name: "Dr. Harshavardhan N R",
        image: "https://cdn.ms-mf.org/images/People/Ravindra DR -5.JPG",
        position:
          "Senior Scientist, NeoDx Biotech Labs Private Limited, Bangalore, India",
        linkedInProfile:
          "https://www.linkedin.com/in/reddy-harsha-vardhan-nalla-6315a092",
      },
      {
        name: "Dr. Rohit Mathew",
        position: "Associate Director, Carlisle & Company, Inc., New York, USA",
        linkedInProfile: "https://www.linkedin.com/in/rohitmathew20",
      },
      {
        name: "Dr. Anjana Muralidharan",
        linkedInProfile:
          "https://www.linkedin.com/in/anjana-muralidharan-4788b6191",
      },
      {
        name: "Mr. Javaregowda G N (Manu Gowda)",
        position:
          "Quality Control Microbiologist, Anthem Biosciences Private Limited, Bangalore, India",
        linkedInProfile:
          "https://www.linkedin.com/in/javaregowda-g-n-manu-gowda-2694b884",
      },
      {
        name: "Mr. Sumanth Kumar Reddy Gopi Reddy",
        position: "Junior Data Analyst, Cognizant, Bangalore, India",
        linkedInProfile:
          "https://www.linkedin.com/in/sumanth-kumar-reddy-gopireddy-4a6424105",
      },
      {
        name: "Mr. Mohammed Awase Qarni Baig",
        position:
          "Student, Department of Microbiology and Immunology, United Arab Emirates University, UAE",
        linkedInProfile:
          "https://www.linkedin.com/in/md-awase-qarni-baig-87ab6112b",
      },
      {
        name: "Dr. Aditi Hariharan",
        linkedInProfile:
          "https://www.linkedin.com/in/aditi-hariharan-587a581b0",
        image: "https://cdn.ms-mf.org/images/People/Aditi Hariharan.JPG",
      },
    ],
  },
};

export { ResearchPeople };
