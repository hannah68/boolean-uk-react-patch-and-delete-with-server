import { useEffect, useState } from "react"

import { fetchData } from "../../../../fetch.js"

import { APIEndpoints } from "../../../../config.js"

function TicketsList() {
  const [tickets, setTickets] = useState([])

  const setData = data => setTickets(data)

  useEffect(() => {

    const fetchDataParams = {
      url: APIEndpoints.tickets,
      cb: setData
    }

    fetchData(fetchDataParams)

  }, [])

  return (
    <>
      <h3>Tickets</h3>
      <ul>
        {tickets.map((ticket, index) => {
          const { email, quantity, date, tour } = ticket

          return (
            <li key={index}>
              <h3>{tour.name}</h3>
              <p>Email: {email}</p>
              <p>Quantity: {quantity}</p>
              <p>Date: {date}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TicketsList
