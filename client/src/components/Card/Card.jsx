import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({ item }) => {
	return (
		<Link
			className="link"
			to={`/product/${item.id}`}
		>
			<div className="card">
				<div className="image">
					{item?.attributes.isNew && <span>New Arrival</span>}
					<img
						src={import.meta.env.VITE_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url}
						alt=""
						className="main-img"
					/>
					<img
						src={import.meta.env.VITE_UPLOAD_URL + item?.attributes?.img2?.data?.attributes?.url}
						alt=""
						className="second-img"
					/>
				</div>
				<h2>{item?.attributes.title}</h2>
				<div className="prices">
					<h3>${item.oldPrice || Math.floor(item?.attributes.price + 27)}</h3>
					<h3>${item?.attributes.price}</h3>
				</div>
			</div>
		</Link>
	);
};

export default Card;
