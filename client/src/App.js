import React, { Component } from 'react';
import Footer from './components/partials/footer';
import Shop from './components/Shop';
import Single from './components/Single';
import Info from './components/Info';
import About from './components/About';
import Store from './components/Store';
import Main from './components/Main';
import Contact from './components/Contact';
import Login from './components/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: null,
      apiData: [],
      apiDataLoaded: false,
      single:null
    }
    this.handleChange = this.handleChange.bind(this);
    this.showProductsOnPage = this.showProductsOnPage.bind(this);


  }


   componentDidMount() {
console.log(this.state.apiData.id)
    // fetch('/product/'+this.state.id)
    fetch('/products')
    .then(res => {
      //console.log(res);
      return res.json()
  }).then((jsonRes) => {
    console.log(jsonRes)
      this.setState({
        apiData: jsonRes.products_data,
        apiDataLoaded: true,

      });


    });
  }


  showProductsOnPage() {


    return this.state.apiData.map((products_data,req) => {
      console.log(req,'this is the req in app')


      let id = req
      console.log(id,'you know')
      return (
        <div className="products" key={products_data.id}>
        <a href={'/single/' + products_data.id}><img id="teaser" src={products_data.image_teaser}/></a>
         <a href={'/single/' + products_data.id}> <p id="highlight">{products_data.product_name}</p></a>



        </div>
      );
    });
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  shopComponent(props) {
    return (
      <Shop
        {...props}
        showProductsOnPage={this.showProductsOnPage}
        apiData={this.state.apiData}

      />
    );

}
  singleComponent(props) {
    return (
      <Single
        {...props}
         showSingleProduct={this.showProductsOnPage}
        // apiData={this.state.apiData}

      />
    );

}
   loginComponent(props) {
    return (
      <Login
        {...props}
        user={this.state.user}
        login={this.login}
        logout={this.logout}
      />
    );
  }
  render() {
    return (
      <div className="App">

      <Router>
        <div id="default">

          <Switch>
          <Route exact path="/shop" render={(props) => this.shopComponent(props) } />
          <Route exact path="/single/:id" render={(props) => this.singleComponent(props) } />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Main} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/login" render={(props) => this.loginComponent(props) } />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/store" component={Store} />
          </Switch>

        </div>

        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
