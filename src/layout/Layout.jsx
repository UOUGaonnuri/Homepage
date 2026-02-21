import { Outlet } from 'react-router-dom'
import Header from "./Header"

const Layout = () => {
  return (
    <>
      <Header />
      <main className='pt-[70px]'>
          <Outlet />
      </main>
    </>
  )
}

export default Layout