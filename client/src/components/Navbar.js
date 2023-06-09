/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector  } from "react-redux";
import { logoutUser } from "../actions/userAction";


export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer)
  const userstate = useSelector(state => state.loginUserReducer)
  
  const { currentUser } = userstate
  const dispatch = useDispatch();

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            PIZZAHAT
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
              {currentUser ? (
                <div className="dropdown mt-2">
                <a style={{color: 'black'}} className="dropdown-toggle" href="/" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  {currentUser.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link to={`/profil/${currentUser._id}`} className="dropdown-item">Profil</Link>
                  <a className="dropdown-item" href="/orders">Orders</a>
                  <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}>Logout</a>
                </div>
              </div>
              ) : (
                <li className="nav-item ">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              )}
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart {cartstate.cartItems.length}
                </a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="/not-found">
                  Not Found
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
