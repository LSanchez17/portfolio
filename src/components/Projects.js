import React from 'react'
import { ProjectContainer, MenuItems } from '../utils/enums'

const projects = [
    {
        name: 'AdlessKitchen',
        desc: 'Recipe Extraction Service',
        blurb: 'Extracts recipes from cooking websites and strips away ads, pop-ups, and filler content — delivering only the ingredients and instructions you actually need.',
        url: 'https://github.com/LSanchez17/AdlessKitchen',
        lang: 'TypeScript'
    },
    {
        name: 'BrowserAgent',
        desc: 'Ollama-powered Browser Agent Microservice',
        blurb: 'A FastAPI microservice that pairs Playwright browser automation with a local Ollama LLM to execute tasks on web pages. Supports both synchronous and async execution with Redis-backed state management and webhook callbacks.',
        url: 'https://github.com/LSanchez17/BrowserAgent',
        lang: 'Python'
    },
    {
        name: 'rpgDungeonCrawler',
        desc: 'Dungeon Crawling at its finest',
        blurb: 'An LLM-powered dungeon crawling RPG featuring procedurally generated content, world history creation, and an adaptive difficulty overseer system. Currently in active development.',
        url: 'https://github.com/LSanchez17/rpgDungeonCrawler',
        lang: 'TypeScript'
    },
    {
        name: 'mathSheetGenerator',
        desc: 'Generates printable math problems',
        blurb: 'Customizable math worksheet generator for creating printable problem sets. Configure the number of problems, operator type, and difficulty tier. Try the live demo linked in the repo.',
        url: 'https://github.com/LSanchez17/mathSheetGenerator',
        lang: 'TypeScript'
    }
]

export const Projects = ({reset}) => {

    return(
        <div id={ProjectContainer.ProjectContainer}>
            <ul>
                {projects.map((p, idx) => (
                    <li key={idx}>
                        <a href={p.url} target="_blank" rel="noreferrer">
                            <span className="proj-name">{p.name}</span>
                        </a>
                        <span className="proj-desc"> — {p.desc}</span>
                        <span className="proj-lang"> [{p.lang}]</span>
                        <span className="proj-blurb">{p.blurb}</span>
                    </li>
                ))}
            </ul>
            <button onClick={() => reset(MenuItems.Projects)}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg></button>
        </div>
    )
}