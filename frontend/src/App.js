import React from 'react';

import Header from './component/layout/Header';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Footer from './component/layout/Footer/Footer';
// import WebFont from 'webfontloader';

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
    
    <Router>
    < Header />
    <Home />
    < Footer />
    </Router>
    
    </>
    
  );
}

export default App;
