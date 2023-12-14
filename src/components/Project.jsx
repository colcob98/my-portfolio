const Project = ({ project }) => {
    const { name, description, link, github, image } = project;

    return (
        <div className="project">
            <h3>{name}</h3>
            <img className="project-pics" src={image} alt={name} />
            <p>{description}</p>
            <div className="project-links">
                <a href={link}>Link</a>
                <a href={github}>GitHub Repository</a>
            </div>
        </div>
    );
};

export default Project;