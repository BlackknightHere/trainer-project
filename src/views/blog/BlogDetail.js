import { useParams } from 'react-router-dom'
import blogs from './mockBlogs'

const BlogDetail = () => {
  const { id } = useParams()
  const blog = blogs.find((b) => b.id === id)

  if (!blog) return <p>Blog not found</p>

  return (
    <div>
      <img
        src={blog.image}
        alt={blog.title}
        style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }}
      />
      <small>{blog.date}</small>
      <h1>{blog.title}</h1>
      <p style={{ whiteSpace: 'pre-line' }}>{blog.content}</p>
    </div>
  )
}

export default BlogDetail
