import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-[70px]">
          {children}
      </main>
    </>
  )
}

export default Layout