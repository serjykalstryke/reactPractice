import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg"
    alt="book image"
  />
);

const Title = () => <h1>A Promised Land</h1>;

const Author = () => <h4>Barack Obama</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
