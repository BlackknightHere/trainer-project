import { CCard, CCardBody, CCardImage, CCardTitle, CButton } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import blogs from './mockBlogs'

const BlogList = () => {
  const navigate = useNavigate()

  return (
    <div className="row">
      {blogs.map((blog) => (
        <div className="col-md-4 mb-4" key={blog.id}>
          <CCard>
            <CCardImage src={blog.image} />
            <CCardBody>
              <small>{blog.date}</small>
              <CCardTitle>{blog.title}</CCardTitle>
              <p>{blog.excerpt}</p>
              <CButton variant='outline' color='primary'
                onClick={() => navigate(`/blogs/${blog.id}`)}
              >
                Read More
              </CButton>
            </CCardBody>
          </CCard>
        </div>
      ))}
    </div>
  )
}

export default BlogList
