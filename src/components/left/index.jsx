import avatar from '../../assets/images/user.png'
import Logo from '../../components/left/logo'
import './index.scss'

const Left = () =>{
  return (
    <div className="navigation navbar justify-content-center py-xl-4 py-md-3 py-0 px-3">
      <a href="index.html" title="Postman" className="brand">
        <Logo />
      </a>
      <div className="nav flex-md-column nav-pills flex-grow-1">
        <div className="mb-xl-3 mb-md-2 nav-link active">
          <img src={avatar} className="avatar rounded-circle" alt="user avatar" />
        </div>
        <div className="mb-xl-3 mb-md-2 nav-link">
          <i className="zmdi zmdi-home"></i>
        </div>
        <div className="mb-xl-3 mb-md-2 nav-link">
          <i className="zmdi zmdi-notifications"></i>
        </div>
        <div className="mb-xl-3 mb-md-2 nav-link d-none d-sm-block flex-grow-1">
          <i className="zmdi zmdi-layers"></i>
        </div>
        <div className="mt-xl-3 mt-md-2 nav-link light-dark-toggle">
          <i className="zmdi zmdi-brightness-2"></i>
          <input className="light-dark-btn" type="checkbox" />
        </div>
        <div className="mt-xl-3 mt-md-2 nav-link d-none d-sm-block">
          <i className="zmdi zmdi-settings"></i>
        </div>
      </div>
      <button type="submit" className="btn sidebar-toggle-btn shadow-sm"><i className="zmdi zmdi-menu"></i></button>
    </div>
  )
}

export default Left;