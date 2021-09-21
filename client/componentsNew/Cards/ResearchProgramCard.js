const ResearchProgramCard = ({ image, title, description }) => {
  return (
    <div>
      <div
        style={{ minWidth: 400, minHeight: 550 }}
        className="relative w-max h-auto mx-auto"
      >
        <div
          style={{
            height: 222,
            width: 327,
          }}
        >
          <img className="w-full h-full object-cover" src={image} />
        </div>
        <div
          className="w-full h-full bg-white shadow-lg p-5"
          style={{
            position: "absolute",
            height: "max-content",
            width: 327,
            top: 160,
            left: 60,
          }}
        >
          <p className="font-inter-bold text-xl">{title}</p>
          <p className="my-5 text-lg text-shark-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchProgramCard;
