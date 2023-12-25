import React from 'react';
import {useState} from "react";

import Header from './component/layout/Header/Header.js';
import {BrowserRouter as Router, Route , Link} from "react-router-dom"
import { BrowserRouter  as Switch } from "react-router-dom";
import Footer from './component/layout/Footer/Footer';
import WebFont from 'webfontloader';

import Home from './component/Home/Home.js';
import About from './component/About/About';
// import Product from './component/Home/Product.js';

function App() {
  // React.useEffect(()=>{

  //   WebFont.load({
  //   google:{
  //   families:["Roboto ","Droid Sans","Chilanka"],
  //   },
  //   });
  //   },[]);
  return (
  
    <>

    

{/* <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
         
        </Switch>
      </div>
    </Router> */}
    {/* <Router>
      <Route path="/" exact component={About} />
    </Router> */}
      {/* <Router>
    <Route path="/" exact component={Home} />
  </Router> */}
    {/* let routes = (
  <div>
    <Route path="/">
      <Header />
    </Route>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/">
    
    </Route>
    <Route path="/">
      <Footer />
    </Route>
  </div> */}
{/* ///////////////////////////////////////// */}
    
    <Router>
    < Header />
    <Home />
    {/* <Product /> */}
    < Footer />
    </Router>
    {/* ///////////////// */}
     {/* <Router>
        <Header />

       
          <Switch>
          <Route exact path="/" component={Home} />
          
          </Switch>
      
        <Footer />
      </Router> */}

    
    </>
    
  );
}



export default App;
