import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Products from './components/Products'
import Footer from './components/Footer'
import DummyData from "./data.json"
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'


export default class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      data : [],
      view : "products",
      product: {}
    }
    this.changeView = this.changeView.bind(this)
    this.changeProduct = this.changeProduct.bind(this)
  }
  componentDidMount(){
    this.setState({
      data: DummyData,
    })
  }
  changeView(view) {
    this.setState({
      view : view
    })
  }
  changeProduct(obj){
    this.setState({
      product : obj
    })
  }

  render() {
    return (
      <div>
        <NavBar changeView={this.changeView} />
      {this.state.data.length && this.state.view === "products" && <Products products={this.state.data} changeView = {this.changeView} changeProduct = {this.changeProduct}/>}
      {this.state.view === "cart" && <Cart/>}
      {this.state.view === "productDetails" && <ProductDetails product = {this.state.product}/>}
        <Footer />
      </div>
    )
  }
}

