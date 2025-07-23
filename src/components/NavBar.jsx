import { Link } from "react-router";

 function NavBar(){

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between" >
      <h1 className="text-2xl font-bold text-blue-600">Dream ApartMent Finder</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium" >
        <li><Link to="/"className="hover:text-blue-500 transition" >Home</Link></li>
        <li><Link to="/listings" className="hover:text-blue-500 transition" >Listing</Link></li>
        <li><Link to="/ add" className="hover:text-blue-500 transition" >Add Apartment</Link></li>
      </ul>
    </nav>
  )

 }

 export default NavBar;