import { Close as CloseButton } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { title } from "process";
import { useState } from "react";

const ImageDialog = (props: {
  open: boolean;
  onClose: () => void;
  title: string;
  image?: string;
}) => {
  const { open, onClose, title, image } = props;
  return (
    <Dialog open={open} maxWidth={"lg"} fullWidth className="bg-transparent">
      <DialogTitle>
        <span className="font-inter-bold text-3xl">{title}</span>
        <IconButton className="float-right" onClick={onClose}>
          <CloseButton />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div className="flex justify-center">
          <img src={image} alt={title.split(" ").join("-").toLowerCase()} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const GalleryItem = (props: { image: string; title: string }) => {
  const { image, title } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className=" transition-500 border border-gray-300 rounded-md p-2 hover:shadow-lg">
      <img
        onClick={() => setOpen(true)}
        src={image}
        alt={title.split(" ").join("-").toLowerCase()}
        className="rounded "
      />
      <ImageDialog
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        image={image}
      />
    </div>
  );
};

export default GalleryItem;
