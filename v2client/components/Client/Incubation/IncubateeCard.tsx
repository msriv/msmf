interface IncubateeCardProps {
  logo?: string;
  incubateeName: string;
  companyLink?: string;
  about: string | React.ReactNode;
}

const IncubateeCard = (props: IncubateeCardProps) => {
  const { logo, incubateeName, companyLink, about } = props;

  return (
    <div
      className={`w-full h-min bg-white my-8 px-6 py-10 rounded shadow-md flex items-center ${
        logo ? "justify-between" : "justify-center"
      } divide-x divide-[#8A8A8A]`}
    >
      {logo && (
        <div className="w-4/12 h-52 p-4 flex justify-center items-center">
          <img
            src={logo}
            alt={`${incubateeName} Logo`}
            className="w-9/12  object-scale-down"
          />
        </div>
      )}
      <div className="w-8/12 px-8 py-6">
        <p className=" text-4xl m-0 font-medium">{incubateeName}</p>
        {companyLink && (
          <a
            className="text-gray-500 no-underline font-normal"
            href={companyLink}
          >
            {companyLink}
          </a>
        )}
        <p className="prose text-justify">{about}</p>
      </div>
    </div>
  );
};

export default IncubateeCard;
