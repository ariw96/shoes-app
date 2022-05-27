import axios from "axios";
import React, { useState, useContext } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { ProductContext } from "./ProductContext";

import ShowProducts from "./ShowProducts";

const AddShoes = (props) => {
	const [data, setData] = useContext(ProductContext);
	const [url, setUrl] = useState("");
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);

	const handleUrlChange = (e) => {
		setUrl(e.target.value);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handlePriceChange = (e) => {
		setPrice(e.target.value);
	};

	const handleData = (e) => {
		e.preventDefault();
		setData([...data, { image: url, name: name, price: price }]);
		setUrl("");
		setName("");
		setPrice("");
		axios.post("http://localhost:3001/shoes", { image: url, name: name, price: price });
	};
	return (
		<div>
			<Stack gap={2} className="col-md-5 mx-auto mt-5">
				<Form className="mb-3">
					<label>Enter details</label>
					<Form.Control
						type="text"
						placeholder="Enter name"
						value={name}
						onChange={handleNameChange}
					/>
					<Form.Control
						type="url"
						placeholder="https://source.unsplash.com/example"
						className="my-3"
						value={url}
						onChange={handleUrlChange}
					/>
					<Form.Control
						type="number"
						
						className="my-3"
						value={price}
						onChange={handlePriceChange}
					/>

					<Button onClick={handleData} className="mx-2 my-3 ">
						Add Shoe
					</Button>
				</Form>
			</Stack>
			
			
		</div>
	);
};

export default AddShoes;
