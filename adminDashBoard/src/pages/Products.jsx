import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios"
function Products({riadh}) {


  return (
    <div className="d-flex justify-content-center flex-wrap" style={{paddingTop:80,paddingBottom:80}}>
      {riadh?.map((element,index)=>{
return (
    <Card style={{ width: "18rem"}} key={index}>
    <Card.Img
      variant="top"
      src={element.imageURL}
      width={300}
      height={300}
      loading="lazy"
    />
    <Card.Body>
      <Card.Title>{element?.productName}</Card.Title>
      <Card.Text>
        {element?.description.slice(0, 15)}...
      </Card.Text>
      <Card.Title>{element?.price}</Card.Title>
      <div className="d-flex justify-content-between">
        <Button variant="warning"
        onClick={()=>{
  
        }} 
        >
          View More</Button>
        <Button variant="info">Add to Cart</Button>
      </div>
    </Card.Body>
  </Card>
)
      })}
    </div>
  )
}

export default Products;
