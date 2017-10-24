import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
      <img src="https://images.bigcartel.com/theme_images/28636550/logo.png?auto=format&fit=max&h=250&w=1300"/>
       <nav>
        <ul>
      <li id="storelink"><a href="http://electrician-gary-84651.bitballoon.com//">Store</a></li>
      <li id="aboutlink"><Link to="/about">About</Link></li>
      <li id="shoplink"><Link to="/shop">Upcoming</Link></li>
      <li id="faqlink"><Link to="/info">FAQ</Link></li>
        </ul>
      </nav>
     <div id="contactinfo">
     <p> Let's get in touch! </p>

     <p class="sociallink"> <a href="mailto:info@candidenyc.com"><span class="highlight">email:</span> info@candidenyc.com</a></p>
     <p class="sociallink"> <a href="https://twitter.com/diverchloe/following"><span class="highlight">instagram:</span> @candideoffical</a></p>
    </div>
    </div>
    );
  };
}

export default Contact;
