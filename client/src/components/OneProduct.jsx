import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class OneProduct extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={{ width: "18rem"}}>
        <Card.Img
          variant="top"
          src={this.props.product?.imageURL}
          width={300}
          height={300}
          loading="lazy"
        />
        <Card.Body>
          <Card.Title>{this.props.product?.productName}</Card.Title>
          <Card.Text>
            {this.props.product?.description.slice(0, 15)}...
          </Card.Text>
          <Card.Title>{this.props.product?.price}</Card.Title>
          <div className="d-flex justify-content-between">
            <Button variant="warning"
            onClick={()=>{
              this.props.changeProduct(this.props?.product)
              this.props.changeView("productDetails")
            }} 
            >
              View More</Button>
            <Button variant="info">Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
