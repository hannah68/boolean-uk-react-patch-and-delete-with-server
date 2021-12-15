import { Route, Routes } from "react-router"

import AdminRouter from "./pages/admin/Router"
import UserRouter from "./pages/user/Router"

import { LocalRoutes } from "./config.js"

import "./styles.css"

function App() {
  return (
    <Routes>
      <Route path={`${LocalRoutes.home}*`} element={<UserRouter />} />
      <Route path={`${LocalRoutes.admin}/*`} element={<AdminRouter />} />
    </Routes>
  )
}

export default App
