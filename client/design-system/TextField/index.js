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
    errorText,
    formHelperText,
    required,
    type,
    value,
    onChange,
    onBlur,
    name,
    pattern,
    placeholder,
  } = props;

  const [state, setState] = useState("");

  const baseClasses = {
    root: "transition duration-200 ease-in-out bg-white p-3 text-black border border-gray-300 rounded",
    hover: "hover:border-chambray-500 ",
    clicked: "",
    disabled: "",
    error: "",
    success: "",
  };

  const handleHover = (event) => {
    event.preventDefault();
    setState(event.type === "mouseenter" ? "hover" : "");
  };

  return (
    <>
      {label && <label htmlFor={`${label}-${name}`}> {label}</label>}
      {multiline ? (
        <textarea
          rows={rows || 2}
          cols={cols || 20}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={`form-textarea ${manageComponentState(
            classes,
            baseClasses,
            state
          )}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          onError={() => {
            setState("error");
          }}
          disabled={disabled}
          onBlur={onBlur}
          required={required}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={`form-input ${manageComponentState(
            classes,
            baseClasses,
            state
          )}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onError={() => {}}
          onBlur={onBlur}
          required={required}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
        />
      )}
      {formHelperText !== "" ? (
        <p className=" text-caption font-bold">{formHelperText}</p>
      ) : null}
      {error ? (
        <p className=" text-caption text-red-500 font-bold">{errorText}</p>
      ) : null}
    </>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  classes: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  formHelperText: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  pattern: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(RegExp),
  ]),
  placeholder: PropTypes.string,
};

export default TextField;
