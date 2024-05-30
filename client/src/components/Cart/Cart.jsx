import { MdOutlineDelete } from "react-icons/md";
import "./Cart.scss";

const Cart = () => {
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
	];

	return (
		<div className="cart">
			<h1>Products in your cart</h1>

			{data?.map((item) => (
				<div
					className="item"
					key={item.id}
				>
					<img
						src={item.img}
						alt=""
					/>
					<div className="details">
						<h1>{item.title}</h1>
						<div className="price">
							<p>1 x ${item.price}</p>
						</div>
					</div>
					<MdOutlineDelete className="delete" />
				</div>
			))}
			<div className="total">
				<span>Subtotal</span>
				<span>$123</span>
			</div>
			<button>Proceed to Checkout</button>
			<span className="reset">Reset Cart</span>
		</div>
	);
};

export default Cart;
