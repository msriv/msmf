import Carousel from "../../Common/Carousel";

const PhilanthropyCarouselItems = [
  <div key={0}>
    <div className="relative w-screen h-[809px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[809px]"
      >
        <div className="prose font-avenir-heavy text-[47px] text-center mt-20">
          <p className="text-white m-0 leading-tight">Join the battle...</p>{" "}
          <p className="text-[#fbb602] italic m-2 font-bold">
            Because they can&apos;t fight cancer alone
          </p>
        </div>
        <button
          className="msmf__nav-cta font-avenir mt-40 font-bold border-2"
          onClick={() => {
            window.open("/philanthropy/donate", "_self");
          }}
        >
          Donate
        </button>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Philanthropy/1_Home Page Banner_MSCOP play area 2.jpg"
        alt="philanthropy-banner"
        className="w-screen object-fit h-[809px]"
      />
    </div>
  </div>,
  <div key={0}>
    <div className="relative w-screen h-[809px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[809px]"
      >
        <div className="prose font-avenir-heavy text-[47px] text-center mt-20">
          <p className="text-white m-0 leading-tight">
            Become a Guardian of Hope by...
          </p>{" "}
          <p className="text-[#fbb602] italic m-2 font-bold">
            Putting a Smile to Their Face
          </p>
        </div>
        <button
          className="msmf__nav-cta font-avenir mt-40 font-bold border-2"
          onClick={() => {
            window.open("/philanthropy/donate", "_self");
          }}
        >
          Donate
        </button>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Philanthropy/6_Banner 2_MSCOP patient meeting 2.jpg"
        alt="philanthropy-banner"
        className="w-screen object-fit h-[809px]"
      />
    </div>
  </div>,
];

const PhilanthropyHero = (): JSX.Element => {
  return (
    <Carousel
      alignIndicator="center"
      carouselID="philanthropy-carousel"
      carouselItems={PhilanthropyCarouselItems}
      classes="h-[809px] bg-msmf-dark/90"
    />
  );
};

export default PhilanthropyHero;
