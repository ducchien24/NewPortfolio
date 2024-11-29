import { Outlet } from "react-router-dom"
import AppHeader from "./components/layout/app.header"
import AppFooter from "./components/layout/app.footer"
import { ToastContainer } from "react-toastify";
function Layout() {

  return (
    <div>
      <AppHeader />
      <Outlet />
      <AppFooter />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  )
}

export default Layout