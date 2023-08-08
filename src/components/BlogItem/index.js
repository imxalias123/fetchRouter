// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="main-img" />
        <div>
          <p className="topic">{topic}</p>
          <p className="title">{title}</p>
          <div className="user-info">
            <img src={avatarUrl} alt={`user${id}`} className="user-img" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
