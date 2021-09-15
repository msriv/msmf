import PropTypes from "prop-types"
import RoutesBuilder from './RoutesBuilder'

const SiteNavbar = (props) => {

  const { pathname } = props;

  return (
    <>
    <div className="flex items-center justify-end mx-auto py-5 px-16 mb-10">
      <RoutesBuilder pathname={pathname} />
    </div>
    </>
  )
}

SiteNavbar.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default SiteNavbar