// src/components/ApartmentCard.jsx
import React from "react";

function ApartmentCard({ apartment, onBook }) {
  const { id, title, location, price, image, booked } = apartment;

  function handleClick() {
    onBook(id);
  }

  return (
    <div className="border rounded-lg p-4 shadow-md w-full max-w-md mx-auto mb-6 bg-white">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{location}</p>
      <p className="text-green-600 font-bold">KES {price}</p>
      <button
        onClick={handleClick}
        disabled={booked}
        className={`mt-3 px-4 py-2 rounded ${
          booked ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        {booked ? "Booked" : "Book Apartment"}
      </button>
    </div>
  );
}

export default ApartmentCard;
