import React from "react";
import { Card ,Button,Stack} from "react-bootstrap";
import { NavLink} from "react-router-dom";
import { useState,useContext,useEffect} from "react";
import { ProductContext } from "./ProductContext";
import axios from "axios";
const ShowProducts = ({filter}) => {
	const [data, setData] = useContext(ProductContext);
	const  handleDelete = async (id) => {
		try{
			console.log(id);
		const res = await axios.delete(`http://localhost:3001/shoes/${id}`).then((res) => {
			setData(data.filter((item) => item.id !== id));
		});}catch(error){
			console.log(error);
		}
	};



	return(
		<>
			{filter.map((item) => {
			return (
				
				<Card className="h-100 text-center  p-4 border-secondary me-2 my-2 " key={item.id} style={{ width: '18rem' }}>	
				<Card.Img variant="top" src={`${item.image}`} height='250px' />
				<Card.Body>
				  <Card.Title>{item.name}</Card.Title>
				  <Card.Title>{item.price}$</Card.Title>
				  <Button variant="warning"  >Edit </Button>
             

				  <Button className="mx-2" variant="danger" value={item.id} onClick={()=>handleDelete(item.id)}>Delete </Button>
				
                  
				</Card.Body>
			  </Card>
			);
		})}

		</>
	)
	}
    export default ShowProducts;