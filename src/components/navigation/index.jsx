import { useContext } from 'react'
import { AppContent, actionType } from '../../store/index'
import avatar from '../../assets/images/user.png'
import Logo from './logo'
import './index.scss'

const Navigation = () =>{
  const [state, dispatch] = useContext(AppContent)

  const sidebar_tolgge = (value) => {
    dispatch({type:actionType.SIDEBAR_TOGGLE, payload: value})
  }
  let menus = [
    {
      title:'',
      icon:'comment-alt',
      className:'',
      type:'chat'
    },
    {
      title:'',
      icon:'account-circle',
      className:'d-none d-sm-block flex-grow-1',
      type:'contact'
    },
    {
      title:'',
      icon:'brightness-2',
      className:'light-dark-toggle',
      type:'lightDark'
    },{
      title:'',
      icon:'settings',
      className:'d-none d-sm-block',
      type:'settings'
    },
  ]
  const handleClickItem = (e) => {
    console.log(e)
    if(state.sidebarList.includes(e)){
      sidebar_tolgge(e);
    }
    switch(e){
      case 'user':
        break;
      case 'chat':
        break;
      case 'contact':
        break;
      case 'lightDark':
        console.log(e); 
        break;
      case 'settings':
        break;
      default:
        console.log('default')
    }
  }
  return (
    <div className="navigation navbar justify-content-center py-xl-4 py-md-3 py-0 px-3">
      <div title="Postman" className="brand" >
        <Logo />
      </div>
      <div className="nav flex-md-column nav-pills flex-grow-1">
        <div className="mb-xl-3 mb-md-2 nav-link active" type='user' onClick={()=>handleClickItem('user')}>
          <img src={avatar} className="avatar rounded-circle" alt="user avatar" />
        </div>

        {
          menus.map((item,index)=>(
            <div className={`mb-xl-3 mb-md-2 nav-link ${item.className}`} type={item.type} onClick={()=>handleClickItem(item.type)} key={index}>
              <i className={`zmdi zmdi-${item.icon}`}></i>
              {
                item.icon === 'brightness-2' 
                ? <input className="light-dark-btn" type="checkbox" />
                : ''
              }
            </div>
          ))
        }
      </div>
      <button type="submit" className="btn sidebar-toggle-btn shadow-sm"><i className="zmdi zmdi-menu"></i></button>
    </div>
  )
}

export default Navigation;