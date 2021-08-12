import PropTypes from "prop-types";

const FormControl = (props) => {
  const {
    children
  } = props;

  return (
    <div className="flex flex-col my-2">
      {children}
    </div>
  )
}

FormControl.propTypes = {
  children: PropTypes.node.isRequired
}

export default FormControl;