import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState("");
	const [isError, setIsError] = useState(false);

	// const firstValue = text || "hello world";
	// const secondValue = text && "hello world";

	return (
		<>
			{/* <h1>{firstValue}</h1>
			<h1>value: {secondValue}</h1> */}
			<h1>{text || "Karl Marx"}</h1>
			<button className="btn" onClick={() => setIsError(!isError)}>
				toggle error
			</button>
			{/* {isError && <h1>Error...</h1>} */}
			{isError ? (
				<h2>Workers of the World Unite!</h2>
			) : (
				<div>
					<h2>The Only Thing You Have To Lose is Your Chains!</h2>
				</div>
			)}
		</>
	);
};

export default ShortCircuit;
