import Carousel from "../../components/Common/Carousel";

const ResearchCarouselItems = [
  <div className="carousel-item h-[820px] active relative float-left w-full">
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
      />
    </div>
  );
};

export default Research;
