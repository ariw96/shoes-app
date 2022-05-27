import React,{useState,useContext} from "react";
import { ProductContext } from "./ProductContext";
import {NavLink} from "react-router-dom";
import {Button,Card, Stack} from "react-bootstrap";

function Product(props) {
  const [data, setData] = useContext(ProductContext);
  
 console.log(data);
  return (
    <Stack>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" />
    <Card.Body>
      <Card.Title>$</Card.Title> 
      <Card.Text>
      
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </Stack>
  )
}

export default Product