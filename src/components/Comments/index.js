import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentsList} = this.state
    return (
      <div className="app-container">
        <h1 className="main-heading">Comments</h1>
        <div className="input-boxes-and-app-img-container">
          <div className="input-boxes-container">
            <p className="comment-title">
              Say something about 4.0 Technologies
            </p>
            <form className="form-container" onSubmit={this.onAddComment}>
              <input
                placeholder="Your Name"
                className="name-input-box"
                onChange={this.onChangeName}
              />
              <input
                placeholder="Your Comment"
                className="comment-input-box"
                onChange={this.onChangeComment}
              />
              <button type="button" className="add-comment-btn">
                Add Comment
              </button>
            </form>
          </div>

          <img
            className="app-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="seperator" />
        <div className="comments-count-outer-container">
          <div className="comments-count-container">
            <p className="comments-count">0</p>
          </div>
          <p className="comments-text">Comments</p>
        </div>

        <ul className="comments-container">
          {commentsList.map(eachComment => (
            <CommentItem commentDetails={eachComment} key={eachComment.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
