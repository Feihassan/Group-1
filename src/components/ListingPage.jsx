import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApartmentCard from "./ApartmentCard";

function ListingPage() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Extract search query from URL
  const searchQuery = new URLSearchParams(location.search)
    .get("search")
    ?.toLowerCase() || "";

  // Fetch apartments and apply filter
  useEffect(() => {
    setLoading(true);
    fetch("https://json-server-backend-dvxy.onrender.com/apartments")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((apt) =>
          apt.location.toLowerCase().includes(searchQuery)
        );
        setApartments(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching apartments:", err);
        setLoading(false);
      });
  }, [searchQuery]);

  // Booking handler: update backend + update UI
  const handleBook = (id) => {
    fetch(`https://json-server-backend-dvxy.onrender.com/apartments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ booked: true }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setApartments((prev) =>
          prev.map((apt) => (apt.id === updated.id ? updated : apt))
        );
      })
      .catch((err) => console.error("Error booking apartment:", err));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {searchQuery
          ? `Search results for "${searchQuery}"`
          : "Browse All Apartments"}
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading apartments...</p>
      ) : apartments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} onBook={handleBook} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg mt-16">
          No apartments found. Try searching a different location.
        </p>
      )}
    </section>
  );
}

export default ListingPage;
