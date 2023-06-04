/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


export default function Navbar() {

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            ADMIN PIZZAHAT
          </a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                   
             
                <div className="dropdown mt-2">
                <a style={{color: 'black'}} className="dropdown-toggle" href="/" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Orders</a>
                  <a className="dropdown-item" href="#" >Logout</a>
                </div>
              </div>
        
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>

                <li className="nav-item ">
                  <a className="nav-link" href="/produk">
                    Product
                  </a>
                </li>   
            
            
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
