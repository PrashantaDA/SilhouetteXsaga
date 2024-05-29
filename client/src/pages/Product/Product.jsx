import { useState } from "react";
import { MdAddShoppingCart, MdFavoriteBorder, MdCompareArrows } from "react-icons/md";
import "./Product.scss";

const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const images = [
		"https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
		"https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
	];

	return (
		<div className="product">
			<div className="left">
				<div className="images">
					<img
						src={images[0]}
						alt=""
						onClick={() => setSelectedImg(0)}
					/>
					<img
						src={images[1]}
						alt=""
						onClick={() => setSelectedImg(1)}
					/>
				</div>

				<div className="main-img">
					<img
						src={images[selectedImg]}
						alt=""
					/>
				</div>
			</div>
			<div className="right">
				<h1>Title</h1>
				<span className="price">$199</span>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita harum cum nihil excepturi vel optio magnam beatae illo, veniam nisi.</p>
				<div className="quantity">
					<button onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}>-</button>
					{quantity}
					<button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
				</div>

				<button className="add">
					Add to Cart <MdAddShoppingCart size={20} />
				</button>
				<div className="links">
					<div className="item">
						<MdFavoriteBorder /> Add to Favorites
					</div>
					<div className="item">
						<MdCompareArrows /> Compare
					</div>
				</div>

				<div className="info">
					<span>Vendor: Polo</span>
					<span>Product Type: T-Shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
				</div>

				<hr />

				<div className="info">
					<span>DESCRIPTION</span>
					<hr />
					<span>ADDITIONAL INFORMATION</span>
					<hr />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
