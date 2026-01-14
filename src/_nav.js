import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilAccountLogout,
  cibMicroBlog,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'


const _nav = [
    {
    component: CNavItem,
    name: 'Users',
    to: '/Users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
    {
    component: CNavItem,
    name: 'Blogs',
    to: '/blogs',
    icon: <CIcon icon={cibMicroBlog} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'New',
    },
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/logout',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },
]

export default _nav
