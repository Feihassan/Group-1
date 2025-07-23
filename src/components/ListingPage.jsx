import React, { useEffect, useState } from "react";

function ListingPage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    getApartments();
  }, []);

  function getApartments() {
    fetch("http://localhost:3001/apartments")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.log("Failed to fetch apartments:", err));
  }

  return (
    <div>
      <h2>All Apartments</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {apartments.map((apt) => (
          <div key={apt.id}>{apt.title}</div>
        ))}
      </div>
    </div>
  );
}

export default ListingPage;
