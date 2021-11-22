import React from "react";
import "./PurchaseList.css";
import Purchase from "./Purchase";
const PurchaseList = () => {
  return (
    <div className="productList">
      <div className="productlistHeader">
        <div>
          {" "}
          <h1>Purchase List</h1>
        </div>
        <div className="ProductlistAddproductBtn"> + Add Purchase</div>
      </div>
      <div className="tableWrapper">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Supplier</th>
              <th>Bill #</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Bill Status</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            <Purchase/>
            <Purchase/>
            <Purchase/>
            <Purchase/>
            <Purchase/>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseList;
