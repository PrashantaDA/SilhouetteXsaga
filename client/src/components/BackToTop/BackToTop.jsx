import { useState, useEffect } from "react";
import { TbCircleChevronsUp } from "react-icons/tb";
import "./BackToTop.scss";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div
			className={`back-to-top ${isVisible ? "visible" : ""}`}
			onClick={scrollToTop}
		>
			<TbCircleChevronsUp size={24} />
		</div>
	);
};

export default BackToTop;
