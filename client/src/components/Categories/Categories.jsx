import { Link } from "react-router-dom";
import "./Categories.scss";
import useFetch from "../../hooks/useFetch";

const Categories = () => {
	const { data, loading, error } = useFetch("/categories?populate=*");

	return (
		<section className="categories">
			<div className="cols">
				<div className="row">
					<img
						src={import.meta.env.VITE_UPLOAD_URL + data?.[2]?.attributes?.img?.data?.attributes?.url}
						alt="mouse"
						className="img-1"
					/>
					<button>
						<Link to={"/products/3"}>{data?.[2]?.attributes?.title}</Link>
					</button>
				</div>
				<div className="row">
					<img
						src={import.meta.env.VITE_UPLOAD_URL + data?.[1]?.attributes?.img?.data?.attributes?.url}
						alt=""
					/>
					<button>
						<Link to="/products/2">{data?.[1]?.attributes?.title}</Link>
					</button>
				</div>
			</div>
			<div className="cols">
				<div className="row">
					{" "}
					<img
						src={import.meta.env.VITE_UPLOAD_URL + data?.[0]?.attributes?.img?.data?.attributes?.url}
						alt=""
					/>
					<button>
						<Link to="/products/1">{data?.[0]?.attributes?.title}</Link>
					</button>
				</div>
			</div>
			<div className="cols col-lg">
				<div className="row">
					<div className="cols">
						<div className="row">
							<img
								src={import.meta.env.VITE_UPLOAD_URL + data?.[3]?.attributes?.img?.data?.attributes?.url}
								alt=""
							/>
							<button>
								<Link to="/products/4">{data?.[3]?.attributes?.title}</Link>
							</button>
						</div>
					</div>
					<div className="cols">
						<div className="row">
							{" "}
							<img
								src={import.meta.env.VITE_UPLOAD_URL + data?.[5]?.attributes?.img?.data?.attributes?.url}
								alt=""
							/>
							<button>
								<Link to="/products/6">{data?.[5]?.attributes?.title}</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<img
						src={import.meta.env.VITE_UPLOAD_URL + data?.[4]?.attributes?.img?.data?.attributes?.url}
						alt=""
						className="img-6"
					/>
					<button>
						<Link to="/products/5">{data?.[4]?.attributes?.title}</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Categories;
