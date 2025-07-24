import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/listings?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="bg-blue-50 p-8 rounded-2xl shadow-md max-w-3xl mx-auto text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Welcome to Dream Apartment Finder
      </h1>
      <p className="text-lg leading-relaxed text-justify mb-6">
        
        Browse verified listings, filter by location, and find your next home.
      </p>
      <form
        onSubmit={submitSearch}
        className="flex flex-col sm:flex-row items-center justify-center gap-2"
      >
        <input
          type="text"
          placeholder="City or ZIP code"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-2/3 p-2 border rounded sm:rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded sm:rounded-r-md hover:bg-blue-700"
        >
          Search
          
        </button>
      </form>
    </div>
  );
}


  