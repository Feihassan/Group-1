import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ListingPage from './components/ListingPage';
import AddApartmentForm from './components/AddApartmentForm';


function App() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/apartments')
      .then(res => res.json())
      .then(data => setApartments(data));
  }, []);

  function addApartment(newApartment) {
    setApartments([...apartments, newApartment]);
  }

  function handleBook(id) {
    setApartments(prev =>
      prev.map(apartment =>
        apartment.id === id ? { ...apartment, booked: true } : apartment
      )
    );
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/listings"
          element={<ListingPage apartments={apartments} onBook={handleBook} />}
        />
        <Route
          path="/add"
          element={<AddApartmentForm onAddApartment={addApartment} />}
        />
      </Routes>
    </div>
  );
}

export default App;
