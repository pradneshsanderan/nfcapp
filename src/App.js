import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Pradnesh Sanderan</h1>
      <p>
        Hi! I'm a Master's student in Computer Science at the University of Edinburgh with a strong interest in software engineering and machine
        learning. I enjoy tackling complex problems, particularly in backend development and algorithms, and I am passionate about
        building efficient and scalable solutions. You can find listed below my CV and my projects on GitHub, where I share my work and collaborate with others.
      </p>
      <div className="buttons">
        <a
          href="https://www.linkedin.com/in/YOUR_LINKEDIN"
          className="btn linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/YOUR_GITHUB"
          className="btn github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="/cv.pdf"
          className="btn cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV
        </a>
      </div>
    </div>
  );
}

export default App;
