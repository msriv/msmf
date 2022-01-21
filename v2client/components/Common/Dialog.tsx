interface DialogProps {
  children: React.ReactNode;
  open: boolean;
  width?: "sm" | "md" | "lg" | "xl";
}

const setDialogWidth = (width?: string) => {
  switch (width) {
    case "sm": {
      return "w-4/12";
    }
    case "md": {
      return "w-6/12";
    }
    case "lg": {
      return "w-8/12";
    }
    case "xl": {
      return "w-10/12";
    }
    default: {
      return "w-6/12";
    }
  }
};

const Dialog = (props: DialogProps) => {
  const { children, open, width } = props;
  return open ? (
    <div className="absolute top-0 left-0 w-screen h-screen">
      <div
        id="backdrop"
        className="absolute top-0 left-0 bg-neutral-800/30 w-full h-full z-0"
      ></div>
      <div
        id="dialog"
        className="absolute w-full h-full flex justify-center items-center z-50 "
      >
        <div className={`bg-white p-6 rounded ${setDialogWidth(width)}`}>
          {children}
        </div>
      </div>
    </div>
  ) : null;
};

export default Dialog;
