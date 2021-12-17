import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { fetchData } from "../../../../fetch.js"

import { LocalRoutes, APIEndpoints } from "../../../../config.js"

function CreateTourPage(props) {
  const [tourToCreate, setTourToCreate] = useState({
    name: "",
    price: 0,
  })

  const [submitted, setSubmitted] = useState(false)

  // console.log('in tours create', { tourToCreate })

  const navigate = useNavigate()

  useEffect(() => {

    if (submitted) {

      const fetchOptions = {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(tourToCreate)
      }

      const fetchDataParams = {
        url: APIEndpoints.tours,
        options: fetchOptions,
        cb: data => navigate(LocalRoutes.admin)
      }

      fetchData(fetchDataParams)
      setSubmitted(false);
    }

  }, [navigate, tourToCreate, submitted])

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    setTourToCreate({ ...tourToCreate, [name]: value })
  }

  return (
    <>
      <h3>Create a Tour</h3>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={tourToCreate.name}
        />
        <label htmlFor="price">price</label>
        <input
          type="text"
          id="price"
          name="price"
          onChange={handleChange}
          value={tourToCreate.price}
        />
        <button type="submit">Create Tour</button>
      </form>
    </>
  )
}

export default CreateTourPage
