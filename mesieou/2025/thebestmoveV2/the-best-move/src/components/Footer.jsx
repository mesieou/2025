import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/">
          <img
            src="/src/assets/Marketing/logo/Marketing/logo/dark Logo and title.svg"
            alt="Company Logo"
            className="footer-logo"
          />
        </Link>
        <ul className="footer-links">
          <li><HashLink to="#services">Services</HashLink></li>
          <li><HashLink to="#pricing">Pricing</HashLink></li>
          <li><HashLink to="#contact">Contact</HashLink></li>
        </ul>
        <p className="copyright">
          &copy; {new Date().getFullYear()} The Best Move. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
