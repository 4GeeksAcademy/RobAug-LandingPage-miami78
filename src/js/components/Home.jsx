import React from "react";

import CardRow from "./CardRow";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Navbar />
			<Hero />
			<CardRow />
			<Footer />
			
		</div>
	);
};

export default Home;