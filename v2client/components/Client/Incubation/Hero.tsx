import Carousel from "../../Common/Carousel";

const IncubationCarouselItems = [
  <div key={0}>
    <div className="relative w-screen h-[809px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[809px]"
      >
        <div className="prose font-avenir font-bold text-[47px] text-center">
          <p className="text-white m-0 leading-tight">We are India’s first</p>{" "}
          <p className="text-[#fbb602] italic -m-2">
            Corporate Hospital-based Start-up Incubator
          </p>
        </div>
        <button className="msmf__nav-cta font-avenir-book mt-40">
          Get Incubated
        </button>
      </div>
      <img
        src="/assets/images/Rectangle 1508.png"
        alt="philanthropy-banner"
        className="w-screen object-fit h-[809px]"
      />
    </div>
  </div>,
];

const IncubationHero = (): JSX.Element => {
  return (
    <Carousel
      alignIndicator="center"
      carouselID="incubation-carousel"
      carouselItems={IncubationCarouselItems}
      classes="h-[809px]"
    />
  );
};

export default IncubationHero;
