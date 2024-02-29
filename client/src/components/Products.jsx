import React, { Component } from 'react'
import OneProduct from './OneProduct'

export default class Products extends Component {
  constructor(props){
    super(props)
    this.state = {
      prod : []
    }
   
  }
  componentDidMount(){
    this.setState({
      prod : this.props.products
    })
  }
 
  render() {
    console.log(this.props.searchQuerry, "this is querry");
    return (
      <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 p-2 mb-5'>
       { this.state.prod?.filter((e,i)=>e.productName?.toLowerCase().includes(this.props.searchQuerry?.toLowerCase())).map((element,index)=>{
          return (
            <OneProduct product={element} key={index} changeView = {this.props.changeView} changeProduct = {this.props.changeProduct}/>
          )
        })}
        
      </div>
    )
  }
}
