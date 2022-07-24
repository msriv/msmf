import Link from "next/link";
import { Snackbar } from "@mui/material";
import { ReactNode, useState } from "react";
import ShareButtons from "../../Common/ShareButtons";
interface ImpactCardProps {
  name: string;
  thumbnail: string;
  title: string;
  about: string | ReactNode;
  amountRaised?: number;
  totalAmount?: number;
  startDate?: Date;
  endDate?: Date;
  supporterCount?: number;
}

const ImpactCard = (props: ImpactCardProps) => {
  const {
    name,
    thumbnail,
    title,
    about,
    amountRaised,
    totalAmount,
    startDate,
    endDate,
    supporterCount,
  } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="m-4 px-4 pb-4 bg-white shadow rounded w-4/12">
        <Link
          href={`/philanthropy/impact#${name
            .split(" ")
            .join("-")
            .toLowerCase()}`}
        >
          <div>
            <img
              src={thumbnail}
              alt={title}
              className="m-0 w-full h-48 object-contain"
            />
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
          </div>
        </Link>
        <div className="flex justify-between">
          <ShareButtons
            url={`https://ms-mf.org/philanthropy/impact#${name
              .split(" ")
              .join("-")
              .toLowerCase()}`}
              title= {title}
          />
          <button
            onClick={() => {
              window.open("/philanthropy/donate", "_self");
            }}
            className="msmf__cta-btn"
          >
            Support Us
          </button>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Under Development"
        />
      </div>
    </>
  );
};

export default ImpactCard;
