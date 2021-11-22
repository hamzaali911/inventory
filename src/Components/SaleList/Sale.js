import React from "react";
import ModelBox from "../ModelBox/ModelBox";
const Sale = () => {
  return (
    <tr>
      <td>01 jan 2020</td>
      <td>customer</td>
      <td>Rs2500.00</td>
      <td>Rs1000.00</td>
      <td>pending</td>
      <td>
        <ModelBox/>
        <span><i id="icon" className="fas fa-trash-alt"></i></span>
      </td>
    </tr>
  );
};

export default Sale;
