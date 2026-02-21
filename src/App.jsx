import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import ActivitiesPage from './pages/ActivitiesPage'
import ProjectsPage from './pages/ProjectsPage'
import RecruitmentPage from './pages/RecruitmentPage'
import QnAPage from './pages/QnAPage'
import NotFoundPage from './pages/NotFoundPage'


const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'activities', element: <ActivitiesPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'recruitment', element: <RecruitmentPage /> },
      { path: 'qna', element: <QnAPage /> },
    ],
  },
]

const router = createBrowserRouter(routes)

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App