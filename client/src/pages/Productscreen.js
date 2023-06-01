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


  return (
    <div className="container">
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
