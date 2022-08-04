import Avatar from '../../avatarComp'
import { Tooltip } from 'antd'

const ChatItem = (props) =>{
  const {chatInfo:{chatStatus, avatar, name, type, id, groupMenbersAvatar,dateTime,description,input}} = props
  const handleClickItem = (id) => {
    console.log(id)
  }
  return (
    <li>
      <div className="card" onClick={()=>handleClickItem(id)}>
        <div className="card-body">
          <div className="media">
            <Avatar status={chatStatus} img={avatar} title={name} type={type} />
            <div className="media-body overflow-hidden">
              <div className="d-flex align-items-center mb-1">
                <h6 className="text-truncate mb-0 me-auto">{name}</h6>
                <p className="small text-muted text-nowrap ms-4 mb-0">{dateTime}</p>
              </div>
              {
                type === 1 && (
                  <div className="text-truncate">
                    <i className="zmdi zmdi-file-text me-1"></i>{description}
                    {
                      groupMenbersAvatar && groupMenbersAvatar.length ? 
                      <div className="avatar-list avatar-list-stacked mt-1">
                        {
                          groupMenbersAvatar.map((item,index)=> (
                            <Tooltip title={item.name} key={index}>
                              <img className="avatar xs rounded" src={item.avatar} />
                            </Tooltip>
                          ))
                        }
                      </div>
                      : ''
                    }
                  </div>
                )
              }
              {
                type === 2 && (
                  <div className="text-truncate">
                    {
                      chatStatus === 1 && input === 1 ? (
                        <div className="wave">
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                        </div>
                      ) : (
                        <i className="zmdi zmdi-file-text me-1"></i> + {description}
                      )
                    }
                  </div>
                )
              }
              {
                type === 3 && (
                  <div className="text-truncate">
                    {
                      chatStatus === 0 && (<i class="zmdi zmdi-circle text-warning"></i> + 'onLine')
                    }
                    {
                      chatStatus === 1 && (<i class= "zmdi zmdi-circle text-success"></i> + 'away')
                    }
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ChatItem