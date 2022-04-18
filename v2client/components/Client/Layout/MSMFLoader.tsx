interface MSMFLoaderProps {
  open: boolean;
}

const MSMFLoader = (props: MSMFLoaderProps) => {
  const { open } = props;
  return open ? (
    <div
      className={`transition-500 ${
        open ? "opacity-100" : "opacity-0"
      } w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center bg-white z-50`}
    >
      <img src="/assets/msmf_logo1.jpg" alt="msmf-logo" className="mb-2" />
      <p className="flex items-center">
        <img src="/assets/preloader.gif" className="w-8 h-8 mr-2" />
        Please wait while we load your page...
      </p>
    </div>
  ) : null;
};

export default MSMFLoader;
