import { ContentCard } from "../../Common/ContentCard";
import { Section, SectionContent, SectionTitle } from "../../Common/Section";

const LatestUpdates = [
  {
    image: "https://cdn.ms-mf.org/images/Homepage/1. Neurosciences.jpg",
    newsTitle: "Stem cell based Stroke management program",
    text: [
      "Mazumdar Shaw Medical Foundation (MSMF) and Narayana Institute of Neurosciences, MSMC, Narayana Health are coming together to initiate a comprehensive Stem Cell-Based Stroke Management Program, supported by the SKAN Research Trust.",
    ],
  },
  {
    image:
      "https://cdn.ms-mf.org/images/Homepage/2. Product Research-Computational Biology.jpg",
    newsTitle: "New Initiatives",
    text: [
      "A Product Research Group has been established with the objective of defining pipelines and to pursue the leads obtained from the Discovery Programs. The focus is on generating diagnostic/prognostic assays, novel therapeutics and in vitro patient-derived cell models. Computational Biology has always been an integral part of the exploratory research work at MSMF, this year we have carved an independent, core program that would focus on Informatics and Artificial Intelligence.",
    ],
  },
  {
    image: "https://cdn.ms-mf.org/images/Homepage/3. Advanced Diagnostics.jpg",
    newsTitle: "Advanced Diagnostic Research",
    text: [
      "Advanced Diagnostic Research Centre (ADRC) focuses on tailoring research to the clinical challenges/needs and developing assays/tests that are accurate, and affordable. This program is being established in close collaboration with the clinical team at Mazumdar Shaw Medical Centre and Narayana Hrudayalaya to cater to the unmet and immediate clinical needs.",
    ],
  },
];

const Updates = () => {
  return (
    <>
      <Section>
        <SectionTitle
          title={
            <span>
              <div className="text-[38px] font-helvetica text-center py-4">
                Our <b>Latest Updates</b>
              </div>
            </span>
          }
        />
        {/* <div className="w-4/12 my-0 p-3 mx-auto bg-research flex"> */}
        <SectionContent>
          <div className=" mt-2  flex flex-wrap w-full justify-evenly">
            {LatestUpdates.map((project, key) => (
              <div key={key} className="w-4/12 p-4 items-center">
                <ContentCard
                  className=" shadow-md rounded bg-white p-8 h-full"
                >
                  {/* image for news */}
                  <img
                    className="w-full h-[420px] object-cover rounded-[12px]"
                    src={project.image}
                  />
                  {/* Title for news */}
                  <p className="font-semibold text-3xl mt-0">
                    {" "}
                    {project.newsTitle}
                  </p>
                  <p className=" text-[#6A6A6A] m-0">{project.text}</p>
                </ContentCard>
              </div>
            ))}
          </div>
        </SectionContent>
      </Section>
    </>
  );
};
export default Updates;