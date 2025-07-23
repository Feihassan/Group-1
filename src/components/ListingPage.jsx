import React, { useEffect, useState } from "react";
import ApartmentCard from "./ApartmentCard";

function ListingPage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/apartments")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.log(err));
  }, []);

  function handleBook(id) {
    fetch(`http://localhost:3001/apartments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ booked: true })
    })
      .then((res) => res.json())
      .then((updated) => {
        const updatedList = apartments.map((apt) =>
          apt.id === updated.id ? updated : apt
        );
        setApartments(updatedList);
      });
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        All Apartments
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {apartments.map((apt) => (
          <ApartmentCards key={apt.id} apartment={apt} onBook={handleBook} />
        ))}
      </div>
    </div>
  );
} 

export default ListingPage;
