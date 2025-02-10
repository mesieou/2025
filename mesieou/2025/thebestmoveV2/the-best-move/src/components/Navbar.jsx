import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
          <HashLink to="#services">Services
          </HashLink>
        </li>
        <li>
          <HashLink to="#pricing">Pricing
          </HashLink>
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
