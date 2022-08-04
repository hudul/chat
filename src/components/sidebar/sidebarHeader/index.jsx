const SidebarHeader = (props) => {
  const {sidebarHeaderInfo:{title,handle,btnName}} = props
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h3 className="mb-0 text-primary">{title}</h3>
      <button className="btn btn-dark" onClick={handle} >{btnName}</button>
    </div>
  )
}

export default SidebarHeader