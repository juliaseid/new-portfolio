import React from "react";
import Header from "./Header";
import { posts } from "./Posts";


function Blog(){

  const displayPosts = function (posts) {
    let sortedPosts = posts.sort((a, b) => (a.date > b.date) ? 1 : -1)
    sortedPosts.map(p => (
      <React.Fragment>
        <h5>{p.title}</h5>
        <h6>{p.date}</h6>
        <p>{p.body}</p>
      </React.Fragment>
      )
    )
  }
  
  return (
    <React.Fragment>
    <Header/>
    <h2>This will be the blog page</h2>
    {displayPosts(posts)}
    </React.Fragment>
  );
}

export default Blog;