import ButtonCTA from "./ButtonCTA";

const IncubationBanner = () => {
  return (
    <div style={{ height: "50vh" }} className="w-full relative ">
      <div style={{ height: "40vh" }} className="bg-chambray-700"></div>
      <div
        id="banner-data"
        style={{
          height: "35vh",
          top: "6rem",
          left: "6rem",
          width: "calc(100vw - 13rem)",
        }}
        className="absolute bg-apple flex"
      >
        <div id="image" className=" w-6/12">
          <img
            src="http://api.ms-mf.org/assets/incubation/mimi-thian-vdXMSiX-n6M-unsplash.jpg"
            className="object-cover w-full h-full filter brightness-50"
          />
        </div>
        <div id="content" className="w-6/12 px-10 py-14">
          <p className="text-4xl font-rubik-medium mb-2 text-white">
            India's First Corporate Hospital-based Start-Up Incubator.
          </p>
          <div className="my-8">
            <ButtonCTA>Learn More</ButtonCTA>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncubationBanner;
