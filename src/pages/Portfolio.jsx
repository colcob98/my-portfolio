import { useState } from 'react';
import Project from "../components/Project";

function Portfolio() {
    const projects = [
        {
            name: 'LingoChat',
            description: 'A language exchange website',
            link: "https://colcob98.github.io/LingoChat/",
            github: "https://github.com/colcob98/LingoChat",
        },
        {
            name: 'TinLizzie',
            description: 'A language exchange website',
            link: "https://tinlizzie5-eeacb9132a68.herokuapp.com/",
            github: "https://github.com/colcob98/Tin-Lizzie",
        },
        {
            name: 'Weather Dashboard',
            description: 'A 5-day weather forecaster',
            link: "https://colcob98.github.io/weather-dashboard/",
            github: "https://github.com/colcob98/weather-dashboard",
        },
        {
            name: 'TinLizzie',
            description: 'A language exchange website',
            link: "https://tinlizzie5-eeacb9132a68.herokuapp.com/",
            github: "https://github.com/colcob98/Tin-Lizzie",
        },
        {
            name: 'TinLizzie',
            description: 'A language exchange website',
            link: "https://tinlizzie5-eeacb9132a68.herokuapp.com/",
            github: "https://github.com/colcob98/Tin-Lizzie",
        },
        {
            name: 'TinLizzie',
            description: 'A language exchange website',
            link: "https://tinlizzie5-eeacb9132a68.herokuapp.com/",
            github: "https://github.com/colcob98/Tin-Lizzie",
        },
    ];

    return (
        <div>
            <h1 className="page-header">Portfolio</h1>
            <div>
                {projects.map((project) => (
                    <Project 
                    project={project}
                    key={"project" + project.id}
                    />
                ))}
            </div>
        </div>
    )
}


export default Portfolio;