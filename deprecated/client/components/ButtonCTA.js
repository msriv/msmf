const ButtonCTA = ({ onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="transition duration-500 ease-in-out bg-transparent border border-white rounded py-3 px-6 text-white font-inter-medium text-xl flex justify-center items-center"
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
