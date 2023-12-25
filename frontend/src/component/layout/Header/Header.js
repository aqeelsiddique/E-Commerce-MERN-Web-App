import React, { useState } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch, FaTimes } from "react-icons/fa";

library.add(fas);

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top"> {/* Added 'fixed-top' class */}
        <div className="container py-2">
          {isSearchOpen ? (
            // Show search box when isSearchOpen is true
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <button onClick={toggleSearch}>
                <FaTimes />
              </button>
            </div>
          ) : (
            // Show search icon when isSearchOpen is false
            <Link className="navbar-brand" to="/">
              <FaSearch onClick={toggleSearch} />
            </Link>
          )}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* means */}

          {/* Centered menu */}
          <div className="collapse navbar-collapse align-middle" id="navbarNav">
            <ul className="navbar-nav mx-auto nav_ul align-items-center">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Main
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Product
                </Link>
              </li>
              <Link className="navbar-brand" to="/">
                <img
                  src="/logo.png" // Adjust the path accordingly
                  alt="logo"
                  className="btn1 mx-2"
                  style={{ width: "50px", height: "50px" }} // Adjust the size as needed
                />
              </Link>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Page/Fortfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About{" "}
                </Link>
              </li>           
              
              
              
               </ul>
          </div>

          {/* end */}

          {/* Left-aligned login and shopping cart icons */}
          <div className="d-flex align-items-center">
            <div className="mx-2">
              <button
                type="button"
                className="btn1 mx-1"
                style={{ border: "none", background: "none" }}
              >
                Login
              </button>
            </div>

            <div className="mx-2">
              <img
                src="/shopping-cart.svg" // Adjust the path accordingly
                alt="Shopping Cart"
                className="btn1 mx-2" // Adjust margin as needed
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
