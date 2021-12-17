import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { fetchData } from "../../../fetch.js"

import { LocalRoutes, APIEndpoints } from "../../../config.js"

function EditTourPage(props) {
  const [tourToEdit, setTourToEdit] = useState({
    name: "",
    price: 0,
  })

  const [edited, setEdited] = useState(false)
  const [deleted, setDeleted] = useState(false)

  // console.log({ tourToEdit })

  const location = useLocation()
  const navigate = useNavigate()

  // console.log('location', location)

  useEffect(() => {

    if ( deleted && location.state) {

      const tourId = location.state.tour.id

      const fetchOptions = {
        method: 'DELETE',
        headers: {
          "Content-Type": 'application/json'
        }
      }

      const fetchDataParams = {
        url: `${APIEndpoints.tours}/${tourId}`,
        options: fetchOptions,
        cb: data => navigate(LocalRoutes.admin)
      }

      fetchData(fetchDataParams)
      setDeleted(false);
    }
  }, [navigate, location.state, deleted])

  useEffect(() => {

    if ( edited && location.state) {

      const tourId = location.state.tour.id

      const fetchOptions = {
        method: 'PATCH',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(tourToEdit)
      }

      const fetchDataParams = {
        url: `${APIEndpoints.tours}/${tourId}`,
        options: fetchOptions,
        cb: () => navigate(LocalRoutes.admin)
      }

      fetchData(fetchDataParams)
      setEdited(false);
    }
  }, [navigate, tourToEdit, location.state, edited])

  function handleSubmit(event) {
    event.preventDefault()
    setEdited(true)
  }

  function handleDelete(event) {
    setDeleted(true)
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    setTourToEdit({ ...tourToEdit, [name]: value })
  }

  return (
    <>
      { location.state && (
        <>
          <h3>{location.state.tour.name}</h3>
          <p>Price: £{location.state.tour.price}</p>
        </>
      )}
      <form className="form-stack" onSubmit={handleSubmit}>
        <h2>Edit a Tour</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={tourToEdit.name ? tourToEdit.name : location.state.tour.name}
        />
        <label htmlFor="price">price</label>
        <input
          type="text"
          id="price"
          name="price"
          onChange={handleChange}
          value={tourToEdit.price}
        />
        <button type="submit">Edit Tour</button>
        <button type="button" onClick={() => handleDelete(tourToEdit)}>
          Delete Tour
        </button>
      </form>
    </>
  )
}

export default EditTourPage
