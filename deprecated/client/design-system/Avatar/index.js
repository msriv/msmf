import PropTypes from "prop-types";
import Image from "next/image";
import { manageComponentState } from "../styleUtils";

const Avatar = (props) => {

  const {
    name,
    src,
    classes
  } = props;

  const baseClasses = {
    root: "rounded-full",
  }

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={src || `https://ui-avatars.com/api/?name=${name.replace(" ", "+")}&rounded=true`}
          layout="fill"
          className={manageComponentState(classes, baseClasses, "")}
          alt={name}
        />
      </div>
      <div className="text-xs font-bold">{name}</div>
    </div>
  )
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  classes: PropTypes.object
}

export default Avatar;