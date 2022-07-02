import Carousel from "../../components/Common/Carousel";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";
import Link from "next/link";
import ResearchImpact from "../../components/Client/Research/Impact";
import { ContentCardNoBorder } from "../../components/Common/ContentCardNoBorder";
import NewsList from "../../components/Client/Research/NewsList";
import { GalleryItems } from "../../store/data/GalleryItems";
import GalleryItem from "../../components/Common/GalleryItem";

let galleryList: Array<{ title: string; image: string }[]> = [],
  GalleryCarouselItems: Array<JSX.Element> = [];

const prepareGalleryCarouselItems = () => {
  let i = 0;
  while (i < GalleryItems.length) {
    galleryList.push(
      GalleryItems.filter((item, key) => key >= i && key < i + 6)
    );
    i += 6;
  }

  GalleryCarouselItems = galleryList.map((GArray, key) => (
    <div
      key={key}
      className="flex flex-wrap justify-center items-center w-10/12 mx-auto mt-10"
    >
      {GArray.map((Item, key) => (
        <div key={key} className=" flex justify-center w-3/12 my-2 mx-2">
          <GalleryItem image={Item.image} title={Item.title} />
        </div>
      ))}
    </div>
  ));
  return GalleryCarouselItems;
};

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
            “A seamless platform connecting and energizing multiple stake
            holders towards excellence in healthcare”
          </p>
        </div>
        <button
          className="msmf__nav-cta font-avenir-book mt-20  font-bold border-2"
          onClick={() => {
            window.open("/research#research-programs", "_self");
          }}
        >
          Learn More
        </button>
        <div className=" absolute bottom-0 right-0 mr-20">
      <p className="text-white text-l">
        Telecytology
      </p>
    </div>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Research/Telecytology images-3.jpg"
        alt="philanthropy-banner"
        className="w-screen object-contain h-[809px] bg-black"
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
            “Specialization is not a limitation, but a pedestal.”
          </p>
          <div className=" absolute bottom-0 right-0 mr-20">
      <p className="text-white text-l">
        Tagged Oral Cells
      </p>
    </div>
        </div>

        <button
          className="msmf__nav-cta font-avenir-book mt-20  font-bold border-2"
          onClick={() => {
            window.open("/research#research-programs", "_self");
          }}
        >
          Learn More
        </button>

      </div>
      <img
        src="https://cdn.ms-mf.org/images/Research/RFP Tagged oral cells (1).jpg"
        alt="philanthropy-banner"
        className="w-screen object-contain h-[809px] bg-black"
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
            “A will, highly motivated by compassion directs science towards
            intelligent innovations and affordable solutions.”
          </p>
        </div>
        <button
          className="msmf__nav-cta font-avenir-book mt-20  font-bold border-2"
          onClick={() => {
            window.open("/research#research-programs", "_self");
          }}
        >
          Learn More
        </button>
        <div className=" absolute bottom-0 right-0 mr-20">
      <p className="text-white text-l">
        RFP tagged Oral Cells
      </p>
    </div>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Research/RFP-Tagged oral cells.jpg"
        alt="philanthropy-banner"
        className="w-screen  object-contain h-[809px] bg-black"
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
            “After a certain high level of technical skill is achieved, science
            and art tends to coalesce in aesthetics, plasticity, and form. The
            greatest scientists are artists as well – Albert Einstein”
          </p>
        </div>
        <button
          className="msmf__nav-cta font-avenir-book mt-20  font-bold border-2"
          onClick={() => {
            window.open("/research#research-programs", "_self");
          }}
        >
          Learn More
        </button>
        <div className=" absolute bottom-0 right-0 mr-20">
      <p className="text-white text-l">
        Segmented Single Cells
      </p>
    </div>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Research/Segmented single cells_1-1.jpg"
        alt="philanthropy-banner"
        className="w-screen  object-contain h-[809px] bg-black"
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
              <b>Introduction</b>
            </p>
          }
        />
        <SectionContent>
          <div id="our-mission-and-vision">
            <div id="our-mission">
              <ContentCardNoBorder>
                <p className="font-semibold text-3xl">About Us</p>
                <div className="w-full flex space-x-10 items-center">
                  <p className="w-6/12">
                    Facilitate research that will contribute to early detection,
                    diagnosis and treatment of various human diseases, which is
                    translational in nature and be derived from knowledge gained
                    through cellular, molecular, biochemical and genetic
                    approaches.
                  </p>
                  <div className="container grid grid-cols-2 gap-2 mx-auto">
                    <div className="w-full rounded">
                      <img
                        src="https://cdn.ms-mf.org/images/Research/Image 1.jpg"
                        alt="image"
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full rounded">
                      <img
                        src="https://cdn.ms-mf.org/images/Research/Image 2.jpg"
                        alt="image"
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full rounded">
                      <img
                        src="https://cdn.ms-mf.org/images/Research/Image 3.jpg"
                        alt="image"
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full rounded">
                      <img
                        src="https://cdn.ms-mf.org/images/Research/Image 4.jpg"
                        alt="image"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ContentCardNoBorder>
            </div>
            <div id="our-vision">
              <ContentCardNoBorder>
                <p className="font-semibold text-3xl">Our Vision</p>
                <div className="w-full flex space-x-10 items-center">
                  <img
                    src="https://cdn.ms-mf.org/images/Research/Vision_2.jpg"
                    alt="image"
                    className="w-5/12"
                  />

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
      <NewsList />
      <Section>
        <SectionTitle
          title={
            <p>
              <b>Gallery</b>
            </p>
          }
        />
        <Carousel
          alignIndicator="center"
          carouselID="gallery-carousel"
          carouselItems={prepareGalleryCarouselItems()}
          theme={"dark"}
        />
      </Section>
    </div>
  );
};

export default Research;
