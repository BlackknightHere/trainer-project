import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Blogs = React.lazy(() => import('./views/blog/Blog'))
const BlogDetail = React.lazy(() => import('./views/blog/BlogDetail'))
const Users = React.lazy(() => import('./views/user/Users'))
const Logout = React.lazy(() => import('./views/logout/Logout'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/users', name: 'Users', element: Users },
  { path: '/blogs', name: 'Blogs', element: Blogs },
  { path: '/blogs/:id', name: 'Blog Detail', element: BlogDetail },
  { path: '/logout', name: 'Logout', element: Logout },
]

export default routes
