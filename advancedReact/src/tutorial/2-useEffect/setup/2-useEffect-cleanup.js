import React, { useState, useEffect } from "react";

// cleanup function
// second parameter
const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		console.log("Workers of the World Unite!");
		window.addEventListener("resize", checkSize);
		return () => {
			console.log("cleanup");
			window.removeEventListener("resize", checkSize);
		};
	}, []);
	// console.log("The Only Thing You Have To Lose is Your Chains!");

	return (
		<>
			<h1>Window</h1>
			<h2>{size} PX</h2>
		</>
	);
};

export default UseEffectCleanup;
