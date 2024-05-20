import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import "./main.scss";

// Pages
import Home from "./pages/Home/Home.jsx";
import Product from "./pages/Product/Product.jsx";
import Products from "./pages/Products/Products.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<App />}
		>
			<Route
				index={true}
				path="/"
				element={<Home />}
			/>
			<Route
				path="/products/:id"
				element={<Products />}
			/>
			<Route
				path="/product/:id"
				element={<Product />}
			/>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
