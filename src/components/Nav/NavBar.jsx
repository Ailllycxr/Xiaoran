import { Link } from "react-router-dom";
import "../Nav/NavStyle.css";

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <h2>Xiaoran</h2>
          </div>
          <div className="right">
            <ul className="list">
              <li className="listItem">
                <Link key={1} className="nav-link text-light" to="/About">
                  About
                </Link>
              </li>

              <li className="listItem">
                <Link key={5} className="nav-link text-light" to="/Porfolio">
                  Porfolio
                </Link>
              </li>

              <li className="listItem">
                <Link key={4} className="nav-link text-light" to="/Resume">
                  Resume
                </Link>
              </li>

              <li className="listItem">
                <Link key={3} className="nav-link text-light" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
