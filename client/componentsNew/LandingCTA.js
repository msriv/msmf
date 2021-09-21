import ButtonCTA from "./ButtonCTA";

const LandingCTA = (props) => {
  const { image, heading, content, cta } = props;

  return (
    <div className="mt-20 w-full h-full" style={{ height: "593px" }}>
      <div className="relative h-full">
        <div className=" absolute top-0 left-0 w-full h-full">
          <img
            className="align-top object-cover w-full h-full"
            style={{ filter: "brightness(0.3)" }}
            src={image}
            alt={heading}
          />
        </div>
        <div className=" absolute top-0 left-0 w-full h-full ">
          <div className="w-9/12 mx-auto space-y-10 flex flex-col items-center justify-center h-full">
            <p className="text-5xl font-inter-bold text-white">{heading}</p>
            <p className="text-2xl font-inter-medium text-white text-center leading-relaxed">
              {content}
            </p>
            <ButtonCTA onClick={cta}>Learn More</ButtonCTA>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCTA;
