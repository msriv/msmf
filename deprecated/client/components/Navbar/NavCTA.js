const NavCTA = ({ onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="transition duration-500 ease-in-out bg-transparent border border-white rounded px-5 py-2 text-white flex justify-center items-center hover:bg-white hover:border-0 hover:border-transparent hover:text-black"
    >
      {children}
    </button>
  );
};

export default NavCTA;
