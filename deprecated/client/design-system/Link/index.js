import { useState } from "react";
import PropTypes from "prop-types";
import { manageComponentState } from "../styleUtils";

const Link = (props) => {
  const {
    children,
    classes,
    href
  } = props;

  const [state, setState] = useState('');

  const baseClasses = {
    root: "transition duration-500 ease-in-out text-shark-500 font-inter-medium cursor-pointer",
    hover: "hover:text-prussian-blue-500 ",
    clicked: "",
    disabled: "disabled:text-shark-200 ",
    success: "",
    error: ""
  }

  const handleHover = (event) => {
    event.preventDefault();
    setState(event.type === "mouseenter" ? "hover" : "");
  }

  const handleClick = () => {

  }

  return (
    <p
      className={`space-x-3 ${manageComponentState(classes, baseClasses, state)}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={() => handleClick(href)}
    >
      {children}
    </p>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
}

export default Link