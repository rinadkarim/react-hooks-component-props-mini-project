import React from "react";
import blogData from "../data/blog";
import About from "../components/About.js";
import Header from "../components/Header.js";
import ArticleList from "../components/ArticleList.js";

console.log(blogData);

function App() {
  const blogName = "Underreacted";
  const blogAbout = "A blog about learning React";
  const posts = blogData.posts;
  return (
    <div className="App">
     <Header name={blogName} />
     <About about={blogAbout} />
     <ArticleList posts={posts} />
    </div>
    
  );
}

export default App;
