import "./Newnav.css";
import { Link } from "react-scroll";
import React, { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Helmet>
        <title>Valsco Technology - Navigation</title>
      </Helmet>

      <header>
        <a
          href="#main-menu"
          id="main-menu-toggle"
          className="menu-toggle"
          aria-label="Open main menu"
        >
          <span className="sr-only">Open main menu</span>
          <span className="fa fa-bars" aria-hidden="true"></span>
        </a>
        <img src={require("./logooo.png")} id="tl" alt="Logo" />
        <h1 className="logo">VALSCO TECHNOLOGY</h1>
        <nav id="main-menu" className="main-menu" aria-label="Main menu">
          <a
            href="#main-menu-toggle"
            id="main-menu-close"
            className="menu-close"
            aria-label="Close main menu"
          >
            <span className="sr-only">Close main menu</span>
            <span className="fa fa-close" aria-hidden="true"></span>
          </a>
          <h2 id="main-menu-heading" className="sr-only">
            Main menu
          </h2>
          <div id="lis">
            <ul aria-labelledby="main-menu-heading" id="lis">
              <li>
                <a href="#productspage" className="lisbox">
                  Products
                </a>
              </li>
              <li>
                <a href="#aboutuspage" className="lisbox">
                  About Us
                </a>
              </li>
              <li>
                <NavLink to="/BlogHome" className="lisbox">
                  Blogs
                </NavLink>
              </li>
              <li>
                <a href="#contactuspage" className="lisbox">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <a
          href="#main-menu-toggle"
          className="backdrop"
          tabIndex="-1"
          aria-hidden="true"
          hidden
        ></a>
      </header>
    </>
  );
}
export default App;
