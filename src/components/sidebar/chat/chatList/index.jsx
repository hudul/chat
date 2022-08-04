

const ChatListComp = () => {
  const chatData = [
    
  ]
  return (
    <ul class="chat-list">
      <li class="header d-flex justify-content-between ps-3 pe-3 mb-1">
        <span>RECENT CHATS</span>
        <div class="dropdown">
          <a class="btn btn-link px-1 py-0 border-0 text-muted dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-filter-list"></i></a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </li>
      <li>
        <a href="bot-chat.html" class="card">
          <div class="card-body">
            <div class="media">
              <div class="avatar me-3">
                <div class="avatar rounded-circle no-image bg-primary text-light">
                  <span><i class="zmdi zmdi-comment-text"></i></span>
                </div>
              </div>
              <div class="media-body overflow-hidden">
                <div class="d-flex align-items-center mb-1">
                  <h6 class="text-truncate mb-0 me-auto">Support ChatBot</h6>
                </div>
                <div class="text-truncate">
                  <i class="zmdi zmdi-circle text-success"></i> Online
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li class="online">
        <div class="hover_action">
          <button type="button" class="btn btn-link text-info"><i class="zmdi zmdi-eye"></i></button>
          <button type="button" class="btn btn-link text-warning"><i class="zmdi zmdi-star"></i></button>
          <button type="button" class="btn btn-link text-danger"><i class="zmdi zmdi-delete"></i></button>
        </div>
        <a href="single-chat.html" class="card">
          <div class="card-body">
            <div class="media">
              <div class="avatar me-3">
                <span class="status rounded-circle"></span>
                <img class="avatar rounded-circle" src="assets/images/xs/avatar5.jpg" alt="avatar" />
              </div>
              <div class="media-body overflow-hidden">
                <div class="d-flex align-items-center mb-1">
                  <h6 class="text-truncate mb-0 me-auto">Jason Porter</h6>
                  <p class="small text-muted text-nowrap ms-4 mb-0">11:08 am</p>
                </div>
                <div class="text-truncate">It is a long established fact that a reader w...</div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  )
}

export default ChatListComp