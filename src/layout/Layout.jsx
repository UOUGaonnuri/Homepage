import { Outlet } from 'react-router-dom'
import Header from "./Header"

const Layout = () => {
  return (
    <div>
      <Header />
      <main className='pt-[70px]'>
          <Outlet />
      </main>
    </div>
  )
}

export default Layout