import logo from '../../../assets/icon/logo.svg'
import Style from './index.scss'

const Logo = () => {
  return (
    <div className={Style.img}>
      <img src={logo} width="34" height="34" alt="logo"/>
    </div>
  )
}

export default Logo