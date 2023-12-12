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
    ];

    return (
        <div>
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