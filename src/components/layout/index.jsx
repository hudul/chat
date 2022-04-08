import './index.scss'
import Left from '../left/index.jsx'
import Right from '../right/index.jsx'
import Center from '../center/index.jsx'
const PageLayout = () => {
  return (
    <div className="layout">
      <Left className="left" />
      <Center className="center" />
      <Right className="right" />
    </div>
  )
}

export default PageLayout;