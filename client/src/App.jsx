import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

const App = () => {
	return (
		<>
			<div className="app">
				<Navbar />
				<Outlet />
				<Footer />
				<BackToTop />
			</div>
		</>
	);
};

export default App;
