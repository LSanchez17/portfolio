import './App.css';
import { Socials } from './utils/enums';

function App() {
  return (
    <div className="portfolio-scene">
      <div className="floating-links">
        <a className="floating-circle github-circle" href={Socials.GitHubUri} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="floating-circle linkedin-circle" href={Socials.LinkedInUri} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="floating-circle about-circle" href="/about">
          About
        </a>
      </div>
      <div className="campfire" role="img" aria-label="campfire">
        <div className="fire-glow" />
        <div className="flame flame-back" />
        <div className="flame flame-mid" />
        <div className="flame flame-front" />
        <div className="log log-left" />
        <div className="log log-right" />
      </div>
    </div>
  );
}

export default App;
