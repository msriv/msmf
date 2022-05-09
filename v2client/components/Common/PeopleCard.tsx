import { useEffect, useState } from "react";
import { IPerson } from "../../utils/Interfaces";
import { Section, SectionContent } from "./Section";
// import { Dialog, DialogTitle, DialogActions, DialogContent, IconButton } from "@mui/material";
import { Dialog, DialogTitle, DialogActions, DialogContent, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const PeopleCard = (props: IPerson) => {
  const { name, image, linkedInProfile, position, about } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = () => { 
    setOpen(true); 
  }
  const handleClose = () => { 
    setOpen(false);
  }

  useEffect(() => {
    console.log(open)
  }, [open])

  return (
    <div className="w-4/12 flex justify-center p-4" onClick={about ? () => { setOpen(true) } : () => {}} >
      <div className="w-[321px] flex flex-col ">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-[321px] h-[327px] m-0 object-cover"
          />
        )}
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
      <Dialog open={open} maxWidth={"lg"} fullWidth onClose={() => setOpen(false)}>
        <DialogTitle>
          <span className="font-inter-bold text-3xl">{name}</span>
            <CloseIcon onClick={() => setOpen(false)}/>
        </DialogTitle>
        <DialogContent >
          <div className="w-full flex justify-between">
            <div className="w-4/12">
            {image && (
          <img
            src={image}
            alt={name}
            className="w-[321px] h-[327px] m-0 object-cover"
          />
        )}
            </div>
            <div className="w-8/12">
              <p>{about}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PeopleCard;
