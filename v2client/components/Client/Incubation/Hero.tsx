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
        <button
          onClick={() => {
            window.open("/incubation/get-incubated", "_self");
          }}
          className="msmf__nav-cta font-avenir-book mt-40"
        >
          Get Incubated
        </button>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Incubation/Banner 1_International wing building.jpg"
        alt="philanthropy-banner"
        className="w-screen object-cover h-[809px]"
      />
    </div>
  </div>,
  <div key={1}>
    <div className="relative w-screen h-[809px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[809px]"
      >
        <div className="prose font-avenir font-bold text-[40px] text-center">
          <p className="text-white m-0 leading-tight">
            Unique creative ecosystem to inspire{" "}
          </p>
          <p className="text-[#fbb602] italic -m-2">
            Researchers and Engineers to generate and lead innovations.
          </p>
        </div>
        <button
          onClick={() => {
            window.open("/incubation/get-incubated", "_self");
          }}
          className="msmf__nav-cta font-avenir-book mt-40"
        >
          Get Incubated
        </button>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Incubation/START UP SPACE.jpg"
        alt="philanthropy-banner"
        className="w-screen object-cover h-[809px]"
      />
    </div>
  </div>,
  <div key={2}>
    <div className="relative w-screen h-[809px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[809px]"
      >
        <div className="prose font-avenir font-bold text-[47px] text-center">
          <p className="text-white m-0 leading-tight">
            TBI is a vibrant platform for
          </p>{" "}
          <p className="text-[#fbb602] italic m-2 text-5xl">
            Interaction and Transformation of ideation & <br />
            Innovation from the grassroot level.
          </p>
        </div>
        <button
          onClick={() => {
            window.open("/incubation/get-incubated", "_self");
          }}
          className="msmf__nav-cta font-avenir-book mt-40"
        >
          Get Incubated
        </button>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Incubation/Video conferencing room.jpg"
        alt="philanthropy-banner"
        className="w-screen object-cover h-[809px]"
      />
    </div>
  </div>,
  <div key={3}>
    <div className="relative w-screen h-[809px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[809px]"
      >
        <div className="prose font-avenir font-bold text-5xl text-center">
          <p className="text-white m-0 leading-tight ">
            We are combining corporate and general hospital cultures,
            <br /> and health care challenges
          </p>{" "}
          <p className="text-[#fbb602] italic m-2 text-4xl">
            With state-of-the-art technology, in creating opportunities for
            business.
          </p>
        </div>
        <button
          onClick={() => {
            window.open("/incubation/get-incubated", "_self");
          }}
          className="msmf__nav-cta font-avenir-book mt-40"
        >
          Get Incubated
        </button>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Incubation/Single seater cubicle.jpg"
        alt="philanthropy-banner"
        className="w-screen object-cover h-[809px]"
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
