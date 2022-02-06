import Carousel from "../../components/Common/Carousel";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";
import Link from "next/link";
import ResearchImpact from "../../components/Client/Research/Impact";

const ResearchCarouselItems = [
  <div>
    <div className="relative w-screen h-[809px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[809px]"
      >
        <div className="font-avenir-book text-center w-full">
          <p className="text-white text-xl">
            Mazumdar Shaw Centre for Translational Research (MSCTR)
          </p>
          <p className="mx-auto mt-14 text-5xl font-avenir-heavy text-white w-9/12 text-center">
            “We aim to be a Center of Excellence for Translation of Biomedical
            Research.”
          </p>
        </div>
        <button className="msmf__nav-cta font-avenir-book mt-20">
          Learn More
        </button>
      </div>
      <img
        src="http://api.ms-mf.org/assets/IncubationBanner.png"
        alt="incubation-banner"
        className="w-screen"
      />
    </div>
  </div>,
];

const Research = () => {
  return (
    <div>
      <Carousel
        carouselID="researchCarousel"
        alignIndicator="center"
        carouselItems={ResearchCarouselItems}
        classes={`h-[820px]`}
      />
      <Section>
        <SectionTitle
          title={
            <span>
              Our <b>Research Programs</b>
            </span>
          }
        />
        <SectionContent>
          <div className="flex justify-between w-full">
            <Link href={"/research/research-programs/molecular-immunology"}>
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-md rounded bg-white pb-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
                  <img
                    src="assets/images/Research/cancer (2).png"
                    alt="cancer"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center">Molecular Immunology</p>
              </div>
            </Link>
            <Link
              href={
                "/research/research-programs/integrated-head-and-neck-oncology"
              }
            >
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-md rounded bg-white pb-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
                  <img
                    src="assets/images/Research/neck 1.png"
                    alt="oncology"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center">
                  Integrated Head and Neck Oncology
                </p>
              </div>
            </Link>
            <Link href={"/research/research-programs/neuro-oncology"}>
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-md rounded bg-white pb-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
                  <img
                    src="assets/images/Research/oncology.png"
                    alt="oncology"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center">Neuro Oncology</p>
              </div>
            </Link>
            <Link href={"/research/research-programs/product-research"}>
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-md rounded bg-white pb-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
                  <img
                    src="assets/images/Research/new-product 1.png"
                    alt="product"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center">Product Research</p>
              </div>
            </Link>
          </div>
        </SectionContent>
      </Section>
      <ResearchImpact />
    </div>
  );
};

export default Research;
