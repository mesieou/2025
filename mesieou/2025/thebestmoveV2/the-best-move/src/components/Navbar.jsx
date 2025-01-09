import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img
          src="/src/assets/Marketing/logo/Marketing/logo/white Logo and title v2 (2).svg"
          alt=""
          className="logo"
        />
      </Link>
      <ul className="nav-links">
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <Link to="/">
        <button>Quote Now</button>
      </Link>
    </nav>
  );
}
