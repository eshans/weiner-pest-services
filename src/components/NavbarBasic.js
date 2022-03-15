import '../App.css';
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCaretDown);

const CaretDownIcon = () => {
  return <FontAwesomeIcon icon="caret-down" />;
};

export default function NavbarBasic() {

  const Hamburger = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    /*Navlink keeps class active when selected */
    <div>
      <div className="topnav" id="myTopnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/areas-we-serve">Areas We Serve</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <div className="dropdown">
          <button className="dropbtn">Services
        <CaretDownIcon className="caret" />
          </button>
          <div className="dropdown-content">
            <Link to="/residential-services"> Residential Services</Link>
            <Link to="/commercial-services"> Commercial Services </Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Pests We Treat
        <CaretDownIcon className="caret" />
          </button>
          <div className="dropdown-content">
            <Link to="/ants"> Carpenter Ants</Link>
            <Link to="/mice"> Mice </Link>
            <Link to="/rats"> Rats </Link>
            <Link to="/bedbugs"> Bedbugs </Link>
            <Link to="/roaches"> Roaches </Link>
            <Link to="/carpenter-bees"> Carpenter Bees </Link>
            <Link to="/wasps"> Wasps </Link>
            <Link to="/termites"> Termites </Link>
            <Link to="/stinkbugs"> Stinkbugs </Link>
          </div>
        </div>

        <a href="# " className="icon" onClick={Hamburger}>&#9776;</a>
        {/* // eslint-disable-next-line */}
      </div>
    </div>

  )
}

