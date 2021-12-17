import { useEffect, useState } from "react"

import TicketsTable from "./components/TicketsTable"
import { fetchData } from "../../../../fetch.js"

import { APIEndpoints } from "../../../../config.js"

function TicketsSummary (props) {
  const { tickets } = props

  return (
    <>
      <h3>Tickets Summary</h3>
      <TicketsTable tickets={tickets} />
    </>
  )
}

export default TicketsSummary
