const Project = ({ project }) => {
    const { name, description, link, github } = project;

    return (
        <div className="project">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="links">
                <a href={link}>Link</a>
                <a href={github}>GitHub Repository</a>
            </div>
        </div>
    );
};

export default Project;