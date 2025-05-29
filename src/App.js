import React from "react";
import "./App.css";
import bg1 from './assets/bg1.png';  // (if you want to use this later)
import bg2 from './assets/bg2.png';

function App() {
  // Glow effect that tracks the cursor inside a button
  const handleMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--x", `${x}px`);
    target.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      className="container"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${bg1})`,
        backgroundSize: '175% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',  // adjust opacity to dim more or less
          zIndex: 0,
        }}
      />

      {/* Content with higher z-index so it sits above overlay */}
      <div className="bio-card" style={{ position: 'relative', zIndex: 1, color: 'white', padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Pradnesh Sanderan</h1>
        <p>
          Hi! I'm a Master's student in Computer Science at the University of Edinburgh with a strong interest in software engineering.. 
          You can find listed below my CV and my projects on GitHub.
        </p>
      </div>

      <div className="buttons" style={{ position: 'relative', zIndex: 1, marginTop: '2rem', justifyContent: 'center' }}>
        <a
          href="https://www.linkedin.com/in/pradneshsanderan/"
          className="btn holo linkedin"
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/pradneshsanderan"
          className="btn holo github"
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
        >
          GitHub
        </a>
        <a
          href="/cv.pdf"
          className="btn holo cv"
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
        >
          View CV
        </a>
      </div>
    </div>
  );
}

export default App;
