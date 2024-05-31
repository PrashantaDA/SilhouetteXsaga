import { useState } from "react";
import { MdKeyboardArrowDown, MdSearch, MdOutlinePerson, MdFavoriteBorder, MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navbar">
			<div className="wrapper">
				<div className="left">
					<div className="item ">
						<img
							src="/imgs/en.png"
							alt="flag"
						/>
						<span>USD</span>
						<MdKeyboardArrowDown size={20} />
					</div>
					<div className="item">
						<Link to="/products/1">Laptops</Link>
					</div>
					<div className="item">
						<Link to="/products/2">Keyboards</Link>
					</div>
					<div className="item">
						<Link to="/products/3">Mouse</Link>
					</div>
				</div>

				<div className="center">
					<Link to="/">
						<div className="logo">
							<span className="one">Silhouette</span>
							<span className="logox">X</span>
							<span className="two">Saga</span>
						</div>
					</Link>
				</div>

				<div className="shop-nav">
					<Link to="/products">Shop</Link>
				</div>

				<div className="right">
					<div className="items">
						<div className="item">
							<Link to="/">Home</Link>
						</div>
						<div className="item">
							<Link to="/">About</Link>
						</div>
						<div className="item">
							<Link to="/">Contact</Link>
						</div>
						<div className="item">
							<Link to="/">Stores</Link>
						</div>
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
						<span>0</span>
					</div>
					<div
						className="menu-icon"
						onClick={toggleMenu}
					>
						{isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
					</div>
					<div className={`menu-items ${isMenuOpen ? "active" : ""}`}>
						<div className="item">
							<Link to="/">Home</Link>
						</div>
						<div className="item">
							<Link to="/">About</Link>
						</div>
						<div className="item">
							<Link to="/">Contact</Link>
						</div>
						<div className="item">
							<Link to="/">Stores</Link>
						</div>
						<div className="icons">
							<MdSearch size={20} />
							<MdOutlinePerson size={20} />
							<MdFavoriteBorder size={20} />
						</div>
					</div>
				</div>
			</div>

			{cartOpen && <Cart />}
		</nav>
	);
};

export default Navbar;
