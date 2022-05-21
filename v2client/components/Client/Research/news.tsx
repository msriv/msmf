import { INews } from "../../../utils/Interfaces"
import { ContentCard } from "../../Common/ContentCard";
import { newsCardData } from "../../../store/data/news";
import { Section, SectionContent, SectionTitle } from "../../Common/Section"
import NewsCard from "../../Common/NewsCard";
import {ReactNode} from "react";

interface NewsProp {
  title?: ReactNode;
}

const News = (props: NewsProp) => {
  const { title } = props;
  return (
    <Section>
      <SectionTitle
        title={
          title || (
            <span>
               <b>News</b>
            </span>
          )
        }
      />
      <SectionContent>
        <div className="flex justify-between w-full">
          {newsCardData.map((story, key) => ( key < 3 &&
            <NewsCard key={key} 
              image={story.image![0]} 
              title={`Support ${story.title}`}
              about={`${story.about}...`}
            />
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};

export default News;

// const News = () => {
//   return (
//     <>
//       <Section>
//         <SectionTitle
//           title={
//             <span>
//               Our <b>Impact</b>
//             </span>
//           }
//         />
//         <SectionContent>
//           {NewsCard.map((news, key) => (
//             <ContentCard key={key}>
//               <div className="w-full px-6">
//                 <p className="font-semibold text-4xl">{news.title}</p>
//                 <p>{news.about}</p>
//               </div>
//               <div className="w-full px-6 flex justify-center space-x-28">
//                 {news.image?.map((img, key) => (
//                   <img
//                     key={key}
//                     src={img}
//                     alt=""
//                     className="w-5/12 h-96 object-contain"
//                   />
//                 ))}
//               </div>
//             </ContentCard>
//           ))}
//           {/* <div className="flex justify-center mt-12">
//             <button className="msmf__cta-btn">Support Us</button>
//           </div> */}
//         </SectionContent>
//       </Section>
//       <Campaigns />
//     </>
//   );
// };

// export default News;



// import { ContentCard } from "../../Common/ContentCard";
// import {
//   Section,
//   SectionContent,
//   SectionTitle,
// } from "../../Common/Section";

// const newsCardsData = [
//   {
//     image: "HNSCC",
//     newsTitle: "Clinical potential of LCN2 in Cancer",
//     text: [""],
//   },
//   {
//     image: "HNSCC",
//     newsTitle: "Clinical potential of LCN2 in Cancer",
//     text: [""],
//   },
//   {
//     image: "HNSCC",
//     newsTitle: "Clinical potential of LCN2 in Cancer",
//     text: [""],
//   },

// ];

// const NewsSection = () => {
//   return (<>
//     <Section>
//       <SectionTitle
//         title={
//           <span>
//             Diagnostics <b>Research</b>
//           </span>
//         }
//       />
//       {/* <div className="w-4/12 my-0 p-3 mx-auto bg-research flex"> */}
//       <SectionContent >
//       <div className=" mt-8 flex flex-wrap w-full justify-between">
//         {newsCardsData.map((project, key) => (
          
//           <ContentCard className ="w-3/12 m-4 shadow-md rounded bg-white p-10" key={key}>
//             {/* image for news */}
//             <img className="font-bold text-[#6A6A6A] m-0" src= {project.image}/>
//             {/* Title for news */}
//             <p className="font-semibold text-3xl mt-0"> {project.newsTitle}</p>
//             <p className="font-bold uppercase text-[#6A6A6A] m-0"></p>
//             {/* {project.members.map((member, key) => (
//               <p className="text-[#535050] m-0" key={key}>
//                 {member}
//               </p>
//             ))} */}
//             {/* text */}
//             {/* <p className="mb-0 font-bold text-[#6A6A6A] uppercase">{" "}</p>
//             <p className="m-0">{project.text}</p> */}
//           </ContentCard>

//         ))}
//                   </div>
//       </SectionContent>

//     </Section>
    
          
//         </>
//   );
// };
// export default NewsSection;


// const NewsSection = (): JSX.Element => {
//   return (
//       <>
//         <Section>
//         <SectionTitle
//           title={
//             <span>
//               Our <b>Research Programs</b>
//             </span>
//           }
//         />
//         <SectionContent>
//           {/* <div className=" flex justify-between w-full"> */}
//           <div className=" mt-8 flex flex-wrap w-full justify-between">
//                <div className=" w-3/12 m-4 shadow-md rounded bg-white p-10 hover:shadow-xl">
//                   <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
//                     {/* <img
//                       src="https://cdn.ms-mf.org/images/Research/cancer (2).png"
//                       alt="cancer"
//                       className="m-0"
//                     /> */}
//                   </div>
//                 <p className="font-bold text-center text-2xl">
//                   Molecular Immunology
//                 </p>
//               </div>

//               <div className="cursor-pointer transition duration-300 ease-in-out w-3/12 m-4 shadow-md rounded bg-white p-10 hover:shadow-xl">
//                 <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
//                   {/* <img
//                     src="https://cdn.ms-mf.org/images/Research/neck 1.png"
//                     alt="oncology"
//                     className="m-0"
//                   /> */}
//                 </div>
//                 <p className="font-bold text-center text-2xl">
//                   Integrated Head and Neck Oncology
//                 </p>
//               </div>

//               <div className="cursor-pointer transition duration-300 ease-in-out w-3/12 m-4 shadow-md rounded bg-white p-10 hover:shadow-xl">
//                 <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
//                   {/* <img
//                     src="https://cdn.ms-mf.org/images/Research/oncology.png"
//                     alt="oncology"
//                     className="m-0"
//                   /> */}
//                 </div>
//                 <p className="font-bold text-center text-2xl">Neuro Oncology</p>
//               </div>

//          <div className="cursor-pointer transition duration-300 ease-in-out w-3/12 m-4 shadow-md rounded bg-white p-10 hover:shadow-xl">
//                 <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
//                   {/* <img
//                     src="https://cdn.ms-mf.org/images/Research/new-product 1.png"
//                     alt="product"
//                     className="m-0"
//                   /> */}
//                 </div>
//                 <p className="font-bold text-center text-2xl">
//                   Product Research
//                 </p>
//               </div>
//               <div className="cursor-pointer transition duration-300 ease-in-out w-3/12 m-4 shadow-md rounded bg-white p-10 hover:shadow-xl">
//                 <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
//                   {/* <img
//                     src="https://cdn.ms-mf.org/images/Research/new-product 1.png"
//                     alt="product"
//                     className="m-0"
//                   /> */}
//                 </div>
      
//                 <p className="font-bold text-center text-2xl">
//                   Product Research
//                 </p>
//               </div>
//               <div className="cursor-pointer transition duration-300 ease-in-out w-3/12 m-4 shadow-md rounded bg-white p-10 hover:shadow-xl">
//                 <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
//                   {/* <img
//                     src="https://cdn.ms-mf.org/images/Research/new-product 1.png"
//                     alt="product"
//                     className="m-0"
//                   /> */}
//                 </div>
//                 <p className="font-bold text-center text-2xl">
//                   Product Research
//                 </p>
//               </div>

//           </div>
//         </SectionContent>
//       </Section>

//       </>
//   );
// };

// export default NewsSection;
