import React from 'react'
import {useSelector} from 'react-redux'

export default function Navbar() {
  const cartstate = useSelector(state=>state.cartReducer)
  return (
    <div className='sticky-top'>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      PIZZAHAT
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item ">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length}</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}