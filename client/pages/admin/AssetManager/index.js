import AssetManager from "./AssetManager";
import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { Cancel as CloseIcon } from "@mui/icons-material";

export const PortableAssetManager = (props) => {
  const { open, setOpen } = props;

  return (
    <Dialog open={open} maxWidth={"lg"} fullWidth>
      <DialogTitle>
        <span className="font-inter-bold text-3xl">Asset Manager</span>
        <IconButton
          className={classes.closeButton}
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <AssetManager />
      </DialogContent>
    </Dialog>
  );
};

export default AssetManager;
