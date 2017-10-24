import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
<div id="main">
<img src="https://images.bigcartel.com/theme_images/28636550/logo.png?auto=format&fit=max&h=250&w=1300"/>
    <p id="shop"><Link to="/shop">Shop</Link></p>

    </div>
    );
  };
}

export default Main;
