import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
	{
		id: 1,
		img:
			"https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
		title: "A Promised Land",
		author: "Barack Obama",
	},

	{
		id: 2,
		img:
			"https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL200_SR200,200_.jpg",
		title: "1984",
		author: "George Orwell",
	},
	{
		id: 3,
		img:
			"https://images-na.ssl-images-amazon.com/images/I/71wdbkiRokL._AC_UL200_SR200,200_.jpg",
		title: "Animal Farm",
		author: "George Orwell",
	},
];

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book key={book.id} {...book}></Book>;
			})}
		</section>
	);
}

const Book = (props) => {
	const { img, title, author } = props;
	console.log(props);
	return (
		<article className="book">
			<img src={img} alt={title + " cover"} />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
