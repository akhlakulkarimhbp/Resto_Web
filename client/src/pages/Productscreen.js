import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

export default function Productscreen() {
  //get product
  const [products, setProducts] = useState([]);
  const loadProducts = () => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadProducts();
  }, []);

  const filterItem = (categItem) => {
    const updatedItems = products.filter((curElem)=> {
      return curElem.category === categItem;
    })
    setProducts(updatedItems)
  }


  return (
    <div className="container">
      <div
        style={{ width: "30%" }}
        className=" mb-3 shadow-lg bg-white rounded"
      >
        <div>
          <button onClick={()=> setProducts(products)} type="button" className=" m-2 btn-primary">
            ALL
          </button>
          <button onClick={()=> filterItem('veg')} type="button" className="m-1 btn-secondary">
            VEG
          </button>
          <button onClick={()=> filterItem('nonveg')} type="button" className="m-2 btn-success">
            NON VEG
          </button>
        </div>
      </div>

      <div className="row justify-content-center">
        {products.map((product) => {
          return (
            <div className="col-md-4 mt-2" key={product._id}>
              <div>
                <Product product={product} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
