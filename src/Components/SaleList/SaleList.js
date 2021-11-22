import React from "react";
import "./SaleList.css";
import Sale from "./Sale";
const SaleList = () => {
  return (
    <div className="productList">
      <div className="productlistHeader">
        <div>
          {" "}
          <h1>Sale List</h1>
        </div>
        <div className="ProductlistAddproductBtn"> + Add Sale</div>
      </div>
      <div className="tableWrapper">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <Sale/>
            <Sale/>
            <Sale/>
            <Sale/>
            <Sale/>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SaleList;
