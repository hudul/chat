import './index.scss'
import Navigation from '../navigation/index.jsx'
import Rightbar from '../rightbar/index.jsx'
import Sidebar from '../sidebar/index.jsx'
import Main from '../main/index.jsx'
const PageLayout = () => {
  return (
    <div className="layout">
      <Navigation />
      <Sidebar />
      <Main />
      <Rightbar />
    </div>
  )
}

export default PageLayout;