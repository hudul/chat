import './index.scss'
const avatarNames = ['avatar1','avatar2','avatar3','avatar4','avatar5','avatar6','avatar7','avatar8','avatar9','avatar10']
const avatars = avatarNames.map(item => require("../../assets/images/xs/"+ item + ".jpg").default)

const Avatar = (props) => {
  const {status, img, title, type} = props
  return (
    <div className="avatarBox">
      {
        status ? <span className="status"></span> : ''
      }
      {
        img ?
        <img className="avatar" src={img} alt="avatar"></img>
        :
        <div className="noneImg">
          <span>
            {
              type === 1 ? <i className="zmdi zmdi-comment-text"></i> : title.substring(0,2)
            }
          </span>
        </div>
      }
    </div>
  )
}

export default Avatar