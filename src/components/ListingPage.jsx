import React from "react";

function ListingPage() {
  return (
    <div>
      <h2>All Apartments</h2>
    </div>
  );
}
import React, { useState } from "react";

function ListingPage() {
  const [apartments, setApartments] = useState([]);

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



