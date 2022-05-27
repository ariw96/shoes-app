import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";
import { NavLink } from "react-router-dom";
import { Button, Card, Stack } from "react-bootstrap";

function Product(props) {
	const [data, setData] = useContext(ProductContext);

	console.log(data);
	return (
		<Stack>
			<Button className=" my-5 mx-auto" variant="danger">
				Delete
			</Button>
      <h2>Are you sure you want to delete the </h2>
		</Stack>
	);
}

export default Product;
