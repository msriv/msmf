interface DialogProps {
  children: React.ReactChildren;
  open: boolean;
}

const Dialog = (props: DialogProps) => {
  const { children, open } = props;
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
        <div className="bg-white p-6 rounded w-8/12">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Dialog;
