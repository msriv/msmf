interface ImpactCardProps {
  thumbnail: string;
  title: string;
  about: string;
  amountRaised: number;
  totalAmount: number;
  startDate: Date;
  endDate: Date;
  supporterCount: number;
}

const ImpactCard = (props: ImpactCardProps) => {
  const {
    thumbnail,
    title,
    about,
    amountRaised,
    totalAmount,
    startDate,
    endDate,
    supporterCount,
  } = props;

  return (
    <div className="m-4 px-4 pb-4 bg-white shadow rounded w-4/12">
      <img src={thumbnail} alt={title} className="m-0 w-full" />
      <p className="font-bold text-xl">{title}</p>
      <p className="text-[#535050] text-xl">{about}</p>
      {/* <p className="text-[#535050]">
        <span id="amountRaised" className="font-bold text-xl">
          {amountRaised}
        </span>{" "}
        raised out of{" "}
        <span className="font-bold text-xl" id="totalAmount">
          {totalAmount}
        </span>
      </p> */}
      {/* <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-msmf-base h-2 rounded"
          style={{ width: "45%" }}
        ></div>
      </div> */}
      {/* <div className="flex justify-between">
        <p>
          <span className="font-semibold">{25}</span> Days Left
        </p>
        <p>
          <span className="font-semibold">{supporterCount}</span> Supporters
        </p>
      </div> */}
      <div className="flex justify-between">
        <button className="msmf__secondary-btn">Share</button>
        <button className="msmf__cta-btn">Support Us</button>
      </div>
    </div>
  );
};

export default ImpactCard;
