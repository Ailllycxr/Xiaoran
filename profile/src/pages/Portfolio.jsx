import picture1 from "../assets/projectPicture1.png";
import picture2 from "../assets/projectPicture2.png";
import picture3 from "../assets/projectPicture3.png";
import picture4 from "../assets/projectPicture4.png";
import picture5 from "../assets/projectPicture5.png";
import picture6 from "../assets/projectPicture6.png";

const projects = [
  {
    title: "Wealth Wise",
    imageSrc: picture1,
    deployedLink: "https://weathwise-fdcd16b2c8c7.herokuapp.com",
    githubRepo: "https://github.com/Ailllycxr/WeathWise",
  },
  {
    title: "Cypto Dashboard",
    imageSrc: picture2,
    deployedLink: "https://ailllycxr.github.io/cryptoDashboard/",
    githubRepo: "https://github.com/Ailllycxr/cryptoDashboard",
  },
  {
    title: "Generating Password",
    imageSrc: picture3,
    deployedLink: " https://ailllycxr.github.io/GeneratingPW/",
    githubRepo: "https://github.com/Ailllycxr/GeneratingPW",
  },
  {
    title: "3rd Party API",
    imageSrc: picture4,
    deployedLink: "https://github.com/Ailllycxr/3PartyAPI/",
    githubRepo: " https://ailllycxr.github.io/3PartyAPI/",
  },
  {
    title: "Project 5",
    imageSrc: picture5,
    deployedLink: "https://github.com/Ailllycxr/weatherPage",
    githubRepo: "https://ailllycxr.github.io/weatherPage/",
  },
  {
    title: "SVG",
    imageSrc: picture6,
    deployedLink: "https://example.com/project1",
    githubRepo: "https://github.com/Ailllycxr/OOP",
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
