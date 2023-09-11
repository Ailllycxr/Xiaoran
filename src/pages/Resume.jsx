import reseume from "../assets/CV.png";

function Resume() {
  return (
    <div>
      <section id="resume-section">
        <h2>Resume Section</h2>
        <p>
          <a href={reseume} download>
            Download My Resume
          </a>
        </p>

        {/* List of Developer Proficiencies */}
        <h3>Developer Proficiencies</h3>
        <ul>JavaScript; React.js; HTML/CSS; Node.js</ul>
      </section>
    </div>
  );
}

export default Resume;
