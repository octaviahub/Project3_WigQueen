import React, { Component } from 'react';


class Header extends Component {

  render() {
    return (
      <header>

         <div className="logo">

            WigQueen Logo

         </div>

          <nav>
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
              <li>
                <a href="#">About WigQueen</a>
              </li>
            </ul>
          </nav>

      </header>
    );
  }
}

export default Header;
