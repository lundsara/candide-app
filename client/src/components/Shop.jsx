import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Shop extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="shop">
      <div id="mast">
         <img id="title"src="https://images.bigcartel.com/theme_images/28636550/logo.png?auto=format&fit=max&h=250&w=1300"/>

      </div>
      <nav>
        <ul>
      <li id="storelink"><a href="http://electrician-gary-84651.bitballoon.com//">Store</a></li>
      <li id="aboutlink"><Link to="/about">About</Link></li>
      <li id="contactlink"><Link to="/contact">Contact</Link></li>
      <li id="faqlink"><Link to="/info">FAQ</Link></li>
        </ul>
      </nav>
      <div id="details">
      <p class="sub">Upcoming Collection </p>

      </div>
      <div className="products">
        <div>
          { this.props.showProductsOnPage()}
        </div>

      </div>
    </div>
    );
  };
}

export default Shop;
