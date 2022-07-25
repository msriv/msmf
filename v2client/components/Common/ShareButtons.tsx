interface IShareButtons {
  link: string;
  body: string;
  hashtags: Array<string>;
}
import {
  WhatsappIcon,
  FacebookIcon,
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import React from "react";

const ShareButtons = ({ url, title, body }: any) => {
  //const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  //console.log(setOpen);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;

  return (
    <div>
      <button
        id="popover"
        color="primary"
        onClick={handleClick}
        className="msmf__secondary-btn"
      >
        Share
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <p className="p-2  text-bold"> Share on your Social Platforms</p>
        <div className="m-2 p-2 justify-between  flex gap-2">
          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon round={true} size={50} />
          </WhatsappShareButton>
          <LinkedinShareButton url={url} title={title}>
            <LinkedinIcon round={true} size={50} />
          </LinkedinShareButton>
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon round={true} size={50} />
          </FacebookShareButton>
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon round={true} size={50} />
          </TwitterShareButton>
        </div>
      </Popover>
    </div>
  );
};
export default ShareButtons;
