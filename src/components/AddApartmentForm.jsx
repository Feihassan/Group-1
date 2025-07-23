import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddApartmentForm() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    image: "",
    description: ""
  });

  const navigate = useNavigate();

  // update formData when inputs change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // submit form
  function handleSubmit(e) {
    e.preventDefault();

    const newApartment = {
      ...formData,
      price: parseInt(formData.price, 10), // ensure price is a number
      booked: false
    };

    fetch("http://localhost:3000/apartments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newApartment)
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/listings"); // redirect to listings page
      })
      .catch((err) => console.error("Error adding apartment:", err));
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Apartment</h2>

      <label className="block mb-2">
        Title:
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Price:
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          type="number"
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Location:
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Image URL:
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-4">
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Apartment
      </button>
    </form>
  );
}

export default AddApartmentForm;
