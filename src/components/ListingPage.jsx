import React, { useEffect, useState } from "react";

function ListingPage() {
  // State to hold list of apartments
  const [apartments, setApartments] = useState([]);

  // Fetch apartments on mount
  useEffect(() => {
    getApartments();
  }, []);

  // Function to fetch apartments from json-server
  function getApartments() {
    fetch("http://localhost:3001/apartments")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.log("Failed to fetch apartments:", err));
  }

  // Function to toggle booked status
  function toggleBooked(id, currentBooked) {
    const updatedStatus = !currentBooked;

    fetch(`http://localhost:3001/apartments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ booked: updatedStatus })
    })
      .then((res) => res.json())
      .then((updatedApartment) => {
        // Replace updated apartment in the state
        const updatedList = apartments.map((apt) => {
          if (apt.id === updatedApartment.id) {
            return updatedApartment;
          } else {
            return apt;
          }
        });
        setApartments(updatedList);
      })
      .catch((err) => console.log("Failed to update booked status:", err));
  }

  return (
    <div>
      <h2>All Apartments</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {apartments.map((apt) => (
          <div
            key={apt.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "250px"
            }}
          >
            <img
              src={apt.image}
              alt={apt.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{apt.title}</h3>
            <p><strong>Location:</strong> {apt.location}</p>
            <p><strong>Price:</strong> KES {apt.price}</p>
            <p>{apt.description}</p>
            <button onClick={() => toggleBooked(apt.id, apt.booked)}>
              {apt.booked ? "Booked ✅" : "Book"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ListingPage;
