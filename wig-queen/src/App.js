import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
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
import Aboutpage from './components/pages/aboutPage';
import Shoppage from './components/pages/shopPage';
import Loginpage from './components/pages/loginPage';
import Tutorialspage from './components/pages/tutorialsPage';

import './Assets/scss/default.css';

// includes



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />

         
            <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/Aboutpage' component={Aboutpage} />
            <Route exact path='/Loginpage' component={Loginpage} />
            <Route exact path='/Shoppage' component={Shoppage} />
            <Route exact path='/Tutorialspage' component={Tutorialspage} />
            </Switch>

        <Footer />
        
      </div>
      </Router>
    );
  }
}

export default App;
