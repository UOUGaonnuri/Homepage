import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import ActivitiesPage from './pages/ActivitiesPage'
import ProjectsPage from './pages/ProjectsPage'
import RecruitmentPage from './pages/RecruitmentPage'
import QnAPage from './pages/QnAPage'

function App() {
  return (
    <Layout>
      <div id="home">
        <HomePage />
      </div>
      <div id="activities">
        <ActivitiesPage />
      </div>
      <div id="projects">
        <ProjectsPage />
      </div>
      <div id="recruitment">
        <RecruitmentPage />
      </div>
      <div id="qna">
        <QnAPage />
      </div>
    </Layout>
  )
}

export default App