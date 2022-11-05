import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header>
      <div>
        <h3>"Multi-page app with react"</h3>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
