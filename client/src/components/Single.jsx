import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Single extends Component {
  constructor(props){
    super(props);
    this.state={
      single:''
    }
     this.showSingleProduct = this.showSingleProduct.bind(this);
  }




componentDidMount() {
    let id = this.props.match.params.id
          fetch('/products/' + id)
         .then(res => {

      return res.json()

      }).then( (jsonRes,req)=>{
        console.log(req,'this is the req in single')
        // let id = this.props.match.params.id
        // console.log(id)
        // let  ok = jsonRes.products_data
        // console.log(ok)
        this.setState({
          single:jsonRes.products_data
        })
console.log(jsonRes.products_data,this.state,'<--this is state')
});
console.log(this.state)
  }

  showSingleProduct() {
  }
  render() {
    return (
      <div id="shop">
         <img src="https://images.bigcartel.com/theme_images/28636550/logo.png?auto=format&fit=max&h=250&w=1300"/>

      <nav>
        <ul>
      <li id="storelink"><a href="http://electrician-gary-84651.bitballoon.com//">Store</a></li>
      <li id="aboutlink"><Link to="/about">About</Link></li>
      <li id="contactlink"><Link to="/contact">Contact</Link></li>
      <li id="faqlink"><Link to="/info">FAQ</Link></li>
        </ul>
      </nav>
      <div>

       <div className="productdetails">
        <img id="details1" src={this.state.single.image_1}/>
        <img id="details2" src={this.state.single.image_2}/>
          <p>{this.state.single.product_name}</p>
          <p>{this.state.single.product_desc}</p>
          <span className="price">{this.state.single.retail_price}</span>

          <p id='single'><a href="mailto:info@candidenyc.com">Pre-Order Now</a></p>
        </div>

       </div>
    </div>
    );
  };

}

export default Single;
