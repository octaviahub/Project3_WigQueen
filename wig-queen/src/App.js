import React, { Component } from 'react';

// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Link
// } from 'react-router-dom';


// components

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Carousel from './components/carouselComponent/carousel.js';

import './Assets/scss/default.css';

// includes



class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

          <Carousel />

        	<Homepage />

        	
        

        <Footer />
        
      </div>
    );
  }
}

export default App;
