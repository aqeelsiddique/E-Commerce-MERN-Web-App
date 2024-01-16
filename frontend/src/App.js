import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/layout/Header/Header.js';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home.js';
import About from './component/About/About';
import ProductDetails from './component/Product/ProductDetail.js';

function App() {
  return (
    <Router>
      <div>
     
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/product/:id" Component={ProductDetails} /> */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
