import React, { useState } from "react";

const UseStateBasics = () => {
	// console.log(useState("Hello World"));
	// const value = useState(1)[0];
	// const handler = useState(1)[1];
	// console.log(value, handler);
	const [text, setText] = useState("Workers of the World Unite");

	const handleClick = () => {
		if (text === "Workers of the World Unite") {
			setText("The Only Thing You Have To Lose Is Your Chains!");
		} else {
			setText("Workers of the World Unite");
		}
	};
	return (
		<React.Fragment>
			<h1>{text}</h1>
			<button className="btn" onClick={handleClick}>
				change title
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;
