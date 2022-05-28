import React, { useState, useContext } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import AddShoes from "./AddShoes";

import ShowProducts from "./ShowProducts";

const Buttons = (props) => {
	const [filter, setFilter] = useState([]);
	const [data, setData] = useContext(ProductContext);
	const [sortState, setSortState] = useState("high-to-low");
	const sortPrice = () => {
		if (sortState === "high-to-low") {
			setSortState("low-to-high");
			return	setFilter(data.sort((a, b) => a.price - b.price))
		}	
			setSortState("high-to-low");
			return	setFilter(data.sort((a, b) => b.price - a.price))
	};

	return (
		<div>
			<Container bg="dark">
				<div className=" my-5 py-4">
					<div className="">
						<div className="">
							<h1 className="display-7 fw-bolder text-center">Our Shoes</h1>
							<hr />
						</div>
					</div>
					<div className="d-flex justify-content-center mb-5 me-2 mx-2">
						<Stack gap={2} direction="horizontal" variant="outline-secondary">
							<Button onClick={() => setFilter(data)}>All</Button>
						
							<Button	onClick={() => setFilter(sortPrice)}>Sort by price</Button>
							<Button
								onClick={() =>
									setFilter(data.filter((item) => item.name === "Adidas"))
								}
								>
								Adidas
							</Button>
							<NavLink to="/add">
								<Button>Add Shoe</Button>
							</NavLink>
						</Stack>
					</div>
					<div className="row justify-content-center">
						<ShowProducts filter={filter} />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Buttons;
