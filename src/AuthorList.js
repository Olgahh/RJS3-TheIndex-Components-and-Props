import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
  // const author = props.author;
  const authorList = props.authors.map(author => (
    <AuthorCard key={author.first_name + author.last_name} author={author} />
  ));
  //Will be rendered on the screen
  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorList}</div>
    </div>
  );
}

export default AuthorList;
