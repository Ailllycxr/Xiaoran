import { Link } from 'react-router-dom';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link key={1} className="nav-link text-light" to="/"> 
            Home
            </Link>,


            <Link key={3} className="nav-link text-light" to="/contact">
            Contact
            </Link>, 

            <Link key={4} className="nav-link text-light" to="/error">
            Error
            </Link>,

            <Link key={5} className="nav-link text-light" to="/porfolio">
            Porfolio
            </Link>,     
        </li>
    </ul>
  );
}