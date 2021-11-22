import React, { useState } from "react";
import "./ModelBox.css";
const ModelBox = () => {
  const [display, setDisplay] = useState("none");
  var modal = document.getElementById("myModal");

  // When the user clicks the button, open the modal
  const toggleModelOpen = () => {
    setDisplay("block");
  };

  // When the user clicks on <span> (x), close the modal
  const toggleModelClose = () => {
    setDisplay("none");
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      setDisplay("none");
    }
  };
  return (
    <span>
      <i
        id="icon"
        onClick={() => toggleModelOpen()}
        className="fas fa-pencil-alt"
      ></i>
      <div id="myModal" class="modal" style={{ display: display }}>
        <div class="modal-content">
          <span class="close" onClick={() => toggleModelClose()}>
            &times;
          </span>
          <div>
              <h2>Edit Product</h2>
              <div className="editForm">
                  <div>
                      <label htmlFor="name">Name:</label>
                      <input id='name' type="text" />
                  </div>
                  <div>
                      <label htmlFor="price">Price:</label>
                      <input id="price" type="number" />
                  </div>
                  <div>
                      <label htmlFor="cost">Cost:</label>
                      <input cost='cost' type="number" />
                  </div>
                  <div>
                      <label htmlFor="reason">Reason For Quantity Update:</label>
                      <input cost='reason' type="text" />
                  </div>
                  <div>
                      <label htmlFor="quantity">Quantity:</label>
                      <input id='quantity' type="number" />
                  </div>
                  <div>
                      <button id='quantity' type="button" placeholder="Submit">Submit</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default ModelBox;
