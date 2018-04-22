import React, { Component } from 'react';
import './header.css'


class Header extends Component {


  render() {
    return (
      <header>

         <div className="logo">

            WigQueen

         </div>

          <nav className="first">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li className="last">
                <a href="#">About WigQueen</a>
              </li>
            </ul>
          </nav>

      </header>
    );
  }
}

export default Header;
