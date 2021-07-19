import PropTypes from "prop-types";

const ComponentView = (props) => {
  const {
    title,
    children
  } = props;

  return (
    <div className="flex m-4">
      <div className="bg-white rounded-lg p-5 shadow-xl w-full">
        <br/>
        <h4 className="text-xl font-bold text-center">
          {title || "Component Name"}
        </h4>
        <br/>
        <div className={`grid grid-cols-${children.length} justify-center items-center`}>
          {children}
        </div>
        <br/>
      </div>
    </div>
  )
}

ComponentView.propTypes = {
  children: PropTypes.node.isRequired
}

export default ComponentView;