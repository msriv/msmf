import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { manageComponentState } from "../styleUtils";

const TextField = (props) => {
  const {
    label,
    multiline,
    rows,
    cols,
    autoComplete,
    autoFocus,
    classes,
    defaultValue,
    disabled,
    error,
    FormHelperTextProps,
    required,
    type,
    value,

  } = props;

  const [state, setState] = useState("");

  const baseClasses = {
    root: "transition duration-500 ease-in-out bg-white p-5 text-black border border-black",
    hover: "hover:shadow-xs ",
    clicked: "",
    disabled: ""
  }

  const handleHover = (event) => {
    event.preventDefault();
    setState(event.type === "mouseenter" ? "hover" : "");
  }

  return (
    multiline ? (
      <textarea 
        rows={rows || 2}
        cols={cols || 20}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={manageComponentState(classes, baseClasses, state)}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        onError={() => {}}
        required={required}
      />
    ) : (
      <input
        type={type}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={manageComponentState(classes, baseClasses, state)}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        onError={() => {}}
        required={required}
      />
    ) 
  )
}

export default TextField