import { IPerson } from "../../utils/Interfaces";

const PeopleCard = (props: IPerson) => {
  const { name, image, linkedInProfile, position } = props;

  return (
    <div className="w-4/12 flex justify-center p-4">
      <div className="w-[321px] flex flex-col ">
        <img
          src={image || "https://fakeimg.pl/321x327"}
          alt={name}
          className="w-[321px] h-[327px] m-0 object-cover"
        />
        <div className="w-[321px] flex justify-between items-center mt-2">
          <p className="m-0 font-semibold leading-tight">{name}</p>
          {linkedInProfile && (
            <a href={linkedInProfile || "#"} target="_blank" rel="noreferrer">
              <img
                src="/assets/images/Common/icons8-linkedin-192-black.png"
                alt="linkedin"
                className="w-6 h-6 m-0"
              />{" "}
            </a>
          )}
        </div>
        <p className="m-0 mt-2 leading-tight text-[#333333] text-lg">
          {position}
        </p>
      </div>
    </div>
  );
};

export default PeopleCard;
