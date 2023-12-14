import { useState } from 'react';
import Project from "../components/Project";

function Portfolio() {
    const projects = [
        {
            name: 'LingoChat',
            description: 'A language exchange website',
            link: "https://colcob98.github.io/LingoChat/",
            github: "https://github.com/colcob98/LingoChat",
            image: "./lingochat.png"
        },
        {
            name: 'TinLizzie',
            description: 'A language exchange website',
            link: "https://tinlizzie5-eeacb9132a68.herokuapp.com/",
            github: "https://github.com/colcob98/Tin-Lizzie",
            image: "./tin-lizzie.png"
        },
        {
            name: 'Weather Dashboard',
            description: 'A 5-day weather forecaster',
            link: "https://colcob98.github.io/weather-dashboard/",
            github: "https://github.com/colcob98/weather-dashboard",
            image: "./weather-dashboard.png"
        },
        {
            name: 'Work Day Scheduler',
            description: 'A time-management helper',
            link: "https://colcob98.github.io/work-day-scheduler/",
            github: "https://github.com/colcob98/work-day-scheduler",
            image: "./work-day-scheduler.png"
        },
        {
            name: 'Note Taker',
            description: 'A web-app for taking notes',
            link: "https://sheltered-plains-05711-39d7f6bd52f2.herokuapp.com/",
            github: "https://github.com/colcob98/note-taker",
            image: "./note-taker.png"
        },
        {
            name: 'Code Quiz',
            description: 'Think you know code? Quiz yourself!',
            link: "https://colcob98.github.io/code-quiz/index.html",
            github: "https://github.com/colcob98/code-quiz",
            image: "./code-quiz.png"
        },
    ];

    return (
        <div className="page-content">
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