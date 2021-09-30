
import React, { useState } from "react";
import {Nav,NavDropdown} from 'react-bootstrap'
import "./Navbar.css";


import { NavLink ,useHistory} from "react-router-dom";

function Navbar ()  {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  let user=JSON.parse(localStorage.getItem('user'));
  const history=useHistory();
  function logOut(){
      localStorage.clear();
      history.push('/')
      window.location.reload();
  }
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        <NavLink to="/"><h2>
            <span>C</span>ollge
            <span>Q</span>uora
          </h2></NavLink>
         
          
        </div>

       
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            { localStorage.getItem('user') ?
            <li>
              <NavLink to="/questions">Home</NavLink>
            </li>
            :null}
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            <li>

              { localStorage.getItem('user') ? 
              <Nav>
                <NavDropdown title={user && user.firstName}>
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              :null}
            </li>
            
    
           
            
        
          </ul>
          
        </div>
      </nav>

  
    </>
  );
};

export default Navbar;