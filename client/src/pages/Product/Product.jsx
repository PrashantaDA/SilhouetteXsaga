import { useState } from "react";
import { MdAddShoppingCart, MdFavoriteBorder, MdCompareArrows } from "react-icons/md";
import "./Product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const Product = () => {
	const id = useParams().id;
	const [selectedImg, setSelectedImg] = useState("img");
	const [quantity, setQuantity] = useState(0);

	const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

	return (
		<div className="product">
			{loading ? (
				<Loading />
			) : (
				<>
					<div className="left">
						<div className="images">
							<img
								src={import.meta.env.VITE_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
								alt=""
								onClick={() => setSelectedImg("img")}
							/>
							<img
								src={import.meta.env.VITE_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
								alt=""
								onClick={() => setSelectedImg("img2")}
							/>
						</div>

						<div className="main-img">
							<img
								src={import.meta.env.VITE_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url}
								alt=""
							/>
						</div>
					</div>
					<div className="right">
						<h1>{data?.attributes?.title}</h1>
						<span className="price">${data?.attributes?.price}</span>
						<p>{data?.attributes?.desc}</p>
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
				</>
			)}
		</div>
	);
};

export default Product;
