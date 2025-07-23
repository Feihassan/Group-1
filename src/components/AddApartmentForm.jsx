import React, { useState } from "react";

function AddApartmentForm() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    image: "",
    description: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form>
      <h2>Add New Apartment</h2>

      <label>
        Title:
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Price:
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          type="number"
        />
      </label>
      <br />

      <label>
        Location:
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Image URL:
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Add Apartment</button>
    </form>
  );
}

export default AddApartmentForm;
