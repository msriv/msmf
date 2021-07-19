import { useState } from "react";
import PropTypes from "prop-types";
import { manageComponentState } from "../styleUtils";

const Button = (props) => {
  const {
    children,
    type,
    classes
  } = props;

  const [state, setState] = useState('');

  const baseClasses = {
    root: "transition duration-500 ease-in-out bg-black hover:bg-red-500 p-5 text-white",
    hover: "hover:bg-red-500 ",
    clicked: "",
    disabled: ""
  }

  const handleHover = (event) => {
    event.preventDefault();
    setState(event.type === "mouseenter" ? "hover" : "");
  }

  return (
    <button
      type={type}
      className={manageComponentState(classes, baseClasses, state)}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  classes: PropTypes.object
}

export default Button