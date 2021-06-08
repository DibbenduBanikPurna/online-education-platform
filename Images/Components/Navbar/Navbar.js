import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Images/T-Logo.png'
const Navbar = () => {
  
    return (
        
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> <img style={{height:"50px"}} src={Logo} alt=""/> </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">


          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all-courses">Courses</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/co-e-learning" tabindex="-1" aria-disabled="true">Corporate E-Learning</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/log-in" tabindex="-1" aria-disabled="true">Log-In</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
       
    );
};

export default Navbar;