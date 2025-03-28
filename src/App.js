import React from 'react';
import Header from './components/Header';
import Showcase from './components/Showcsae';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route, Routes }  from 'react-router-dom';
import Product from "./components/product";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>

       <div className="App">

          <Header/>
          
         {/* Router items */}
         
          <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/product" element={<Product />} />
          <Route path="/About" element={<About />}  />
          <Route path="/contact" element={<Contact />}  />

            
          </Routes> 


          <Footer/>

    </div>
    </Router>
  );
}

export default App;
