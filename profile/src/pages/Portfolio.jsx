import picture1 from "../assets/projectPicture1.png";
import picture2 from "../assets/projectPicture2.png";
import picture3 from "../assets/projectPicture3.png";
import picture4 from "../assets/projectPicture4.png";
import picture5 from "../assets/projectPicture5.png";
import picture6 from "../assets/projectPicture6.png";

const projects = [
  {
    title: "Project 1",
    imageSrc: picture1,
    deployedLink: "https://example.com/project1",
    githubRepo: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    imageSrc: picture2,
    deployedLink: "https://example.com/project1",
    githubRepo: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 3",
    imageSrc: picture3,
    deployedLink: "https://example.com/project1",
    githubRepo: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 4",
    imageSrc: picture4,
    deployedLink: "https://example.com/project1",
    githubRepo: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 5",
    imageSrc: picture5,
    deployedLink: "https://example.com/project1",
    githubRepo: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 6",
    imageSrc: picture6,
    deployedLink: "https://example.com/project1",
    githubRepo: "https://github.com/yourusername/project1",
  },
];
function Porfolio() {
  return (
    <div>
      <header>
        <h1>Portfolio</h1>
      </header>

      <section id="portfolio-section">
        <h2>Portfolio Section</h2>

        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <img src={project.imageSrc} alt={project.title} />
              <div className="project-links">
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployed App
                </a>
                <p></p>
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Porfolio;
