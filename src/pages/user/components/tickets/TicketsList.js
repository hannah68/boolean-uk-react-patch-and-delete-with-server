import { useEffect, useState } from "react"

import { fetchData } from "../../../../fetch.js"

import { APIEndpoints } from "../../../../config.js"

function TicketsList (props) {
  const { tickets } = props

  console.log('tickets', tickets)

  return (
    <>
      <h3>Tickets</h3>
      <ul>
        {tickets.map((ticket, index) => {
          const { email, quantity, date, tour, id } = ticket

          console.log('my ticket info', email, quantity, date, tour)

          return (
            <li key={index}>
              <h3>{tour.name}</h3>
              <p>Email: {email}</p>
              <p>Quantity: {quantity}</p>
              <p>Date: {date}</p>
              <p>Ref: {id}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TicketsList
