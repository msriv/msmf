const AdminNavigationButton = (props) => {
  const {
    children,
    component,
    setComponent,
  } = props

  return (
    <div onClick={() => {setComponent(component)}} className="font-avenir-book flex items-center space-x-4 m-0 hover:bg-chambray-500 rounded-xl p-2 px-4 text-shark-500 hover:text-white ">
        {children}
    </div>
  )
}

export default AdminNavigationButton