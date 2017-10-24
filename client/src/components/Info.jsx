import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Info extends Component {
  render() {
    return (
      <div id="infomain">
      <img src="https://images.bigcartel.com/theme_images/28636550/logo.png?auto=format&fit=max&h=250&w=1300"/>
        <nav>
        <ul>
      <li id="storelink"><a href="http://electrician-gary-84651.bitballoon.com">Store</a></li>
      <li id="shoplink"><Link to="/shop"> Upcoming</Link></li>
      <li id="contactlink"><Link to="/contact">Contact</Link></li>
      <li id="faqlink"><Link to="/info">FAQ</Link></li>
        </ul>
      </nav>
      <div id="info">
      <p> Returns </p>
      <p id="return">We offer free returns. If you wish to return an item, please email us at <a href="mailto:returns@candidenyc.com">returns@candidenyc.com</a> with your order number and the reason for your return.</p>
    <div class="sizing">
    <p> Sizing Charts </p>
      <img src="https://i.imgur.com/W74eg2C.png" />

    </div>
    </div>
    </div>
    );
  };
}

export default Info;
