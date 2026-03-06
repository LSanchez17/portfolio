import React from 'react'
import { ProjectContainer, MenuItems } from '../utils/enums'

const projects = [
    {
        name: 'AdlessKitchen',
        desc: 'Recipe Extraction Service',
        url: 'https://github.com/LSanchez17/AdlessKitchen',
        lang: 'TypeScript'
    },
    {
        name: 'BrowserAgent',
        desc: 'Ollama-powered Browser Agent Microservice',
        url: 'https://github.com/LSanchez17/BrowserAgent',
        lang: 'Python'
    },
    {
        name: 'rpgDungeonCrawler',
        desc: 'Dungeon Crawling at its finest',
        url: 'https://github.com/LSanchez17/rpgDungeonCrawler',
        lang: 'TypeScript'
    },
    {
        name: 'mathSheetGenerator',
        desc: 'Generates printable math problems',
        url: 'https://github.com/LSanchez17/mathSheetGenerator',
        lang: 'TypeScript'
    },
    {
        name: 'inventoryTool',
        desc: 'Retail inventory counting tool',
        url: 'https://github.com/LSanchez17/inventoryTool',
        lang: 'JavaScript'
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
                    </li>
                ))}
            </ul>
            <button onClick={() => reset(MenuItems.Projects)}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg></button>
        </div>
    )
}