import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Long Sleeve Tshirt",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Long Sleeve Tshirt",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 3,
			img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Long Sleeve Tshirt",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 4,
			img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Long Sleeve Tshirt",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
	];

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
