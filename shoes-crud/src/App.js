import React from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/Home";
import Products from "./components/Products";
import EditShoe from "./components/EditShoe";
import AddShoes from "./components/AddShoes";
import { useState, useEffect,useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./components/ProductContext";




function App() {
	
	return (
		<ProductProvider>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route path="add" element={<AddShoes />} />
                    <Route path=":id" element={<EditShoe />} />
				</Routes>
			</Router>
		</ProductProvider>
	);
}

export default App;
