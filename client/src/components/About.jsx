import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div id="aboutcontainer">
      <img src="https://images.bigcartel.com/theme_images/28636550/logo.png?auto=format&fit=max&h=250&w=1300"/>
        <nav id="white">
        <ul>
      <li id="storelink"><a href="http://electrician-gary-84651.bitballoon.com//">Store</a></li>
      <li id="shoplink"><Link to="/shop">Upcoming</Link></li>
      <li id="contactlink"><Link to="/contact">Contact</Link></li>
      <li id="faqlink"><Link to="/info">FAQ</Link></li>
        </ul>
      </nav>
      <div id="about">

      <p id="me"><span class="highlight">Who we are...</span><br/> We are<span class="highlight"> Candide</span>, and our clothes try to embody the spirit of Voltaire's character: youth, disillusionment, sarcasm, fantasy, irony, optimism. All our clothes are designed and manufactured in <span class="highlight">NYC</span>.</p>

    </div>
    </div>
    );
  };
}

export default About;



