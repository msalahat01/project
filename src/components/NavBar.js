import React, { useState } from "react";
import { NavLink , Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  const scrollToTop1 = () => {
    window.scrollTo({ top: 1750, left: 0 });
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          <NavLink exact to="/" className="nav-logo" onClick={scrollToTop}>  
            <img src={require("/home/al-salahat/Downloads/project/src/image/12.png")}
            width={150} height={72} alt="logo"/>

          </NavLink>
        

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={scrollToTop}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
            <HashLink  to={"/#li1"}
               className="nav-links"
               onClick={handleClick}
               >
                Services
                </HashLink>
            </li>

            <li className="nav-item">
               <HashLink  to={"/#li2"}
               className="nav-links"
               >
                Partnerts
                </HashLink>
            </li>

            <li className="nav-item">
        
              <HashLink  to={"/#ab"}
              className="nav-links"
              >
                About
              </HashLink>
              
            </li>

            

            <li className="nav-item">
              <HashLink  to={"/#re1"}
              className="nav-links"
              >
                Contact Us
              </HashLink>
              
            </li>
          </ul>


          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

        </div>
      </nav>

    </>
  );
}

export default NavBar;