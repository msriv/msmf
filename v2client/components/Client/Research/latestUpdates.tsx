import { ContentCard } from "../../Common/ContentCard";
import { Section, SectionContent, SectionTitle } from "../../Common/Section";

const LatestUpdates = [
  {
    image: "https://cdn.ms-mf.org/images/Incubation/Bionest_logo.jpg",
    newsTitle: "Clinical potential of LCN2 in Cancer",
    text: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. "],
  },
  {
    image: "https://cdn.ms-mf.org/images/Incubation/Bionest_logo.jpg",
    newsTitle: "Clinical potential of LCN2 in Cancer",
    text: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. "],
  },
  {
    image: "https://cdn.ms-mf.org/images/Incubation/Bionest_logo.jpg",
    newsTitle: "Clinical potential of LCN2 in Cancer",
    text: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. "],
  },
];

const Updates = () => {
  return (<>
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
        <div className=" mt-8 flex flex-wrap w-full p-1 justify-around">
          {LatestUpdates.map((project, key) => (
            
            <ContentCard className ="w-4/12 shadow-md rounded bg-white p-8" key={key}>
              {/* image for news */}
              <img className="font-bold text-[#6A6A6A] m-0" src= {project.image}/>
              {/* Title for news */}
              <p className="font-semibold text-3xl mt-0"> {project.newsTitle}</p>
              <p className="font-bold uppercase text-[#6A6A6A] m-0">{project.text}</p>

            </ContentCard>

          ))}
        </div>
        </SectionContent>
      </Section>
  </>
  );
};
export default Updates;
