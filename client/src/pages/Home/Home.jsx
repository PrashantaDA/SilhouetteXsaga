import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
const Home = () => {
	return (
		<main className="home">
			{/* <Slider /> */}
			<FeaturedProducts type="Featured" />
			<Categories />
			<Contact />
			<FeaturedProducts type="Trending" />
		</main>
	);
};

export default Home;
