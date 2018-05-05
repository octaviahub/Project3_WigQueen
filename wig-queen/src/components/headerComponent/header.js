import React, { Component } from 'react';
import {
  Link

} from 'react-router-dom';

import * as routes from '../../../src/server/routes';


class Header extends Component {


  render() {
    return (
      <header>

         <div className="logo">

            WigQueen

            {/* <div className="icon-div">*/}

             {/*<a href="https://twitter.com/WigQueen_" id="twitter" onClick="document.location=this.id+'html'; return false;"><img className="twitterIcon" src={require('../../Assets/images/twitter-icon.png')}/></a>
             // <img className="instagramIcon" src={require('../../Assets/images/instagram-icon.png')}/>
             // <img className="facebookIcon" src={require('../../Assets/images/facebook-icon.png')}/>*/}
            </div>


          <nav className="first">
            <ul>
               <li>
                <Link to ="/Loginpage">Login</Link>
                
                </li>
                <li>
                <Link to ="/">Home</Link>
                </li>
                <li>
                <Link to ="/Shoppage">Shop</Link>
               </li>
               <li>
               <Link to ="/Tutorialspage">Tutorials</Link>
               </li>
                <li className="last">
                <Link to ="/Aboutpage">About</Link>
                </li>
            </ul>
          </nav>

      </header>
    );
  }
}

export default Header;
