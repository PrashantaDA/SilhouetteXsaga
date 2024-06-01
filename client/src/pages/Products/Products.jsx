import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";

import "./Products.scss";

const Products = () => {
	const catId = parseInt(useParams().id);
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(5000);
	const [selectedSubCategory, setSelectedSubCategory] = useState([]);
	const [sort, setSort] = useState("asc");

	const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

	const handleChange = (e) => {
		const value = e.target.value;
		const isChecked = e.target.checked;
		setSelectedSubCategory(isChecked ? [...selectedSubCategory, value] : selectedSubCategory.filter((item) => item !== value));
	};

	useEffect(() => {
		setSelectedSubCategory([]);
	}, [catId]);

	return (
		<section className="products">
			<div className="left">
				<div className="filter-item">
					<h2>Product Categories</h2>
					{error ? (
						"Something Went Wrong!"
					) : loading ? (
						<Loading />
					) : (
						data?.map((item) => (
							<div
								key={item.id}
								className="input-item"
							>
								<input
									type="checkbox"
									id={item.id}
									value={item.id}
									onChange={handleChange}
								/>
								<label htmlFor={item.id}>{item.attributes.title}</label>
							</div>
						))
					)}
				</div>
				<div className="filter-item">
					<h2>Filter By Price</h2>
					<div className="input-item">
						<span>{minPrice}</span>
						<input
							type="range"
							min={0}
							max={5000}
							onChange={(e) => setMaxPrice(e.target.value)}
						/>
						<span>{maxPrice}</span>
					</div>
				</div>
				<div className="filter-item">
					<h2>Sort By</h2>
					<div className="input-item">
						<input
							type="radio"
							name="price"
							id="asc"
							value={"asc"}
							onChange={(e) => setSort("asc")}
						/>
						<label htmlFor="asc">Price (Lowest First)</label>
					</div>
					<div className="input-item">
						<input
							type="radio"
							name="price"
							id="desc"
							value={"desc"}
							onChange={(e) => setSort("desc")}
						/>
						<label htmlFor="desc">Price (Highest First)</label>
					</div>
				</div>
			</div>
			<div className="right">
				<img
					className="cat-img"
					src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="category"
				/>
				<List
					catId={catId}
					maxPrice={maxPrice}
					sort={sort}
					subCats={selectedSubCategory}
				/>
			</div>
		</section>
	);
};

export default Products;
