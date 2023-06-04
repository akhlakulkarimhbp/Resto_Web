import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";

export default function CartScreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;

  //increament decreament
  const dispatch = useDispatch();

  //function total
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <div>
      <div className="justify-content-center">
        <div>
          <h2 style={{ fontSize: "30px" }}>My Cart</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container" style={{ marginLeft: "280px" }}>
                <div className="m-1 w-40">
                  <img src={item.image} style={{ height: "150px" }} alt="" />
                </div>
                <div className="text-start m-4 w-90">
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price : {item.quantity} * {item.prices[0][item.varient]} ={" "}
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity :</h1>&nbsp;
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  ></i>
                  &nbsp;
                  <b>{item.quantity}</b>&nbsp;
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  ></i>
                  <hr />
                </div>
                <div className="m-5 w-40">
                  <i
                    className="fa fa-trash mt-2"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
          <div className="w-100">
            <h2 style={{ fontSize: 30, marginRight: 180 }}>
              TOTAL: {subtotal}
            </h2>
            <Checkout subtotal={subtotal} />
          </div>
        </div>
      </div>
    </div>
  );
}
