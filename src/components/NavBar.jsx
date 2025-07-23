import { Link } from "react-router";

 function NavBar(){

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between" >
      <h1 className="text-2xl font-bold text-blue-600">Dream ApartMent Finder</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium" >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/listings">Listing</Link></li>
        <li><Link to="/ add">Add Apartment</Link></li>
      </ul>
    </nav>
  )

 }

 export default NavBar;