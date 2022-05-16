import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/services" className="link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/account" className="link">
            Account
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Nav;
