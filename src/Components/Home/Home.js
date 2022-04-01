import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  console.log(blogs);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className='blogs-container'>
      {blogs.map((blog) => (
        <Blog blog={blog} />
      ))}
    </div>
  );
};

export default Home;
