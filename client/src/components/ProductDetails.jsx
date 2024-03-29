import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";




export default class ProductDetails extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height:"90vh"}}>
      <Card style={{ width: "18rem"}}>
        <Card.Img
          variant="top"
          src={this.props.product.imageURL}
          width={300}
          height={300}
          loading="lazy"
        />
        <Card.Body>
          <Card.Title>{this.props.product.productName}</Card.Title>
          <Card.Text>
            {this.props.product.description.slice(0, 15)}...
          </Card.Text>
          <Card.Title className='text-danger'>{this.props.product.price}$</Card.Title>
          <div className="d-flex justify-content-between">
            <Button variant="info">Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
    )
  }
}
