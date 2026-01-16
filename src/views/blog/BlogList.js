// import { CCard, CCardBody, CCardImage, CCardTitle, CButton } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getBlogs } from '../../services/BlogService'

const BlogList = () => {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs()
        setBlogs(data)
      } catch (err) {
        setError('Failed to load blogs')
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  // 5️⃣ handle loading
  if (loading) {
    return <p>Loading blogs...</p>
  }

  // 6️⃣ handle error
  if (error) {
    return <p>{error}</p>
  }

  // 7️⃣ handle empty
  if (blogs.length === 0) {
    return <p>No blogs found</p>
  }
  
  return (
    <div className="row">
      {blogs.map((blog) => (
        <div key={blog.slug} className="col-md-4">
          <div
            className="card mb-4"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/blogs/${blog.slug}`)}
          >
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.excerpt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogList
