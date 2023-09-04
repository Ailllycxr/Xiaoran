
function Projects(project) {
  const { title, deployedlink, githublink } = project;

  return (
    <div className="container">
      <div className="card">
        <img className="card-img" src={project[title]} alt={title} />
        <div className="card-body">
          <h5 className="card-title">Name: {title}</h5>
          <a href={deployedlink} className="deployedlink">
            Deploy Link: {deployedlink}
          </a>
          <a href={githublink} className="githublink">
            Github Link: {githublink}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
