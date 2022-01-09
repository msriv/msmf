import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { manageComponentState } from "../styleUtils";

const Select = (props) => {
  const {
    label,
    multiselect,
    editable,
    autoFocus,
    classes,
    defaultValue,
    disabled,
    error,
    errorText,
    formHelperText,
    required,
    value,
    onChange,
    name,
    options,
  } = props;

  const [state, setState] = useState("");
  const baseClasses = {
    root: "transition duration-200 ease-in-out bg-white p-3 text-black border border-gray-300 rounded",
    hover: "hover:border-chambray-500 ",
    clicked: "",
    disabled: "",
    error: "border-red-500",
  };

  const handleHover = (event) => {
    event.preventDefault();
    setState(event.type === "mouseenter" ? "hover" : "");
  };

  return (
    <>
      <label htmlFor={`${label}-${name}`}> {label}</label>
      <select
        className={`form-select ${manageComponentState(
          classes,
          baseClasses,
          state
        )}`}
        name={name}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {options?.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {formHelperText !== "" ? (
        <p className=" text-caption font-bold">{formHelperText}</p>
      ) : null}
      {error ? (
        <p className=" text-caption text-red-500 font-bold">{errorText}</p>
      ) : null}
    </>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  multiselect: PropTypes.bool,
  editable: PropTypes.bool,
  autoFocus: PropTypes.bool,
  classes: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  formHelperText: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default Select;
