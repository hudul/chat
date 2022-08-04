import {useState} from 'react'
import SidebarHeader from '../sidebarHeader'
import SidebarSearch from '../sidebarSearch'
import ChatItem from './chatItem'

const avatarNames = ['avatar1','avatar2','avatar3','avatar4','avatar5','avatar6','avatar7','avatar8','avatar9','avatar10']
const avatars = avatarNames.map(item => require("../../../assets/images/xs/"+ item + ".jpg").default)

const ChatHeader = () =>{
  const [show,setShow] = useState(false)
  const btnList = ['Action','Another action','Something else here']
  const handleClick = (index) => {
    console.log(index)
  }
  return (
    <li className="header d-flex justify-content-between ps-3 pe-3 mb-1">
      <span>RECENT CHATS</span>
      <div className="dropdown">
        <span className="btn btn-link px-1 py-0 border-0 text-muted dropdown-toggle" onClick={()=>setShow(!show)} ><i className="zmdi zmdi-filter-list"></i></span>
        <div className={`dropdown-menu dropdown-menu-right ${show ? 'show' : ''}`}>
          {
            btnList.map((item,index)=>(
              <span className="dropdown-item" key={index} onClick={()=>handleClick(index)}>{item}</span>
            ))
          }
        </div>
      </div>
    </li>
  )
}
const chatType = {
  GROUP: 1,
  CHAT: 2,
  BOT: 3
}
const chatStatus = {
  none: 2,
  online: 1,
  away: 0
}


const SidebarChat = () => {
  
  const newChat = () => {
    console.log('new chat')
  }
  const searchChat = (value) => {
    console.log('searchChat',value)
  }

  const sidebarHeaderInfo = {
    title: 'Chat',
    btnName: 'New chat',
    handle: newChat
  }

  const sidebarSearchInfo = {
    handleSearch: searchChat,
    placeholder: 'Search...'
  }
  console.log('avatars',avatars)
  const chatlist = [
    {
      id:1,
      type: 3, //类型：群组1，聊天2，机器人3
      chatStatus: 1, // 聊天状态：在线，离线，其他
      avatar: '', //头像
      name: 'Support ChatBot', //聊天标题，群组名称或者聊天人员名称
      description: '', //描述
      dateTime: '', //时间
      groupMenbersAvatar:null, //群组人员头像列表
      input: 0,  //输入状态 0，1，
      favorites: 0, //是否收藏：0，1
    },
    {
      id:2,
      type: 2, //类型：群组1，聊天2，机器人3
      chatStatus: 1, // 聊天状态：在线，离线，其他
      avatar: avatars[1], //头像
      name: 'zhansan', //聊天标题，群组名称或者聊天人员名称
      description: '', //描述
      dateTime: '', //时间
      groupMenbersAvatar:null, //群组人员头像列表
      input: 0,  //输入状态 0，1，
      favorites: 0, //是否收藏：0，1
    },
    {
      id:3,
      type: 2, //类型：群组1，聊天2，机器人3
      chatStatus: 1, // 聊天状态：在线，离线，其他
      avatar: avatars[2], //头像
      name: 'lisi', //聊天标题，群组名称或者聊天人员名称
      description: '', //描述
      dateTime: '', //时间
      groupMenbersAvatar:null, //群组人员头像列表
      input: 0,  //输入状态 0，1，
      favorites: 0, //是否收藏：0，1
    },
    {
      id:4,
      type: 1, //类型：群组1，聊天2，机器人3
      chatStatus: 1, // 聊天状态：在线，离线，其他
      avatar: avatars[3], //头像
      name: 'work', //聊天标题，群组名称或者聊天人员名称
      description: 'description', //描述
      dateTime: '', //时间
      groupMenbersAvatar:[
        {
          name:'aaaaaaa',
          avatar: avatars[0]
        },
        {
          name:'aaaaaaa',
          avatar: avatars[1]
        },
        {
          name:'aaaaaaa',
          avatar: avatars[2]
        },
        {
          name:'aaaaaaa',
          avatar: avatars[3]
        },
      ], //群组人员头像列表
      input: 0,  //输入状态 0，1，
      favorites: 0, //是否收藏：0，1
    },
    {
      id:5,
      type: 2, //类型：群组1，聊天2，机器人3
      chatStatus: 1, // 聊天状态：在线，离线，其他
      avatar: avatars[4], //头像
      name: 'wangwu', //聊天标题，群组名称或者聊天人员名称
      description: '', //描述
      dateTime: '', //时间
      groupMenbersAvatar:null, //群组人员头像列表
      input: 0,  //输入状态 0，1，
      favorites: 0, //是否收藏：0，1
    },
    {
      id:6,
      type: 2, //类型：群组1，聊天2，机器人3
      chatStatus: 1, // 聊天状态：在线，离线，其他
      avatar: '', //头像
      name: 'wuliu', //聊天标题，群组名称或者聊天人员名称
      description: '', //描述
      dateTime: '', //时间
      groupMenbersAvatar:null, //群组人员头像列表
      input: 1,  //输入状态 0，1，
      favorites: 0, //是否收藏：0，1
    },
  ]

  return (
    <>
      <SidebarHeader sidebarHeaderInfo={sidebarHeaderInfo} />
      <SidebarSearch sidebarSearchInfo={sidebarSearchInfo}/>
      <ul className="chat-list">
        <ChatHeader />
        {
          chatlist.map((item,index)=>(
            <ChatItem key={index} chatInfo={item} />
          ))
        }
      </ul>
      
    </>
  )
}

export default SidebarChat