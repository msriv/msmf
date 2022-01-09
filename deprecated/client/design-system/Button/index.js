import { useState } from "react";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import { manageComponentState } from "../styleUtils";

const Button = (props) => {
  const {
    children,
    type,
    classes,
    className,
    onClick,
    submitLoading,
    variant,
  } = props;

  const [state, setState] = useState("");

  const baseClasses =
    variant === "outlined"
      ? {
          root: "transition duration-500 ease-in-out bg-transparent border border-black rounded px-5 py-2 text-black flex justify-center items-center",
          hover:
            "hover:bg-shark-400 hover:border-0 hover:border-transparent hover:text-white",
          clicked: "",
          disabled: "disabled:bg-chambray-200 ",
          success: "",
          error: "",
        }
      : {
          root: "transition duration-500 ease-in-out bg-chambray-500 rounded px-5 py-2 text-white flex justify-center items-center",
          hover: "hover:bg-prussian-blue-500 ",
          clicked: "",
          disabled: "disabled:bg-chambray-200 ",
          success: "",
          error: "",
        };

  const handleHover = (event) => {
    event.preventDefault();
    setState(event.type === "mouseenter" ? "hover" : "");
  };

  return (
    <button
      type={type}
      className={`space-x-3 ${
        className
          ? `${manageComponentState(classes, baseClasses, state)} ${className}`
          : classes
          ? manageComponentState(classes, baseClasses, state)
          : null
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={onClick}
    >
      {submitLoading ? (
        <Loader type="Oval" color="#fff" height={25} width={25} />
      ) : null}
      <span className="font-inter-medium">{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  classes: PropTypes.object,
  className: PropTypes.string,
  submitLoading: PropTypes.bool,
};

export default Button;
