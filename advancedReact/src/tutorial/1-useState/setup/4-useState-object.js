import React, { useState } from "react";

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: "Karl",
		age: 29,
		message: "Workers of the World Unite!",
	});
	const changeMessage = () => {
		setPerson({
			...person,
			message: "The Only Thing You Have To Lose Is Your Chains!",
		});
	};
	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>{person.message}</h3>
			<button className="btn" onClick={changeMessage}>
				Change Message
			</button>
		</>
	);
};

export default UseStateObject;
