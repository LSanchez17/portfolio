import './App.css';

function App() {
  return (
    <div className="portfolio-scene">
      <div className="floating-links">
        <a className="floating-circle github-circle" href="https://github.com/LSanchez17" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="floating-circle linkedin-circle" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="floating-circle about-circle" href="#about">
          About
        </a>
      </div>
      <div className="campfire" role="img" aria-label="campfire">
        🔥
      </div>
      <section id="about" className="about-section">
        Building thoughtful, human-centered software.
      </section>
    </div>
  );
}

export default App;
