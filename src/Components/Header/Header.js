import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
const Header = ({loginAuth}) => {
  const [width, setWidth] = useState("0px");
  const openNav = () => {
    setWidth("250px");
    console.log(width);
  };

  const closeNav = () => {
    setWidth("0px");
    console.log(width);
  };
  const authenticator = () => {
    loginAuth(false);
};
  return (
    <div className="header">
      <div id="mySidenav" className="sidenav" style={{ width: width }}>
        <div className="closebtn" onClick={() => closeNav()}>
          <div className="navIcon" onClick={() => openNav()}>
            <div />
            <div />
            <div />
          </div>
        </div>
        <Link to="/"><span>Home</span></Link>
        <Link to="/sales"><span>Sales</span></Link>
        <Link to="/purchases"><span>Purchases</span></Link>
        <Link to="products"><span>Products</span></Link>
        <span onClick={authenticator}>logout</span>
      </div>
      <div className="navIcon" onClick={() => openNav()}>
        <div />
        <div />
        <div />
      </div>
      <div className="headerRightOptions">
        <div className="newOrderBtn">+ New Order</div>
        <div className="headerAccount"><i class="fas fa-user"></i></div>
      </div>
    </div>
  );
};

export default Header;
