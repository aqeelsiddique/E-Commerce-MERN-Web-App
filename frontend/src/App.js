import React from 'react';

import Header from './component/layout/Header';
import {BrowserRouter as Router, Route} from "react-router-dom"
import { BrowserRouter  as Switch } from "react-router-dom";
import Footer from './component/layout/Footer/Footer';
import WebFont from 'webfontloader';

import Home from './component/Home/Home.js';

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

    
    <Router>
    < Header />
    <Home />

    {/* <Switch>
    <Route exact path="/sad">
      <loader />
    </Route>
      </Switch> */}
    < Footer />
    </Router>

    
    </>
    
  );
}

export default App;
