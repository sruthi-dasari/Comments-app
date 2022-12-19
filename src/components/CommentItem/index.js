import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment, isLiked} = commentDetails

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const nameInitial = name[0]

  return (
    <li>
      <div className="comment-title-container">
        <div className="profile-picture-container">
          <p className="profile-name-initial">{nameInitial}</p>
        </div>
        <p className="username">{name}</p>
        <p className="comment-time">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="like-delete-container">
        <div>
          <img src={likeImgUrl} alt="like" />
          <p className="like-text">Like</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
