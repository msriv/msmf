import Carousel from "../../components/Common/Carousel";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";
import Link from "next/link";
import ResearchImpact from "../../components/Client/Research/Impact";
import { ContentCardNoBorder } from "../../components/Common/ContentCardNoBorder";
import NewsSection from "../../components/Client/Research/news";

const ResearchCarouselItems = [

  <div key={0}>
    <div className="relative w-screen h-[809px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[809px]"
      >
        <div className="font-avenir-book text-center w-full">
          <p className="text-white text-xl">
            Mazumdar Shaw Centre for Translational Research (MSCTR)
          </p>
          <p className="mx-auto mt-14 text-4xl font-avenir-heavy text-white w-9/12 text-center">
            “Specialization is not a limitation, but a pedestal.”
          </p>
        </div>

        <button className="msmf__nav-cta font-avenir-book mt-20  font-bold border-2"  onClick={() => {
            window.open("/research#research-programs", "_self");
          }}>
          Learn More
        </button>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Research/RFP Tagged oral cells (1).jpg"
        alt="philanthropy-banner"
        className="w-screen object-fit h-[809px]"
      />
    </div>
  </div>,
  <div key={1}>
    <div className="relative w-screen h-[809px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[809px]"
      >
        <div className="font-avenir-book text-center w-full">
          <p className="text-white text-xl">
            Mazumdar Shaw Centre for Translational Research (MSCTR)
          </p>
          <p className="mx-auto mt-14 text-4xl font-avenir-heavy text-white w-9/12 text-center">
            “A will, highly motivated by compassion directs science towards
            intelligent innovations and affordable solutions.”
          </p>
        </div>
        <button className="msmf__nav-cta font-avenir-book mt-20  font-bold border-2"  onClick={() => {
            window.open("/research#research-programs", "_self");
          }}>
          Learn More
        </button>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Research/RFP-Tagged oral cells.jpg"
        alt="philanthropy-banner"
        className="w-screen object-fit h-[809px]"
      />
    </div>
  </div>,
  <div key={2}>
    <div className="relative w-screen h-[809px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[809px]"
      >
        <div className="font-avenir-book text-center w-full">
          <p className="text-white text-xl">
            Mazumdar Shaw Centre for Translational Research (MSCTR)
          </p>
          <p className="mx-auto mt-14 text-4xl font-avenir-heavy text-white w-9/12 text-center">
            “After a certain high level of technical skill is achieved, science
            and art tends to coalesce in aesthetics, plasticity, and form. The
            greatest scientists are artists as well – Albert Einstein”
          </p>
        </div>
        <button className="msmf__nav-cta font-avenir-book mt-20  font-bold border-2"  onClick={() => {
            window.open("/research#research-programs", "_self");
          }}>
          Learn More
        </button>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Research/Segmented single cells-1.jpg"
        alt="philanthropy-banner"
        className="w-screen object-fit h-[809px]"
      />
    </div>
  </div>,
  <div key={3}>
    <div className="relative w-screen h-[809px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[809px]"
      >
        <div className="font-avenir-book text-center w-full">
          <p className="text-white text-xl">
            Mazumdar Shaw Centre for Translational Research (MSCTR)
          </p>
          <p className="mx-auto mt-14 text-4xl font-avenir-heavy text-white w-9/12 text-center">
            “A seamless platform connecting and energizing multiple stake
            holders towards excellence in healthcare”
          </p>
        </div>
        <button className="msmf__nav-cta font-avenir-book mt-20  font-bold border-2"  onClick={() => {
            window.open("/research#research-programs", "_self");
          }}>
          Learn More
        </button>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Research/Telecytology images-3.jpg"
        alt="philanthropy-banner"
        className="w-screen object-fit h-[809px]"
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
            <p>
              <b>About Us</b>
            </p>
          }
        />
        <SectionContent>
          <div id="our-mission-and-vision">
            <div id="our-mission">
              <ContentCardNoBorder>
                <div className="w-full flex space-x-10">
                  <p className="w-6/12">
                    Facilitate research that will contribute to early detection,
                    diagnosis and treatment of various human diseases, which is
                    translational in nature and be derived from knowledge gained
                    through cellular, molecular, biochemical and genetic
                    approaches.
                  </p>
                  <img src="" alt="About Us Photo" className="w-5/12" />
                </div>
              </ContentCardNoBorder>
            </div>
            <div id="our-vision">
              <ContentCardNoBorder>
                <div className="w-full flex space-x-10">
                  <img src="" alt="Vision Photo" className="w-5/12" />
                  <p className="w-6/12">
                    Translation of Biomedical Research, encouraging novel
                    methods of technology deployment, with focus on healthcare
                    challenges specific to South Asia, India in the fields of
                    Oncology, Infectious diseases, Stem cell-based applications
                    in Neurosciences, Gerontology and Regenerative medicine
                  </p>
                </div>
              </ContentCardNoBorder>
            </div>
          </div>
        </SectionContent>
      </Section>
      <Section id={"research-programs"}>
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
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-md rounded bg-white p-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
                  <img
                    src="https://cdn.ms-mf.org/images/Research/cancer (2).png"
                    alt="cancer"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center text-2xl">
                  Molecular Immunology
                </p>
              </div>
            </Link>
            <Link
              href={
                "/research/research-programs/integrated-head-and-neck-oncology"
              }
            >
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-md rounded bg-white p-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
                  <img
                    src="https://cdn.ms-mf.org/images/Research/neck 1.png"
                    alt="oncology"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center text-2xl">
                  Integrated Head and Neck Oncology
                </p>
              </div>
            </Link>
            <Link href={"/research/research-programs/neuro-oncology"}>
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-md rounded bg-white p-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
                  <img
                    src="https://cdn.ms-mf.org/images/Research/oncology.png"
                    alt="oncology"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center text-2xl">Neuro Oncology</p>
              </div>
            </Link>
            <Link href={"/research/research-programs/product-research"}>
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-md rounded bg-white p-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-research flex justify-center">
                  <img
                    src="https://cdn.ms-mf.org/images/Research/new-product 1.png"
                    alt="product"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center text-2xl">
                  Product Research
                </p>
              </div>
            </Link>
          </div>
        </SectionContent>
      </Section>
      <ResearchImpact />
      <NewsSection />
    </div>
  );
};

export default Research;
