import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import "./List.scss";

const List = ({ subCats, maxPrice, sort, catId }) => {
	const { data, loading, error } = useFetch(
		`/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
			(id) => `&[filters][sub_categories][id][$eq]=${id}`
		)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
	);

	return (
		<div className="list">
			{loading ? (
				<Loading />
			) : (
				data?.map((item) => (
					<Card
						item={item}
						key={item.id}
					/>
				))
			)}
		</div>
	);
};

export default List;
