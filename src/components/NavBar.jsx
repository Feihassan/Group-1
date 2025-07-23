import { Link } from "react-router";

 function NavBar(){

  return (
    <nav>
      <h1>Dream ApartMent Finder</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/listings">Listing</Link></li>
        <li><Link to="/ add">Add Apartment</Link></li>
      </ul>
    </nav>
  )

 }

 export default NavBar;