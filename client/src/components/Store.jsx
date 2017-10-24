import React, { Component } from 'react';
import {Link} from 'react-router-dom';




class Store extends Component {
  constructor(props){
    super(props);
  }



  render() {
    return (
      <div id="store">
      <div id="mast">
         <img id="title"src="https://images.bigcartel.com/theme_images/28636550/logo.png?auto=format&fit=max&h=250&w=1300"/>

      </div>
      <nav>
        <ul>
      <li id="shoplink"><Link to="/shop"> Upcoming</Link></li>
      <li id="aboutlink"><Link to="/about">About</Link></li>
      <li id="contactlink"><Link to="/contact">Contact</Link></li>
      <li id="faqlink"><Link to="/info">FAQ</Link></li>
        </ul>
      </nav>
      <div class="product" id="product-1"></div>


    </div>
    );
  };
}

export default Store;
