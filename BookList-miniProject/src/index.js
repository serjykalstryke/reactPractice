import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const title = "A Promised Land";
const author = "Barack Obama";

function BookList() {
	return (
		<section className="booklist">
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article className="book">
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg"
				alt="book image"
			/>
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
