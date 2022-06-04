const ImpactCard = (props: {
  title: string;
  number: number;
 // about?: string;
}) => {
  const { title, number} = props;
  return (
    <div className="flex my-12">
      <div id="impact-number" className="">
        <div className="bg-incubation relative w-20 h-20 rounded">
          <p className="absolute m-0 top-4 left-3 text-white font-semibold font-helvetica text-5xl">
            {number}+
          </p>
        </div>
        </div>
      <div id="about-number" className="ml-10 text-white">
        <p className="font-semibold text-xl m-5 mb-2">{title}</p>
        {/* {about ? (
          <p className=" leading-relaxed m-0 px-3 w-8/12 text-sm">
            {about}</p>
        ) : null} */}
      </div>
    </div>
  );
};

export default ImpactCard;
