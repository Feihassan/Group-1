// src/components/ApartmentCard.jsx
import React from "react";

function ApartmentCard({ apartment, onBook }) {
  const { id, title, location, price, image, booked } = apartment;

  function handleClick() {
    onBook(id);
  }

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-[1.02] w-full max-w-md mx-auto mb-8">
      <img
        src={image}
        alt={title || "Apartment image"}
        className="w-full h-64 object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{location}</p>
        <p className="text-lg text-green-600 font-bold mt-2">KES {price.toLocaleString()}</p>

        <button
          onClick={handleClick}
          disabled={booked}
          aria-label={booked ? "Apartment already booked" : "Book this apartment"}
          className={`mt-4 w-full py-2 px-4 rounded-md text-white font-medium transition-colors duration-300
            ${
              booked
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            }`}
        >
          {booked ? "Booked" : "Book Apartment"}
        </button>
      </div>
    </div>
  );
}

export default ApartmentCard;
