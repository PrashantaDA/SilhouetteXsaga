/* eslint-disable no-undef */

import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
	const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

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
				{error ? (
					"Something Went Wrong!"
				) : loading ? (
					<Loading />
				) : (
					data?.map((item) => (
						<Card
							key={item.id}
							item={item}
						/>
					))
				)}
			</div>
		</section>
	);
};

export default FeaturedProducts;
