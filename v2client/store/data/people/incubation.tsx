import { IPerson } from "../../../utils/Interfaces";

const IncubationPeople: {
  [teamName: string]: {
    people: Array<IPerson>;
    [subTeam: string]: Array<IPerson> | undefined;
  };
} = {
  "Governing Council": {
    people: [
      {
        name: "Dr. Devi Prasad Shetty",
        image: "https://cdn.ms-mf.org/images/People/Dr. Devi Shetty.jpeg",
        position: "Chairman - Narayana Health",
      },
      {
        name: "Dr. Kiran Mazumdar Shaw",
        image: "https://cdn.ms-mf.org/images/People/Dr. KMS.jpeg",
        position:
          "Chairman & Managing Director Of Biocon Limited, Chairperson - MSMF",
      },
      {
        name: "Dr. Paul C Salins",
        image: "https://cdn.ms-mf.org/images/People/dr paul photo 3.jpg",
        position:
          "Managing Director-MSMF, Medical Director-Mazumdar Shaw Medical Center, Sr Vice President-Narayana Hrudayalaya, Chairman-MSMF TBI",
      },
    ],
  },
  "Investment Committee": {
    people: [
      {
        name: "Murali Krishnan",
        position: "President, Finance – Biocon",
        image: "https://cdn.ms-mf.org/images/People/MurliKrishnan_KMT.jpg",
      },
      {
        name: "Naganand Doraswamy",
        position: "Managing Director - Ideaspring Capital",
        image: "https://cdn.ms-mf.org/images/People/Naganand Doraswamy.jpg",
      },
      {
        name: "Paul Basil",
        position: "Co-Founder & Partner - Menterra",
        image: "https://cdn.ms-mf.org/images/People/Paul Basil.jpg",
      },
      {
        name: "Dr. Paul C Salins",
        image: "https://cdn.ms-mf.org/images/People/dr paul photo 3.jpg",
        position:
          "Managing Director-MSMF, Medical Director-Mazumdar Shaw Medical Center, Sr Vice President-Narayana Hrudayalaya, Chairman-MSMF TBI",
      },
      {
        name: "Prashant Chopra",
        position: "Advisor - UCSF Innovation Ventures",
        image: "https://cdn.ms-mf.org/images/People/Prashant Chopra.jpg",
      },
    ],
  },
  "Scientific Committee": {
    people: [
      {
        name: "Dr. Amritha Suresh",
        image:
          "https://cdn.ms-mf.org/images/People/Dr Amitha Suresh Ph.D- PI-5.JPG",
      },
      {
        name: "Dr. B.V. Murali Mohan",
        image:
          "https://cdn.ms-mf.org/images/People/Dr.Murali Mohan B V_0_1.jpg",
      },
      {
        name: "Dr. Manjula Das",
        image: "https://cdn.ms-mf.org/images/People/Manjula Das Ph.D-PI-1.JPG",
      },
      {
        name: "Dr. Paul C Salins",
        image: "https://cdn.ms-mf.org/images/People/dr paul photo 3.jpg",
        position:
          "Managing Director-MSMF, Medical Director-Mazumdar Shaw Medical Center, Sr Vice President-Narayana Hrudayalaya, Chairman-MSMF TBI",
      },
      {
        name: "Dr. Pradeep Narayan",
        position:
          "FRCS (Edin), FRCS (Glasgow), FRCS (Cardio-Thoracic Surgery), MD (University of Bristol)",
        image:
          "https://cdn.ms-mf.org/images/People/Dr. Pradeep Narayan_Kolkata_.jpg",
      },
    ],
  },
  "Management Team": {
    people: [
      {
        name: "Dr. Paul C Salins",
        image: "https://cdn.ms-mf.org/images/People/dr paul photo 3.jpg",
        position:
          "Managing Director-MSMF, Medical Director-Mazumdar Shaw Medical Center, Sr Vice President-Narayana Hrudayalaya, Chairman-MSMF TBI",
      },
      {
        name: "Salai Jeyaseelan",
        position: "Chief Engineer",
        linkedInProfile:
          "https://in.linkedin.com/in/salai-jeyaseelan-annamalai-4306b767",
        image: "https://cdn.ms-mf.org/images/People/Jeyseelan.jpg",
      },
      {
        name: "Dr. Samarth Shetty",
        image: "https://cdn.ms-mf.org/images/People/Dr Samarth Shetty.JPG",
        position: "Bionest In-Charge",
        linkedInProfile: "https://in.linkedin.com/in/samarth-shetty-11074933",
      },
      {
        name: "Dr. Sherin James",
        image: "https://cdn.ms-mf.org/images/People/DR SHERIN JAMES.jpg",
        position: "Senior Program Manager",
        linkedInProfile: "https://in.linkedin.com/in/dr-sherin-james-8b70a9125",
      },
    ],
  },
};

const IncubationMentors: {
  [teamName: string]: {
    people: Array<IPerson>;
    [subTeam: string]: Array<IPerson> | undefined;
  };
} = {
  "Clinical Mentors": {
    people: [
      {
        name: "Dr. Arjun Alva",
        image: "https://cdn.ms-mf.org/images/People/Dr. Arjun Alva ._0_0_0.jpg",
        position: "Critical Care Medicine",
        linkedInProfile:
          "https://www.linkedin.com/in/arjun-alva-27741018/?originalSubdomain=uk",
      },
      {
        name: "Dr. Ashley Lucien Joseph D'Cruz",
        image:
          "https://cdn.ms-mf.org/images/People/Dr.Ashley Lucien Joseph  Dcruz.jpg",
        position: "Pediatric Surgery",
      },
      {
        name: "Dr. Ashwinikumar Kudari",
        image: "https://cdn.ms-mf.org/images/People/Dr.Ashwinikumar Kudari.jpg",
        position: "Surgical Gastroenterology",
        linkedInProfile:
          "https://in.linkedin.com/in/ashwinikumar-kudari-73322a12",
      },
      {
        name: "Dr. Delia Fernandez",
        image: "https://cdn.ms-mf.org/images/People/Dr Delia.JPG",
        position: "Prosthodontics",
        linkedInProfile:
          "https://www.linkedin.com/in/delia-fernandes-33b109115",
      },
      {
        name: "Dr. Diwakar",
        image: "https://cdn.ms-mf.org/images/People/Dr Diwakar Goutham  N.jpg",
        position: "Psychiatry & Clinical Psychology",
      },
      {
        name: "Dr. Harish",
        image:
          "https://cdn.ms-mf.org/images/People/Dr Harish Mallapura Maheshwarappa.jpeg",
        position: "Critical Care",
      },
      {
        name: "Dr. Harish BR",
        image: "https://cdn.ms-mf.org/images/People/Dr.Harish B R.jpg",
        position: "Anaesthesia",
      },
      {
        name: "Dr. Kiran M",
        image: "https://cdn.ms-mf.org/images/People/Dr. Kiran M.jpg",
        position: "Neuro Surgery",
      },
      {
        name: "Dr. Kiranmayi Setty",
        image: "https://cdn.ms-mf.org/images/People/Dr.Kiramayi S.jpg",
        position: "Obstetrics & Gynecology",
        linkedInProfile: "https://in.linkedin.com/in/kiranmayi-setty-2a3369208",
      },
      {
        name: "Dr. Komal Prasad",
        image: "https://cdn.ms-mf.org/images/People/DR KOMAL PARASAD.jpg",
        position: "Neurosurgery",
        linkedInProfile: "https://in.linkedin.com/in/drkomalprasad",
      },
      {
        name: "Dr Lavanya Kiran",
        image: "https://cdn.ms-mf.org/images/People/Dr.Lavanya  Kiran.jpg",
        position: "Reproductive medicine and Robotic Surgery",
        linkedInProfile:
          "https://www.linkedin.com/in/dr-lavanya-kiran-95343ab1",
      },
      {
        name: "Dr. Murali Mohan BV",
        image:
          "https://cdn.ms-mf.org/images/People/Dr.Murali Mohan B V_0_1.jpg",
        position: "Pulmonologist",
        linkedInProfile:
          "https://www.linkedin.com/in/murali-mohan-153b654/?originalSubdomain=in",
      },
      {
        name: "Dr. Nidhi Tandon",
        image: "https://cdn.ms-mf.org/images/People/Dr. Nidhi Tandon.jpg",
        position: "Medical Oncology",
      },
      {
        name: "Dr. Paul C Salins",
        image: "https://cdn.ms-mf.org/images/People/dr paul photo 3.jpg",
        position: "Cranio-Maxillo Facial Surgery",
      },
      {
        name: "Dr. Radhika Manohar",
        image: "https://cdn.ms-mf.org/images/People/Dr Radhika Manohar.jpg",
        position: "Neurophysiologist",
        linkedInProfile: "https://uk.linkedin.com/in/radhika-manohar-9a039b6b",
      },
      {
        name: "Dr. Ravi Chandra MRK",
        image:
          "https://cdn.ms-mf.org/images/People/Dr.Ravi Chandra M R K__0_0.jpg",
        position: "Internal Medicine, Pulmonology",
      },
      {
        name: "Dr. Rammohan Bhat",
        image:
          "https://cdn.ms-mf.org/images/People/Dr.Ram Mohan Sripad Bhat.jpg",
        position: "Nephrology",
      },
      {
        name: "Dr. Rekha PR",
        image: "https://cdn.ms-mf.org/images/People/Dr.Rekha P R.jpg",
        position: "Clinical Pathology",
      },
      {
        name: "Dr. Robbie George",
        image: "https://cdn.ms-mf.org/images/People/Dr.Robbie George.jpg",
        position: "Vascular Surgery",
      },
      {
        name: "Dr. Rohit Ranade",
        image: "https://cdn.ms-mf.org/images/People/DR ROHIT RANADE.jpg",
        position: "Gyneco Oncology and Robotic surgery",
        linkedInProfile: "https://www.linkedin.com/in/rohit-ranade-5958bba8",
      },
      {
        name: "Dr. Samarth Shetty",
        image: "https://cdn.ms-mf.org/images/People/Dr Samarth Shetty.JPG",
        position: "Cranio-Maxillo Facial Surgery",
        linkedInProfile: "https://www.linkedin.com/in/samarth-shetty-11074933",
      },
      {
        name: "Dr. Sanjay Rao",
        image: "https://cdn.ms-mf.org/images/People/Dr.Sanjay Rao.jpg",
        position: "Pediatric Surgery",
      },
      {
        name: "Dr. Saurabh Bhargava",
        image: "https://cdn.ms-mf.org/images/People/Dr.Saurabh  Bhargava.jpg",
        position: "Urology",
        linkedInProfile: "https://in.linkedin.com/in/saurabh-bhargava-74765618",
      },
      {
        name: "Dr. Shibu V Pillai",
        image:
          "https://cdn.ms-mf.org/images/People/Dr. Shibu Vasudevan Pillai.jpg",
        position: "Neurosurgery",
      },
      {
        name: "Dr. Sharath Damodhar",
        image: "https://cdn.ms-mf.org/images/People/Dr. Sharat Damodar.jpg",
        position: "Hematology and Transplant Services",
        linkedInProfile: "https://in.linkedin.com/in/sharat-damodar-a9a51413",
      },
      {
        name: "Dr. Subramanian Kannan",
        image: "https://cdn.ms-mf.org/images/People/Dr. Subramanian Kannan.jpg",
        position: "Endocrinology",
      },
      {
        name: "Dr. Sunil Bhat",
        image: "https://cdn.ms-mf.org/images/People/Dr. Sunil Bhat.jpg",
        position: "Pediatric Hematology",
        linkedInProfile: "https://in.linkedin.com/in/dr-sunil-bhat-074640107",
      },
      {
        name: "Dr. Thimappa Hegde",
        image: "https://cdn.ms-mf.org/images/People/Dr. Thimappa Hegde_0_0.jpg",
        position: "Neurosurgery",
      },
      {
        name: "Dr. Vijay Pillai",
        image: "https://cdn.ms-mf.org/images/People/Dr. Nidhi Tandon.jpg",
        position: "Head and Neck Surgical Oncology",
        linkedInProfile:
          "https://www.linkedin.com/in/vijay-pillai-8360502a/?originalSubdomain=in",
      },
      {
        name: "Dr. Vikram Huded",
        image: "https://cdn.ms-mf.org/images/People/Dr. Vikram Huded.jpg",
        position: "Interventional Neurologist",
      },
      {
        name: "Dr. Vimal Raj",
        image: "https://cdn.ms-mf.org/images/People/Dr.Vimal Raj J.jpg",
        position: "Cardiothoracic Imaging",
        linkedInProfile: "https://www.linkedin.com/in/dr-vimal-raj-ab64877b/",
      },
      {
        name: "Dr. Vivek Shetty",
        image: "https://cdn.ms-mf.org/images/People/DR VIVEK SHETTY.jpg",
        position: "Head & Neck Surgery - Oncology",
      },
    ],
  },
  "Basic Sciences": {
    people: [
      {
        name: "Dr. Amritha Suresh",
        linkedInProfile: "https://in.linkedin.com/in/amritha-suresh-14987618",
        image:
          "https://cdn.ms-mf.org/images/People/Dr Amitha Suresh Ph.D- PI-5.JPG",
        position: "Integrated head and neck oncology research program",
      },
      {
        name: "Dr. Manjula Das",
        linkedInProfile: "https://in.linkedin.com/in/manjula-das-a379629",
        image: "https://cdn.ms-mf.org/images/People/Manjula Das Ph.D-PI-1.JPG",
        position: "Tumor immunology",
      },
      {
        name: "Dr. Nameeta Shah",
        position: "Neuro-Oncology Program",
        linkedInProfile: "https://www.linkedin.com/in/nameeta-shah-b428712/",
        image: "https://cdn.ms-mf.org/images/People/Dr nameeta.jpg",
      },
      {
        name: "Dr. Ravi Sirdeshmukh",
        position: "Neuro-Oncology Program",
        image: "https://cdn.ms-mf.org/images/People/Ravi-Sirdeshmukh.png",
      },
      {
        name: "Dr. Chandrakala Pidathala",
        position: "Medicinal Chemistry",
        linkedInProfile:
          "https://uk.linkedin.com/in/chandrakala-pidathala-17a81b44",
        image:
          "https://cdn.ms-mf.org/images/People/Chandrakala Pidathala Ph.D-PI-Organic.JPG",
      },
    ],
  },
  Engineering: {
    people: [
      {
        name: "Mr. Annamalai Chokalingam",
        linkedInProfile:
          "https://www.linkedin.com/in/annamalai-chokkalingam-48b7a987/",
        position:
          "Industrial Veteran in Textile with 40years of experience in production",
      },
      {
        name: "Mr. Balamurugan",
        linkedInProfile: "https://www.linkedin.com/in/balamurugan-s-33198535/",
        position: "Medical Research Scientist at Fourth Frontier, Bangalore",
      },
      {
        name: "Dr. Dhanush Racheveti",
        linkedInProfile:
          "https://www.linkedin.com/in/rachaveti-dhanush-ph-d-54b41128/",
        position: "Assistant Professor, Saveetha Engineering College, Chennai",
      },
      {
        name: "Dr. Kannan",
        linkedInProfile: "https://www.linkedin.com/in/drbtk/",
        position: "Associate Professor, SRM University, Chennai",
      },
    ],
  },
};

export { IncubationPeople, IncubationMentors };
