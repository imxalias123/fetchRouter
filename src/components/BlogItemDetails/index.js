// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      topic: data.topic,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      author: data.author,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {title, imageUrl, avatarUrl, content, author} = blogData
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="00BFFF" height={50} width={50} />
        ) : (
          <div className="blogData-container">
            <h1 className="blog-title">{title}</h1>
            <div className="blog-user">
              <img src={avatarUrl} alt={title} className="user-img" />
              <p className="blog-author">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="main-img" />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
