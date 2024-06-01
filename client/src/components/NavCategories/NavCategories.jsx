import { NavLink, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./NavCategories.scss";

const NavCategories = () => {
	const id = useParams().id;
	const { data, loading, error } = useFetch(`/categories`);

	return (
		<div className="nav-categories">
			{data &&
				data.map((item) => (
					<div
						key={item.id}
						className="item"
					>
						<NavLink
							activeClassName="active"
							exact
							to={`/products/${item.id}`}
						>
							{item?.attributes?.title}
						</NavLink>
					</div>
				))}
		</div>
	);
};

export default NavCategories;
