import { IPerson } from "../../../utils/Interfaces";

const MainTeam: {
  [teamName: string]: {
    people: Array<IPerson>;
    [subTeam: string]: Array<IPerson> | undefined;
  };
} = {
  "Board of Directors": {
    people: [
      {
        image: "https://cdn.ms-mf.org/images/People/Dr. KMS.jpeg",
        name: "Kiran Mazumdar Shaw",
        position: "Chairperson Mazumdar-Shaw Medical Foundation",
        about: `Ms. Kiran Mazumdar-Shaw is an Indian entrepreneur. She is the Chairman & Managing Director of Biocon Limited, a biotechnology company based in Bangalore, India and the current Chairperson of IIM-Bangalore. A successful technocrat of global standing, Ms. Shaw heads India’s leading Biotechnology enterprise, Biocon. She is highly respected in the corporate world and has been named among TIME magazine’s 100 most influential people in the world. Recently, Economic Times placed her at India Inc’s Top 10 most powerful women CEOs for the year 2012. Her pioneering efforts in biotechnology have drawn global recognition both for Indian Industry and Biocon. The U.S. based Chemical Heritage Foundation has conferred Ms. Shaw with the 2014 Othmer Gold Medal for her multifaceted contributions to chemical and scientific heritage.
Ms. Shaw is a part of the U.S. Pharmacopeial Convention (USP) Board of Trustees and is also a Member of the USP Biologics Advisory Group. She has served on the Board of Science Foundation, Ireland. Kiran is the founder member of Karnataka’s Vision Group on Biotechnology and currently chairs this forum. She also serves on the National Advisory Council of the Government’s Department of Biotechnology, where she has been instrumental in bringing government, industry and academia together, to charter a clear and progressive growth path for Biotechnology in India. Ms. Shaw serves as Member, Governing Body and General Body of the Indian Pharmacopoeia Commission, an Autonomous Body of the Government of India. Ms. Shaw is also on the honorary board of advisors of The National Society of High School Scholars (NSHSS), USA.

She is a part of the Prime Minister’s Council on Trade & Industry in India and the US-India CEO Forum. She is also a member of the Governing Council of National Foundation for Corporate Governance, Ministry of Corporate Affairs, Government of India and a member of the Union Commerce Ministry-instituted committee to advise the government on India’s export promotion strategy. Additionally, she is a member of the Eminent Persons Group of the Competition Commission of India, and a co-opted member on the new Board of governors of Indian Council for Research on International Economic Relations (ICRIER).

She is a founder member of the Society for the formation of “Institute for Stem Cell Biology and Regenerative Medicine”. Ms. Shaw has been nominated as Member of the Board of Trade, Directorate General of Foreign Trade, Ministry of Commerce & Industry. Moreover, she is serving on the Global Advisory Committee for its “Women and the Green Economy Campaign” (WAGE) ™ initiative that engages with women in business, government and NGO leaders to help create and develop a global green economy. Ms. Shaw is the recipient of several prestigious awards including the Nikkei Asia Prize, 2009 for Regional Growth, Express Pharmaceutical Leadership Summit Award 2009 for Dynamic Entrepreneur, the Economic Times ‘Businesswoman of the Year’, the ‘Veuve Clicquot Initiative For Economic Development For Asia, Ernst & Young’s Entrepreneur of the Year Award for Life Sciences & Healthcare, ‘Technology Pioneer’ recognition by World Economic Forum and The Indian Chamber of Commerce Lifetime Achievement Award. Ms. Shaw is also an Independent Member of the Board of Infosys, a global leader in consulting, technology and outsourcing solutions.

Her most cherished awards are the national awards, Padmashri (1989) and Padma Bhushan (2005) presented to her by the President of India, for her pioneering efforts in Industrial Biotechnology.

Ms. Shaw received a graduate honors degree in Zoology from Bangalore University (1973) and qualified as a Master Brewer from Ballarat University, Australia (1975). Ms. Shaw also received an honorary Doctorate of Science in 2004, from her alma mater, Ballarat University, in recognition of her pre-eminent contributions to the field of Biotechnology. She has also been awarded honorary doctorates from University of Abertay, Dundee, U.K. (2007), University of Glasgow, U.K. (2008) and Heriot-Watt University, Edinburgh, U.K. (2008). She recently received an honorary Doctorate of Science by the National University of Ireland (2012) for her contribution to economic life and was also conferred an honorary doctorate by Trinity College, Dublin (2012).

Under her stewardship, Biocon has evolved from its inception in 1978 as an industrial enzymes company to a fully integrated biopharmaceutical enterprise encompassing a well-balanced business portfolio of products and services with a research focus on Diabetes, Oncology and Auto-immune disease. Biocon also has a subsidiary, Syngene, which was established in 1994 to provide research services and contract manufacturing to the big pharma industry. Biocon has also built a remarkable Research Services business through Syngene and Clinigene, that offers integrated discovery and development solutions for both small and large molecules.

Ms. Shaw’s commitment to affordable healthcare extends beyond business. She is passionately focused on innovation led healthcare solutions for sustainable and affordable healthcare for the marginalized communities. Her philanthropic initiatives include an innovative micro-health insurance program based on delivering cashless healthcare through primary healthcare clinics in rural areas of Karnataka, an education initiative based on math education for school children in government schools as well making quality cancer care affordable to a larger patient population. She has established the 1,400-bed Mazumdar-Shaw Cancer Center (MSCC) in Bangalore in partnership with renowned heart surgeon Dr. Devi Shetty to deliver affordable world-class cancer care services to patients irrespective of socio-economic status and class.

She is also the Honorary Consul of Ireland in Bangalore.

She is married to John Shaw, a Scotsman and Indophile, who headed a leading textiles MNC, Madura Coats from 1991-1998 as Chairman and Managing Director. John Shaw is currently the Vice-Chairman of Biocon Limited.`,
      },
      {
        image: "https://cdn.ms-mf.org/images/People/Mr.John Shaw.jpg",
        name: "Mr. John Shaw",
        position: "Vice Chairman Biocon Limited",
        about: `Mr. Shaw is the Vice Chairman of Biocon Limited and has been with Biocon since 1999. John plays an important role in the Corporate Governance of the company. He also plays a key role in the financial and strategic development of the group. John is a member of the Biocon board and is a part of the company’s key management team. Mr. Shaw has worked for over 30 years with Coats Viyella PLC. He has served in financial and general management positions in Latin America, Africa, and Europe. He was the Chairman of Madura Coats Ltd. from 1991-98. He has completed his M.A. (Hons) in History and Political Economy, at Glasgow University in 1970. John is an avid art lover and in his spare time enjoys Golf, Football, Rugby and Cricket.`,
      },
      {
        
        image: "https://cdn.ms-mf.org/images/People/Dr. Devi Shetty.jpeg",
        name: "Dr. Devi Prasad Shetty",
        position: "Chairman and Founder Narayana Health",
        about: `Dr. Devi Prasad Shetty is an Indian philanthropist and a cardiac surgeon. He has leveraged economies of scale to provide affordable healthcare. He was awarded the Padma Bhushan, the third highest civilian award in India for his contribution to the field of affordable healthcare.

In 2001, Dr. Shetty founded Narayana Hrudayalaya (NH), a multi-specialty hospital in Bommasandra, on the outskirts of Bangalore. Apart from cardiac surgery, NH also has cardiology, neurosurgery, pediatric surgery, haematology & transplant services and nephrology among various others. The heart hospital is the largest in the world with 1,000 beds, performing over 30 major heart surgeries a day.

Dr. Shetty also founded the Rabindranath Tagore International Institute of Cardiac Sciences (RTIICS) in Kolkata. Dr. Shetty has also signed a MOU with the Karnataka Government during the Global Investor’s meet to build a INR 1,000 Cr. 5,000 bed super specialty hospital near the Bangalore International Airport. His company has signed and MOU with the Government of Gujarat, for setting up of a 5,000 bed hospital at Ahmedabad.

His company has built a low-cost, 150 bed hospital at Mysore, on land provided by the Government of Karnataka that uses cross-ventilation instead of air conditioning, to cut the investment cost. He was a part of the seven-member panel of the Board of Governors that replaced the MCI, and served for a period of one year before it was further reconstituted.

His hospitals have reduced costs by taking advantage of the economies of scale. This allows them to complete heart surgeries for a tenth of the cost in the United States. The Wall Street Journal has given him the title of Henry Ford of Heart Surgery.`,
      },
      {
        image: "https://cdn.ms-mf.org/images/People/Mr. Kunal Kashyap.jpg",
        name: "Mr. Kunal Kashyap",
        position:
          "Managing Director and Chairman Allegro Capital Advisors Pvt. Ltd.",
        about: `Mr. Kunal Kashyap serves as Managing Director and Chairman of Allegro Capital Advisors Pvt. Ltd. Mr. Kashyap is a Senior Advisor at Phase4 Partners Limited. Mr. Kashyap was a Co-Founder and Executive Director at Celstream Technologies Pvt. Ltd. From 1994 to 2000, Mr. Kashyap was a Global Partner of Arthur Andersen responsible for developing its practice in Southern India. He was responsible for managing and heading the treasury and business development for Asia Pacific at Digital Equipment Corporation.

Mr. Kashyap serves as a Non-Executive Director of Unifi Capital Pvt. Ltd. (Formerly, Unifi Wealth Management Ltd). Mr. Kashyap has been an Independent Non-Executive Director of Glaxo Smithkline Consumer Healthcare Ltd. since March 28, 2001. He served as a Director of MetLife (IND) and Scandent Solutions Corporation Ltd. He served as an Independent Director of Xchanging Solutions Limited (Formerly, Cambridge Solutions, Ltd) from May 23, 2005 to February 29, 2012. He served as an Independent Director of Dil Ltd., from January 30, 2002 to March 3, 2009. Mr. Kashyap is a Chartered Accountant by profession.`,
      },
      {
        image: "https://cdn.ms-mf.org/images/People/dr paul photo 3.jpg",
        name: "Dr. Paul C. Salins",
        position:
          "Managing Director / Vice President Narayana Hrudayalaya and Mazumdar Shaw Cancer Hospital",
        about: `Dr. Paul C. Salins is the Managing Director and Vice-President of the Mazumdar Shaw Cancer Center and Narayana Hrudayalaya Multispecialty Hospital. At 1,400 beds, this is one of the biggest cancer center projects in the world. He is an internationally acclaimed authority in the specialty of Cranio-Maxillofacial Surgery having trained and worked across the globe.

His surgical innovations and perspectives have been much acclaimed. Some of the key contributions made by Dr. Salins includes the technique of Naso-Orbito-Maxillary transposition to move parts of the facial skeleton to provide access to tumors hidden deep behind the face, soft and hard tissue composite corrections for management of severe bird face deformities, management of large vascular malformations of the face, the anatomical basis and orthomorphic techniques for 3-dimensional correction of facial asymmetries and also an emergency room angiographic technique for visualization of the major head and neck vessels.

He has also key contributions in facial aesthetic surgery and his surgical work has restored self-respect and dignity to numerous people with deformities and mutilations of the facial region. He is a Fellow by the American College of Oral Maxillofacial Surgeon’s. Currently, his research interests are in the area of engineering applications, particularly of modelling based decision making processes to surgical practice. Dr. Salins has helped nurture several major medical institutions of repute in India and abroad and was instrumental in bringing the examinations of the Royal College of Physicians and Surgeons to India. He is the recipient of many international awards and citations.

Dr. Salins studied art history at Cambridge University, has a significant interest in western classical music and is passionate about exploring the influence of culture in education as the vital substrate for creativity. Dr. Salins is convinced that, today India is ready to take decisive leadership and is indeed poised to provide solutions to global needs in healthcare.`,
      },
    ],
  },
  "Executive Management": {
    people: [
      {
        image: "https://cdn.ms-mf.org/images/People/Amitha-Suresh-1.jpg",
        name: "Dr. Amritha Suresh",
        position: "Head of Operations",
        about: `Dr. Amritha Suresh is a Principal Scientist of the Integrated Head
              and Neck Oncology Program, at Mazumdar Shaw Center for
              Translational Research (MSCTR), Narayana Health, Bangalore. She is
              also a faculty of the Roswell Park-Mazumdar Shaw Medical
              Foundation Collaborative Research program. Dr. Suresh completed
              her doctoral program from Center for Cellular and Molecular
              Biology (JNU) and served as a Research Associate at Head and Neck
              Institute, Amrita Institute of Medical Sciences and Research
              Center, Kochi during which period she was involved in setting up
              the research facility and the establishment of a Head and Neck
              tissue repository at the center.`,
      },
      {
        image: "https://cdn.ms-mf.org/images/People/dr paul photo 3.jpg",
        name: "Dr. Paul C. Salins",
        position:
          "Managing Director / Vice President Narayana Hrudayalaya and Mazumdar Shaw Cancer Hospital",
        about: `Dr. Paul C. Salins is the Managing Director and Vice-President of the Mazumdar Shaw Cancer Center and Narayana Hrudayalaya Multispecialty Hospital. At 1,400 beds, this is one of the biggest cancer center projects in the world. He is an internationally acclaimed authority in the specialty of Cranio-Maxillofacial Surgery having trained and worked across the globe.

His surgical innovations and perspectives have been much acclaimed. Some of the key contributions made by Dr. Salins includes the technique of Naso-Orbito-Maxillary transposition to move parts of the facial skeleton to provide access to tumors hidden deep behind the face, soft and hard tissue composite corrections for management of severe bird face deformities, management of large vascular malformations of the face, the anatomical basis and orthomorphic techniques for 3-dimensional correction of facial asymmetries and also an emergency room angiographic technique for visualization of the major head and neck vessels.

He has also key contributions in facial aesthetic surgery and his surgical work has restored self-respect and dignity to numerous people with deformities and mutilations of the facial region. He is a Fellow by the American College of Oral Maxillofacial Surgeon’s. Currently, his research interests are in the area of engineering applications, particularly of modelling based decision making processes to surgical practice. Dr. Salins has helped nurture several major medical institutions of repute in India and abroad and was instrumental in bringing the examinations of the Royal College of Physicians and Surgeons to India. He is the recipient of many international awards and citations.

Dr. Salins studied art history at Cambridge University, has a significant interest in western classical music and is passionate about exploring the influence of culture in education as the vital substrate for creativity. Dr. Salins is convinced that, today India is ready to take decisive leadership and is indeed poised to provide solutions to global needs in healthcare.`,
      },
    ],
  },
  "Administration": {
    people: [
      {
        image: "https://cdn.ms-mf.org/images/People/archana ann j.jpeg",
        name: "Archana Ann J",
        position: "Manager, MSCOP: Lab Administrator -MSCTR"
      },
      {
        image: "https://cdn.ms-mf.org/images/People/preethu bu.jpg",
        name: "Preethu B U",
        position: "Manager Finanace, MSMF"
      },
      {
        
        image: "https://cdn.ms-mf.org/images/People/Blessy - Executive Philanthropist.jpg",
        name: "Blessy Rosewin",
        position: "Executive – philanthropy, MSCOP"
      },
      {
        image: "https://cdn.ms-mf.org/images/People/Raghavendra - Executive IT.jpg",
        name: "Raghavendra Rao G",
        position: "Executive – IT"
      },
      {
        image: "https://cdn.ms-mf.org/images/People/abhilash j.jpg",
        name: "Abhilash J",
        position: "Executive – Facility Maintenance"
      }
    ]
  }
  
};

export { MainTeam }