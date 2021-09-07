import PropTypes from "prop-types";

const FormGroup = (props) => {
  const {
    children
  } = props;

  return (
    <div className="flex flex-col my-2">
      {children}
    </div>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired
}

export default FormGroup;