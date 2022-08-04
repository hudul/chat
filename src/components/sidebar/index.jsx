
import { useContext } from 'react'
import './index.scss'
import SidebarChat from './chat/index'
import { AppContent } from '../../store'

const Sidebar = () =>{
  const [state,dispatch] = useContext(AppContent)
  const { sidebar_show, sidebarInfo } = state
  console.log(state)
  const sidebarList = [
    {
      type: sidebarInfo.chat.name,
      component: <SidebarChat />
    },
    {
      type: sidebarInfo.user.name,
      component: <div></div>
    },
    {
      type: sidebarInfo.contact.name,
      component: <div></div>
    }
  ]

  return (
    <div className="sidebar border-end py-xl-4 py-3 px-xl-4 px-3">
      <div className="tab-content">
        {
          sidebarList.map(item=>(
            <div className={`tab-pane ${item.type === sidebar_show ? 'show active' : ''}`} key={item.type}>
              {
                item.component
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar;