import ToursList from "../../components/ToursList"

import { LocalRoutes } from "../../../config.js"

function Dashboard(props) {
  const { tours } = props

  const path = LocalRoutes.adminToursEdit
  const pathText = 'Edit/Delete Tour'

  return (
    <ToursList tours={tours} path={path} pathText={pathText}/>
  )
}

export default Dashboard
