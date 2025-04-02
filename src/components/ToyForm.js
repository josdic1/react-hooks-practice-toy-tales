import { useState } from 'react';

function ToyForm({ handleNewToy }) {

const [formData, setFormData ] = useState({
  name: "",
  image: "",
  likes: 0
})

const onSubmit = (e) => {
  e.preventDefault()
  const newToy = formData
  handleNewToy(newToy)
  clearForm()
}

const clearForm = () => {
  setFormData({
    name: "",
    image: "",
    likes: 0
  })
}

const onFormChange = (e) => {
  const {name, value} = e.target
  setFormData(prevData => ({
    ...prevData,
    [name]: value
  }))
}


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={onSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onFormChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={onFormChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
