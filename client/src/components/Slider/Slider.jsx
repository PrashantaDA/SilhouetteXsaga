import { useCallback, useEffect, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import "./Slider.scss";

const Slider = () => {
	const images = ["/banner2.png", "/banner3.png", "banner5.png", "banner6.png"];

	const [currentSlide, setCurrentSlide] = useState(0);

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? images.length - 1 : (prev) => prev - 1);
	};
	const nextSlide = useCallback(() => {
		setCurrentSlide(currentSlide === images.length - 1 ? 0 : (next) => next + 1);
	}, [currentSlide, images.length]);

	useEffect(() => {
		const autoScroll = setInterval(() => {
			nextSlide();
		}, 4000);

		return () => clearInterval(autoScroll);
	}, [currentSlide, nextSlide]);

	return (
		<div className="slider">
			<div
				className="container"
				style={{
					width: `
					${images.length * 100}vw`,

					transition: "all 0.8s ease-in-out",
					transform: `translateX(-${currentSlide * 100}vw)`,
				}}
			>
				{images.map((image, index) => {
					return (
						<img
							key={index}
							src={image}
							alt=""
						/>
					);
				})}
			</div>
			<div className="icons">
				<div
					className="icon"
					onClick={prevSlide}
				>
					<GoChevronLeft size={20} />
				</div>
				<div className="icon">
					<GoChevronRight
						size={20}
						onClick={nextSlide}
					/>
				</div>
			</div>
		</div>
	);
};

export default Slider;
