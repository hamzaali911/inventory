import React from "react";
import "./ProductList.css";
import Product from "./Product";
const ProductList = () => {
  return (
    <div className="productList">
      <div className="productlistHeader">
        <div>
          {" "}
          <h1>Product List</h1>
        </div>
        <div className="ProductlistAddproductBtn"> + Add Product</div>
      </div>
      <div className="tableWrapper">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Cost</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
