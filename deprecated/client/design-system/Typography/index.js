import { useState } from "react" 
import PropTypes from "prop-types"
import { manageComponentState } from "../styleUtils";

const Typography = (props) => {
  const {
    variant,
    gutterBottom,
    noWrap,
    inline,
    children,
    classes,
    state
  } = props;

  const baseClasses = {
    root: "transition duration-200 ease-in-out text-black",
    hover: "",
    clicked: "",
    disabled: "",
    success: "text-success-500",
    error: "text-error-500"
  }

  const getVariantSize = () => {
    switch (variant) {
      case "footnote" : return "xs"
      case "footnote2" : return "sm"
      case "caption" : return "caption"
      case "body" : return "base"
      case "body2" : return "lg"
      case "subheading" : return "xl"
      case "subheading2" : return "2xl"
      case "heading" : return "3xl"
      case "heading2" : return "4xl"
      case "title" : return "5xl"
    }
  }

  const setWrap = () => {
    return noWrap ? "" : "whitespace-nowrap";
  }

  const setGutter = () => {
    return gutterBottom ? "mb-2" : "";
  }

  return (
    inline ? (
      <span 
        className={`p-0 m-0 text-${getVariantSize()} ${setWrap()} ${setGutter()} ${manageComponentState(classes, baseClasses, state)}`}
      >
        {children}
      </span>
    ) : (
      <p 
        className={`p-0 m-0 text-${getVariantSize()} ${setWrap()} ${setGutter()} ${manageComponentState(classes, baseClasses, state)}`}
      >
        {children}
      </p>
    )
  )
}

Typography.propTypes = {
  variant: PropTypes.string,
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  inline: PropTypes.bool,
  children: PropTypes.node
}


export default Typography