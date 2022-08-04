

const SidebarSearch = (props) => {
  const {sidebarSearchInfo:{handleSearch,placeholder}} = props
  return (
    <div className="form-group input-group-lg search mb-3">
      <i className="zmdi zmdi-search"></i>
      <input type="text" className="form-control" placeholder={placeholder} onChange={(e)=>handleSearch(e.target.value)}/>
    </div>
  )
}

export default SidebarSearch