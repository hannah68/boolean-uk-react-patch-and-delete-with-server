import { useState } from "react"

function CreateTourPage(props) {
  const { tours, setTours } = props

  const [tourToCreate, setTourToCreate] = useState({
    name: "",
    price: 0,
  })

  console.log({ tourToCreate })

  function handleSubmit(event) {
    event.preventDefault()

    // Redirect to "/" with navigate and useNavigate
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    setTourToCreate({ ...tourToCreate, [name]: value })
  }

  return (
    <form className="form-stack" onSubmit={handleSubmit}>
      <h2>Create a Tour</h2>
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
  )
}

export default CreateTourPage
