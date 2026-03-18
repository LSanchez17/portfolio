import React from 'react'
import { ProjectContainer, MenuItems } from '../utils/enums'

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
)

const projects = [
    {
        name: 'AdlessKitchen',
        desc: 'Recipe Extraction Service',
        blurb: 'Strips ads and irrelevant content from recipe pages, returning clean cooking instructions. Just the recipe, nothing else.',
        url: 'https://github.com/LSanchez17/AdlessKitchen',
        lang: ['TypeScript', 'Python']
    },
    {
        name: 'BrowserAgent',
        desc: 'Ollama-powered Browser Agent Microservice',
        blurb: 'Uses local LLMs via Ollama to autonomously browse the web and extract structured data on demand — no cloud required.',
        url: 'https://github.com/LSanchez17/BrowserAgent',
        lang: ['Python']
    },
    {
        name: 'Midnight-Drivein',
        desc: 'The Drive-In will never die!',
        blurb: 'Tauri based application. Fully local video player to load up Joe Bob segments alongside the appropriate movie for a true, Drive-In experience.',
        url: 'https://github.com/LSanchez17/Midnight-Drivein',
        lang: ['TypeScript', 'Rust']
    },
    {
        name: 'mathSheetGenerator',
        desc: 'Generates printable math problems',
        blurb: 'Creates customizable printable worksheets with configurable difficulty levels and problem types for students of all ages.',
        url: 'https://github.com/LSanchez17/mathSheetGenerator',
        lang: ['TypeScript']
    }
]

export const Projects = ({reset}) => {

    return(
        <div id={ProjectContainer.ProjectContainer}>
            <div className="proj-grid cards-wrapper">
                {projects.map((p, idx) => (
                    <a key={idx} href={p.url} target="_blank" rel="noreferrer" className="proj-card">
                        <div className="proj-card-header">
                            <GitHubIcon />
                            <span className="proj-name">{p.name}</span>
                        </div>
                        <p className="proj-desc">{p.desc}</p>
                        <p className="proj-blurb">{p.blurb}</p>
                        <span className="proj-lang">{p.lang.join(', ')}</span>
                    </a>
                ))}
            </div>
            <button onClick={(e) => { e.stopPropagation(); reset(MenuItems.Projects); }}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg></button>
        </div>
    )
}
