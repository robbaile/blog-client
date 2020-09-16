import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/api/blogs')
      .then((data) => data.json())
      .then((data) => setResponse(data))
      .catch(err => console.log(err))
  }, []);
  if(!response) return (
    <p>Loading...</p>
  )
  return (
    <div className="App">
      <div className="Header">
        <div className="Header-logo">
          <p>WACKO BEGGAR</p>
        </div>
        <div className="Header-nav">
          <a className="Header-nav__item" href="/posts">Posts</a>
          <a className="Header-nav__item" href="/about">About</a>
        </div>
      </div>
      <div className="Hero">
        <div className="Hero-text">
          <p>In-depth column on the Latest Sport</p>
        </div>
      </div>
      <div className="Blogs-container">
        <h2 className="Blogs-heading">Newest blogs</h2>
        {response.blogs.map((blog) => (
          <div key={blog.id}>
            <p>{blog.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
