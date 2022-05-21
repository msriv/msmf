import { useEffect, useState } from "react";
import { INews } from "../../utils/Interfaces";
import { Section, SectionContent } from "./Section";
// import { Dialog, DialogTitle, DialogActions, DialogContent, IconButton } from "@mui/material";
import { Dialog, DialogTitle, DialogActions, DialogContent, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";


// const NewsDialog = (props: {
//   open: boolean;
//   onClose: () => void;
//   title: string;
//   image?: string;
//   about?: string;
// }) => {
//   const { open, onClose, title , image, about } = props;
//   console.log(onClose);
//   return (
//     <Dialog open={open} maxWidth={"lg"} fullWidth>
//       <DialogTitle>
//         <span className="font-inter-bold text-3xl">{title}</span>
//         <IconButton className="float-right" onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>
//       <DialogContent>
//         <div className="w-full flex justify-between">
//           <div className="w-4/12">
//             {image && (
//               <img
//                 src={image}
//                 alt={title}
//                 className="w-[321px] h-[327px] m-0 object-cover"
//               />
//             )}
//           </div>
//           <div className="w-8/12">
//             <p>{about}</p>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };
// const NewsCard = (props: INews) => {
//   const { title, image, about } = props;

//   const [open, setOpen] = useState(false);

//   console.log(setOpen);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <div className="w-4/12 flex justify-center p-4 flex-col">
//         <div className="w-[321px] flex flex-col ">
//           {image && (
//             <img
//               src={image}
//               alt={title}
//               className="w-[321px] h-[327px] m-0 object-cover"
//             />
//           )}
//           <div className="w-[321px] flex justify-between items-center mt-2">
//             <p className="m-0 font-semibold leading-tight">{title}</p>

//           </div>
//           <p className="m-0 mt-2 leading-tight text-[#333333] text-lg">
//             {about}
//           </p>
//           {about ? (
//             <div className="flex justify-start items-end">
//               <button onClick={handleOpen}>Read More</button>
//             </div>
//           ) : null}
//         </div>
//       </div>
//       {about ? (
//         <NewsDialog
//           open={open}
//           onClose={handleClose}
//           title={title}
//           about={about}
//           image={image}
//         />
//       ) : null}
//     </>
//   );
// };

// export default NewsCard;



const NewsCard = (props: INews) => {
  const { title, image, about } = props;

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
        {image && (<img src={image}
            className="w-[321px] h-[327px] m-0 object-cover"/>)}
        <p className="m-0 mt-2 leading-tight text-[#333333] text-3xl font-semibold">
          {title}
        </p>
      </div>
      <Dialog open={open} maxWidth={"lg"} fullWidth onClose={() => setOpen(false)}>
        <DialogTitle>
          <span className="font-inter-bold text-3xl">{title}</span>
            <CloseIcon onClick={() => setOpen(false)}/>
        </DialogTitle>
        <DialogContent >
          <div className="w-full flex justify-between">
            <div className="w-4/12">
              {image && (<img src={image} 
              className="w-[321px] h-[327px] m-0 object-cover"/>  )}
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

export default NewsCard;
