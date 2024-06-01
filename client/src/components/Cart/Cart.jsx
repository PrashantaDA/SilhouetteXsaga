import { MdOutlineDelete } from "react-icons/md";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartReducer";

const Cart = () => {
	const products = useSelector((state) => state.cart.products);
	const dispatch = useDispatch();
	const totalPrice = () => {
		let total = 0;
		products.forEach((item) => {
			total += item.quantity * item.price;
		});
		return total.toFixed(2);
	};

	return (
		<div className="cart">
			<h1>Products in your cart</h1>

			{products?.map((item) => (
				<div
					className="item"
					key={item.id}
				>
					<img
						src={import.meta.env.VITE_UPLOAD_URL + item.img}
						alt=""
					/>
					<div className="details">
						<h1>{item.title}</h1>
						<div className="price">
							${item.quantity} x ${item.price}
						</div>
					</div>
					<MdOutlineDelete
						className="delete"
						onClick={() => dispatch(removeFromCart(item.id))}
					/>
				</div>
			))}
			<div className="total">
				<span>Subtotal</span>
				<span>${totalPrice()}</span>
			</div>
			<button>Proceed to Checkout</button>
			<span
				className="reset"
				onClick={() => dispatch(resetCart())}
			>
				Reset Cart
			</span>
		</div>
	);
};

export default Cart;
