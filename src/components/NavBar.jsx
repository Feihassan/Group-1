import { Link } from "react-router";

 function NavBar(){

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between" >
      <h1 className="text-2xl font-bold text-blue-600">Dream ApartMent Finder</h1>
      <button
        className="sm:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <ul className="flex space-x-6 text-gray-700 font-medium" >
        <li><Link to="/"className="hover:text-blue-500 transition" >Home</Link></li>
        <li><Link to="/listings" className="hover:text-blue-500 transition" >Listing</Link></li>
        <li><Link to="/add" className="hover:text-blue-500 transition" >Add Apartment</Link></li>
      </ul>
    </nav>
  )

 }

 export default NavBar;