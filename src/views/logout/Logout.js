import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CSpinner } from '@coreui/react'

const Logout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // ลบสถานะ login
    localStorage.clear()

    // หน่วงนิดนึงให้ UX ดูเป็นธรรมชาติ
    const timer = setTimeout(() => {
      navigate('/login', { replace: true })
    }, 800)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
      }}
    >
      <CSpinner color="primary" />
      <p>กำลังออกจากระบบ...</p>
    </div>
  )
}

export default Logout
