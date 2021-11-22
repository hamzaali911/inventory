import React from "react";
import ModelBox from "../ModelBox/ModelBox";
const Product = () => {
  return (
    <tr>
      <td>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSx-3A17Gh9p_Hi-z7cqujE-XwVAA8e-3IZIddUGAkBnQlG_UcN21bc6OxJNx6WDRpw9g&usqp=CAU" alt="" />
      </td>
      <td>screw</td>
      <td>Rs25.00</td>
      <td>Rs10.00</td>
      <td>100.0</td>
      <td>
        <ModelBox/>
        <span><i id="icon" className="fas fa-trash-alt"></i></span>
      </td>
    </tr>
  );
};

export default Product;
