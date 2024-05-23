import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GiEnvelope, GiPositionMarker } from "react-icons/gi";

import "./Footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="top">
				<div className="item">
					<h1>Categories</h1>
					<span>Women</span>
					<span>Men</span>
					<span>Shoes</span>
					<span>Accessories</span>
					<span>New Arrivals</span>
				</div>
				<div className="item">
					<h1>Links</h1>
					<span>FAQ</span>
					<span>Pages</span>
					<span>Stores</span>
					<span>Compare</span>
					<span>Cookies</span>
				</div>
				<div className="item">
					<h1>About</h1>
					<span>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ducimus rem quam eius voluptatem eos non dolores nemo, recusandae commodi deleniti excepturi
						necessitatibus quae. Nam, laudantium autem?
					</span>
				</div>
				<div className="item">
					<h1> Contact</h1>
					<div className="contact">
						<div className="contact-details">
							{" "}
							<MdOutlinePhoneInTalk />
							<span>+1 234 56 789</span>
						</div>
						<div className="contact-details">
							{" "}
							<GiEnvelope /> <span>YRQ2H@example.com</span>
						</div>
						<div className="contact-details">
							{" "}
							<GiPositionMarker /> <span>123 Street Name, City, Country </span>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom">
				<div className="left">
					<div className="logo">
						<img
							src="/imgs/logo_bg.png"
							alt="Logo"
						/>
					</div>
					<span className="copyright">&copy; Copyright 2024. All Rights Reserved</span>
				</div>
				<div className="right">
					<img
						src="/imgs/payment.png"
						alt="payment"
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
