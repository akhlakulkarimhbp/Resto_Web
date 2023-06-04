import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

export default function Product({ product }) {
  //open modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //get product props
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");

  //function addtocart
  const dispatch = useDispatch()
  function addtocart(){
    dispatch(addToCart(product, quantity,varient))
  }

  return (
    
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      
      <div onClick={handleShow} >
        <h1>{product.name}</h1>
        <img
          src={product.image}
          className="img-fluid"
          alt=""
          style={{ height: "200px", width: "200px" }}
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varient</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              console.log(varient);
              setVarient(e.target.value);
            }}
          >
            {product.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <p>{product.prices[0].varient}</p>
          <h1>Price: {product.prices[0][varient] * quantity}</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn m-2" onClick={addtocart}>Add to Cart</button>
        </div>
      </div>

      <Modal className="modal-md" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          <img
            src={product.image}
            className="img-fluid"
            style={{ height: "200px" }}
            alt=""
          />
          <p>{product.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
