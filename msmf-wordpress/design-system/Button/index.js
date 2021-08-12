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
    root: "transition duration-500 ease-in-out bg-chambray-500 rounded p-3 text-white font-bold",
    hover: "hover:bg-prussian-blue-500 ",
    clicked: "",
    disabled: "disabled:bg-chambray-200 "
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