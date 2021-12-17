import ToursList from "../../components/ToursList"

import { LocalRoutes } from "../../../config.js"

function HomePage (props) {
  const { tours } = props
  const path = LocalRoutes.toursBook
  const pathText = 'Book Tickets'

  return (
    <ToursList tours={tours} path={path} pathText={pathText}/>
  )
}

export default HomePage
