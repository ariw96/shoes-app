import React from "react";
import { Card ,Button,Stack} from "react-bootstrap";
import { NavLink} from "react-router-dom";
import { useState,useContext} from "react";
import { ProductContext } from "./ProductContext";
const ShowProducts = ({filter}) => {
	const [data, setData] = useContext(ProductContext);
	// const handleProduct = (id) => {
	// 	if(data.length > 20){
	// 		data.pop();
	// 	}
	// 	setData((prevData) => {
	// 		return [...data,prevData.filter((item) => item.id === id)];
	// 	});
	// };

	return(
		<>
			{filter.map((item) => {
			return (
				
				<Card className="h-100 text-center  p-4 border-secondary me-2 my-2 " key={item.id} style={{ width: '18rem' }}>	
				<Card.Img variant="top" src={`${item.image}`} height='250px' />
				<Card.Body>
				  <Card.Title>{item.name}</Card.Title>
				  <Card.Title>{item.price}$</Card.Title>
				  <Button variant="info"  >Add To Cart </Button>
                <NavLink to={`${item.id}`}>

				  <Button className="mx-2" variant="warning" value={item.id} >Details </Button>
				</NavLink>
                  
				</Card.Body>
			  </Card>
			);
		})}

		</>
	)
	}
    export default ShowProducts;