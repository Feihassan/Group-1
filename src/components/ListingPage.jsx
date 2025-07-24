import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // for reading search query from URL
import ApartmentCard from "./ApartmentCard";

function ListingPage() {
  const [apartments, setApartments] = useState([]);
  const location = useLocation(); // gives access to current URL

  // Get the ?search=something from the URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // Fetch apartments once when component mounts or searchQuery changes
  useEffect(() => {
    fetch("https://json-server-backend-dvxy.onrender.com/apartments")
      .then((res) => res.json())
      .then((data) => {
        // If there's a search query, filter apartments based on location
        const filtered = data.filter((apt) =>
          apt.location.toLowerCase().includes(searchQuery)
        );
        setApartments(filtered);
      })
      .catch((err) => console.error("Error fetching apartments:", err));
  }, [searchQuery]);

  // When user clicks "Book", update backend and update UI without page reload
  function handleBook(id) {
    fetch(`https://json-server-backend-dvxy.onrender.com/apartments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ booked: true })
    })
      .then((res) => res.json())
      .then((updated) => {
        // Update the list with the newly booked apartment
        const updatedList = apartments.map((apt) =>
          apt.id === updated.id ? updated : apt
        );
        setApartments(updatedList);
      })
      .catch((err) => console.error("Error booking apartment:", err));
  }

  return (

    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        {searchQuery
          ? `Results for "${searchQuery}"`
          : "All Apartments"}
      </h2>
      {/* If there are apartments, show them. Otherwise, show fallback text */}
      {apartments.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
          {apartments.map((apt) => (
            <ApartmentCard
              key={apt.id}
              apartment={apt}
              onBook={handleBook}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg mt-12">
          No apartments found for that search.
        </p>
      )}

    </div>
  );
}

export default ListingPage;
