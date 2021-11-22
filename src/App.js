import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import SaleList from "./Components/SaleList/SaleList";
import PurchaseList from "./Components/PurchaseList/PurchaseList";
import Login from "./Components/Login/Login";
function App() {


  


const [auth, setAuth] = useState(false)
const loginAuth=(val)=>{
  setAuth(val);
  console.log(auth)
}
  return (
    <Router>
      {!auth ? (
        <Login loginAuth={loginAuth} />
      ) : (
      <>
        <Header loginAuth={loginAuth} />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/Sales" element={<SaleList />} />
          <Route exact path="/purchases" element={<PurchaseList />} />
        </Routes>
      </>
      )}
    </Router>
    // <>
    //   <ProductList />
    //   <SaleList />
    //   <PurchaseList />
    // </>
  );
}

export default App;
