// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(each => ({
      author: each.author,
      imageUrl: each.image_url,
      id: each.id,
      avatarUrl: each.avatar_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div className="blogList-container">
        {isLoading ? (
          <Loader type="TailSpin" color="00BFFF" height={50} width={50} />
        ) : (
          blogList.map(eachItem => (
            <BlogItem blogData={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}
export default BlogList
