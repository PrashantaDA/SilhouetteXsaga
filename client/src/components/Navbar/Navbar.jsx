import { useState } from "react";
import { MdSearch, MdOutlinePerson, MdFavoriteBorder, MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import NavCategories from "../NavCategories/NavCategories";
import { useSelector } from "react-redux";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const products = useSelector((state) => state.cart.products);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navbar">
			<div className="wrapper">
				<div className="left">
					<Link to="/">
						<div className="logo">
							<span className="one">Silhouette</span>
							<span className="logox">X</span>
							<span className="two">Saga</span>
						</div>
					</Link>
				</div>
				<div className="center">
					<div className="shop-nav">
						<Link to="/products">Shop</Link>
					</div>
				</div>

				<div className="right">
					<div className="items">
						<div className="icons">
							<MdSearch size={22} />
							<MdOutlinePerson size={22} />
							<MdFavoriteBorder size={22} />
						</div>
					</div>
					<div
						className="cart-icon"
						onClick={() => setCartOpen(!cartOpen)}
					>
						<MdOutlineShoppingCart size={20} />
						<span>{products.length}</span>
					</div>
					<div
						className="menu-icon"
						onClick={toggleMenu}
					>
						{isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
					</div>
					<div className={`menu-items ${isMenuOpen ? "active" : ""}`}>
						<div className="icons">
							<MdSearch size={20} />
							<MdOutlinePerson size={20} />
							<MdFavoriteBorder size={20} />
						</div>
					</div>
				</div>
			</div>

			{cartOpen && <Cart />}
			<NavCategories />
		</nav>
	);
};

export default Navbar;
