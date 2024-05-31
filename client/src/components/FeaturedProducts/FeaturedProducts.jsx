/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_API_URL}/products?populate=*`, {
					headers: {
						Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
					},
				});
				setData(res.data.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	});

	return (
		<section className="featured-products">
			<div className="top">
				<h1>{type} Products</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime dolorem, obcaecati earum debitis optio cum tenetur aperiam minus nam totam eligendi eos unde magni,
					illo perferendis!
				</p>
			</div>
			<div className="bottom">
				{data.map((item) => (
					<Card
						key={item.id}
						item={item}
					/>
				))}
			</div>
		</section>
	);
};

export default FeaturedProducts;
